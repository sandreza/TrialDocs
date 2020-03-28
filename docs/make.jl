push!(LOAD_PATH,"../src/")
using Documenter, TrialDocs

makedocs(modules = [TrialDocs], sitename = "TrialDocs.jl")

deploydocs(repo = "github.com/sandreza/TrialDocs.jl.git")
