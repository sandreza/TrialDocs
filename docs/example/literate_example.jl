# # My Example
#
# Here we will try to create a literature example that is also code

# First we import our module
using TrialDocs

# Now we use the functions in the module
# Specifically the testargs function

test_args_kw(1, "tomorrow", ones(2,2), keyword = "my keyword")
# The output is
