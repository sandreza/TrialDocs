push!(LOAD_PATH,"../src/")
using Documenter, TrialDocs

makedocs(modules = [TrialDocs], sitename = "TrialDocs")

deploydocs(repo = "github.com/sandreza/TrialDocs.git")
