# Contribution Guide for Abstract Iterative Solvers

An abstract iterative solver is a module that needs one struct, one constructor, and two functions (initialize! and doiteration!). In order to interface with the rest of [CliMa](https://github.com/climate-machine). In what follows we will describe in detail the function signatures, return values, and struct properties necessary to build with [CliMa](https://github.com/climate-machine).

## Basic Template

A basic template of an iterative solver (replace MyIterativeMethod and function bodies appropriately) is as follows:

```julia
module MyIterativeMethodSolver

export MyIterativeMethod

using ..LinearSolvers
const LS = LinearSolvers

# The Struct
struct MyIterativeMethod{FT} <: LS.AbstractIterativeLinearSolver
  # minimum
  rtol::FT
  atol::FT
  # Add more structre if necessary
end

# an outer constructor
function MyIterativeMethod(args...)
  # body of constructor
  return MyIterativeMethod(contructor_args...)
end

# initialize function
function LS.initialize!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, args...)
  # body of initialize function in abstract iterative solver
  return Bool, Int
end

# iteration function
function LS.doiteration!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, threshold, args...)
  # body of iteration
  return Bool, Int, Float
end
```

We will describe each component in detail in subsequent sections.

## Struct

A struct needs at least two members

```
struct MyIterativeMethod{FT}
  atol::FT
  rtol::FT
end
```

## Initialize Function

The initialize function needs the following signature

```
initialize!(Q, Qrhs, args...)
```

An example implementation (that does nothing) would be

```
initialize!(::MyIterativeMethod)
```

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

TO DO

## Writing Tests

Test on small systems where answers can be checked analytically. Check with matrices with easily computable inverses, i.e., the identity matrix or a diagonal matrix. Test with Diverse matrix structures

## Performance Checks

Timing performance can be done with general GPU guidelines

## Conventions
