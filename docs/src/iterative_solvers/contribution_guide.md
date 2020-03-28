# Contribution Guide for Abstract Iterative Solvers

An abstract iterative solver is a module that needs one struct, one constructor, and two functions (initialize! and doiteration!), in order to interface with the rest of [CliMa](https://github.com/climate-machine). In what follows we will describe in detail the function signatures, return values, and struct properties necessary to build with [CliMa](https://github.com/climate-machine).

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

## Struct

A struct needs at least two members, e.g.,

```
struct MyIterativeMethod{FT}
  atol::FT
  rtol::FT
end
```
but often has more depending on the kind of iterative solver being used. For example, in a [Krylov Subspace Method](https://en.wikipedia.org/wiki/Krylov_subspace) one would need to store a number of vectors which constitute the Krylov subspace.

## Constructor

The constructor for the struct can be defined any number of ways depending on the needs of the struct itself. Often times this is just used to allocate memory or convergence thresholds. This can also be a good place to define structures that make the iterative solver easier to work with. For example, one would

In the [Basic Template for an Iterative Solver](@ref)

```julia
# constructor
function MyIterativeMethod(args...)
  # body of constructor
  return MyIterativeMethod(contructor_args...)
end
```

## Initialize Function

The initialize function needs the following signature
```
function LS.initialize!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, args...)
  # body of initialize function in abstract iterative solver
  return Bool, Int
end
```
The arguments are as follows
- linearoperator!: A function that is assumed to have the following signature
```julia
linearoperator!(y, x, args...)

  return nothing
end
```
This represents the action of a linear operator L on a vector x, that stores the value in the vector y, i.e. Lx = y. The last argument (the args...) is necessary due to how linear operators are defined in CliMa. See for example the IMEX METHODS. 



## Iteration Function


The iteration function needs the following signature

```
doiteration!(Q, Qrhs, args...)
```

An example implementation (that does nothing) would be

```
doiteration!(::MyIterativeMethod)
```

## CliMa Specific Considerations

Don't take up too much memory. By default a 3D MPI State Array has the following structure ... ,

## Preconditioners

The code needs to be slightly restructured to allow for preconditioenrs.

## Writing Tests

Test on small systems where answers can be checked analytically. Check with matrices with easily computable inverses, i.e., the identity matrix or a diagonal matrix. Test with Diverse matrix structures

## Performance Checks

Timing performance can be done with general GPU guidelines

## Conventions

- The name of the module is the name of the struct but with solver appended
- Q refers to the initial guess for the iterative solver that gets overwritten with the final solution
- Qrhs refers to the right hand side of the linear system
