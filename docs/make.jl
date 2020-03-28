push!(LOAD_PATH,"../src/")
using Documenter, TrialDocs

makedocs(
    modules = [TrialDocs],
    pages = [
        "Home" => "index.md",
        "Contribution Guide" => "iterative_solvers/contribution_guide.md"
    ],
    sitename = "TrialDocs"
)

deploydocs(repo = "github.com/sandreza/TrialDocs.git")
