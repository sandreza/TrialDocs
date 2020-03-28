"""
test_args(args...)

# Description

Testing to see if I can create documentation from a different folder

# Arguments
- `args...`: (arbitrary as long as it works with println).

# Return
- Nothing

# Additional details
"""
function test_args(args...)
    for i in args
        println(i)
    end
    return nothing
end

"""
test_args_kw(args..., keyword = "keyword")

# Description

Testing to see if I can create documentation from a different folder

# Arguments
- `args...`: (arbitrary as long as it works with println).

# Keyword Arguments
- `keyword`: default = "keyword"

# Return
- Nothing

# Additional details
Just another test
"""
function test_args_kw(args...; keyword = "keyword")
    println("The function arguments are")
    for i in args
        println(i)
    end
    println("The keyword argument is ")
    println(keyword)
    return nothing
end
