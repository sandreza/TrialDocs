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
