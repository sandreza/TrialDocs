# Contribution Guide for Abstract Iterative Solvers

An abstract iterative solver is a **module** that needs **one struct**, **one constructor**, and **two functions** in order to interface with the rest of [CliMa](https://github.com/climate-machine). In what follows we will describe in detail the function signatures, return values, and struct properties necessary to build with [CliMa](https://github.com/climate-machine).

We have the following concrete implementations:
1. [GMRES](https://github.com/climate-machine/CLIMA/blob/master/src/LinearSolvers/GeneralizedMinimalResidualSolver.jl)
1. [Conjugate Residual](https://github.com/climate-machine/CLIMA/blob/master/src/LinearSolvers/GeneralizedConjugateResidualSolver.jl)
1. [Conjugate Gradient](https://github.com/climate-machine/CLIMA/blob/ans/pcg/src/LinearSolvers/ConjugateGradientSolver.jl)

## Basic Template for an Iterative Solver

A basic template of an iterative solver could be as follows:

```julia
module MyIterativeMethodSolver

export MyIterativeMethod

using ..LinearSolvers
const LS = LinearSolvers

# struct
struct MyIterativeMethod{FT} <: LS.AbstractIterativeLinearSolver
  # minimum
  rtol::FT
  atol::FT
  # Add more structure if necessary
end

# constructor
function MyIterativeMethod(args...)
  # body of constructor
  return MyIterativeMethod(contructor_args...)
end

# initialize function (1)
function LS.initialize!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, args...)
  # body of initialize function in abstract iterative solver
  return Bool, Int
end

# iteration function (2)
function LS.doiteration!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, threshold, args...)
  # body of iteration
  return Bool, Int, Float
end

end # end of module
```
MyIterativeMethod and function bodies would need to be replaced appropriately for a particular implementation. We will describe each component in detail in subsequent sections.

### Struct

A subset of AbstractIterativeLinearSolver needs at least two members: atol and rtol. The former represents an absolute tolerance and the latter is a relative tolerance. Both can be used to terminate the iteration to determine the convergence criteria. An example struct could be
```julia
struct MyIterativeMethod{FT} <: LS.AbstractIterativeLinearSolver
  atol::FT
  rtol::FT
end
```
but often has more depending on the kind of iterative solver being used.  For example, in a Krylov subspace method one would need to store a number of vectors which constitute the [Krylov subspace](https://en.wikipedia.org/wiki/Krylov_subspace).

### Constructor

The constructor for the struct can be defined any number of ways depending on the needs of the struct itself. Often times this is just used to allocate memory or convergence thresholds. This can also be a good place to define structures that make the iterative solver easier to work with. For example, for a columnwise solver one would want an easy array structure to work with vectors in a columnwise fashion.

In [Basic Template for an Iterative Solver](@ref) we used an outer constructor, e.g.,
```julia
# constructor
function MyIterativeMethod(args...)
  # body of constructor
  return MyIterativeMethod(contructor_args...)
end
```
but we could have also used an inner constructor if desired.

### Initialize Function

The initialize function needs the following signature
```julia
function LS.initialize!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, args...)
  # body of initialize function in abstract iterative solver
  return Bool, Int
end
```


The intialize function has the following **arguments**:
1. ```linearoperator!``` (function)
1. ```Q```    (array) [OVERWRITTEN]
1. ```Qrhs``` (array)
1. ```solver``` (struct) used for dispatch
1. ```args...``` passed to ```linearoperator!``` function

The ```linearoperator!``` function is assumed to have the following signature:
```julia
linearoperator!(y, x, args...)
    # body of linear operator
    return nothing
end
```
It represents action of a linear operator ``L`` on a vector ``x``, that stores the value in the vector ``y``, i.e. ``Lx = y``. The last argument (the args...) is necessary due to how linear operators are defined within CliMa.

The ``` Q ``` and ```Qrhs``` function arguments are supposed to represent the solution of the linear system `LQ = Qrhs` where `L` is the linear operator implicitly defined by ```linearoperator!```.

The initialize function must have **2 return values**:
1. ```convergence``` (bool)
1. ```iterations``` (int)

The return values keep track of whether or not the iterative algorithm has converged as well as how many times the linear operator was applied.

### Iteration Function

The iteration function needs the following signature

```julia
function LS.doiteration!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, threshold, args...)
  # body of iteration
  return Bool, Int, Float
end
```

The iteration function has the following **arguments**:
1. ```linearoperator!``` (function)
1. ```Q``` (array) [OVERWRITTEN]
1. ```Qrhs``` (array)
1. ```solver``` (struct). used for dispatch
1. ```threshold``` (float). for the convergence criteria
1. ```args...``` passed into the ```linearoperator!``` function

The ```linearoperator!``` function is assumed to have the following signature:
```julia
linearoperator!(y, x, args...)
    # body of linear operator
    return nothing
end
```
It represents action of a linear operator ``L`` on a vector ``x``, that stores the value in the vector ``y``, i.e. ``Lx = y``. The last argument (the args...) is necessary due to how linear operators are defined within CliMa.

The ``` Q ``` and ```Qrhs``` function arguments are supposed to represent the solution of the linear system `LQ = Qrhs` where `L` is the linear operator implicitly defined by ```linearoperator!```.

The iteration function must have **3 return values**:
1. ```converged``` (bool)
1. ```iterations``` (int)
1. ```residual_norm``` (float64)

The return values keep track of whether or not the iterative algorithm has converged as well as how many times the linear operator was applied. The residual norm is useful since it is often used to determine a stopping criteria.

## CliMa Specific Considerations

- Since GPUs have limited memory, don't take up too much memory.
- By default a 3D MPI State Array has the following structure ... ,
- If possible define a preconditioner. Iterative methods are typically very slow otherwise.

## Preconditioners

The code needs to be slightly restructured to allow for preconditioners.

## Writing Tests

Test on small systems where answers can be checked analytically. Check with matrices with easily computable inverses, i.e., the identity matrix or a diagonal matrix. Test with diverse matrix structures. Test with different array types: Arrays, CuArrays, MPIStateArrays, etc. Also test with balance laws to make sure that it can actually be run with IMEX solvers on the CPU/GPU and their distributed analogues.

## Performance Checks

Timing performance can be done with general CPU/GPU guidelines

## Conventions

- The name of the module is the name of the struct but with solver appended
- Q refers to the initial guess for the iterative solver that gets overwritten with the final solution
- Qrhs refers to the right hand side of the linear system
