# Contribution Guide for Abstract Iterative Solvers

An abstract iterative solver needs one struct, one constructor, and two functions (initialize! and doiteration!). In order to interface with the rest of CliMa. In what follows we will describe in detail the function signatures, return values, and struct properties necessary to build with CliMA.

We will illustrate the method by defining a new struct

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
