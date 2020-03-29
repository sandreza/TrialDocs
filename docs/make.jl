push!(LOAD_PATH,"../src/")
using Documenter, Literate, TrialDocs


const examples_directory = pwd() * "docs/src/example/"
const output_directory = pwd() * "docs/src/generated/"
# should generate on the fly
examples = ["literate_example.jl"]

for example in examples
    example_filepath = examples_directory * example
    Literate.markdown(example_filepath, output_directory, documenter = true)
end

makedocs(
    modules = [TrialDocs],
    pages = [
        "Home" => "index.md",
        "Contribution Guide" => [
            "Iterative Solvers" => "iterative_solvers/contribution_guide.md",
            "Time Stepping" => "time_steppers/contribution_guide.md",
        ],
        "Examples" => [
            "first example" => "generated/literate_example.jl"
        ]
        "Function Index" => "function_index.md"
    ],
    sitename = "TrialDocs"
)

deploydocs(repo = "github.com/sandreza/TrialDocs.git")
