# Contribution Guide for Abstract Time Steppers

The main method that we have for time-stepping are Runge-Kutta methods. Of the kinds of Runge-Kutta methods we have Implicit-Explicit methods as well as multi-rate methods.

## Function
Testing
```
solve!(Q, method, dt = dt, linear_solver = whatever)
```


## Testing Latex
Testing inline math ``\sqrt[n]{1 + x + x^2 + \ldots}``. Now testing equation

```math
\frac{n!}{k! (n-k)!} = \binom{n}{k}
```

``\frac{1}{2}``


## Testing Tables italics and bold

| Name | Contact|
|--------|------|
|generic name | generic email |
| other name | other email |

And end of table

1. **bold**
1. *italics*
1. ~~strikethrough~~

* Asterisks for unordered lists
- Dashes also work

* For nested one needs to tab
  * tabbed list

1. part one
  1. part one a
  1. part one b
1. part two
1. part three


## Footnotes

Now I can test footnote. [^1]


## Warnings

!!! warning check this

!!! tip
I wonder if tips will works



I guess it might not work

[^1]: A footnote
