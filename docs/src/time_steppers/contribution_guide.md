# Contribution Guide for Abstract Time Steppers

The main method that we have for time-stepping are Runge-Kutta methods. Of the kinds of Runge-Kutta methods we have Implicit-Explicit methods as well as multi-rate methods.

## Function
Testing
```
solve!(Q, method, dt = dt, linear_solver = whatever)
```
