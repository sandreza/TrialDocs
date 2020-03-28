push!(LOAD_PATH,"../src/")
using Documenter, TrialDocs

makedocs(
    modules = [TrialDocs],
    pages = [
        "Home" => "index.md",
        "Contribution Guide" => [
            "Iterative Solvers" => "iterative_solvers/contribution_guide.md"
        ],
        "Function Index" => "function_index.md"
    ],
    sitename = "TrialDocs"
)

deploydocs(repo = "github.com/sandreza/TrialDocs.git")
