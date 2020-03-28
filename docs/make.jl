push!(LOAD_PATH,"../src/")
using Documenter, TrialDocs

makedocs(
    modules = [TrialDocs],
    pages = [
        "index.md"
    ],
    sitename = "TrialDocs"
)

deploydocs(repo = "github.com/sandreza/TrialDocs.git")
