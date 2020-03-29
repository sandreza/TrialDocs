push!(LOAD_PATH,"../src/")
using Documenter, Literate, TrialDocs

# should generate on the fly
examples = ["literate_example.jl"]

makedocs(
    modules = [TrialDocs],
    pages = [
        "Home" => "index.md",
        "Contribution Guide" => [
            "Iterative Solvers" => "iterative_solvers/contribution_guide.md",
            "Time Stepping" => "time_steppers/contribution_guide.md",
        ],
        "Function Index" => "function_index.md"
    ],
    sitename = "TrialDocs"
)

deploydocs(repo = "github.com/sandreza/TrialDocs.git")
