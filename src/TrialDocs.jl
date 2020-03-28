module TrialDocs

include("Random/new_functions.jl")

export hello, domath, test_args

"""
    hello(who::String)

Return "Hello, `who`".
"""
hello(who::String) = "Hello, $who"

"""
    domath(x::Number)

Return `x + 5`.
"""
domath(x::Number) = x + 5



end # module
