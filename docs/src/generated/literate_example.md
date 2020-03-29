```@meta
EditURL = "<unknown>/docs/example/literate_example.jl"
```

# My Example

Here we will try to create a literate example that is also code

First we import our module

```@example literate_example
using TrialDocs
```

Now we use the functions in the module
Specifically the testargs function

```@example literate_example
test_args_kw(1, "tomorrow", ones(2,2), keyword = "my keyword")
```

```math
  \frac{1}{2}
```

---

*This page was generated using [Literate.jl](https://github.com/fredrikekre/Literate.jl).*
