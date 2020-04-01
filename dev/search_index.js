var documenterSearchIndex = {"docs":
[{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"EditURL = \"https://github.com/sandreza/TrialDocs/blob/master/docs/example/literate_example.jl\"","category":"page"},{"location":"generated/literate_example/#My-Example-1","page":"first example","title":"My Example","text":"","category":"section"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"Here we will try to create a literate example that is also code","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"First we import our module","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"using TrialDocs, Plots","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"Now we use the functions in the module Specifically the testargskw function","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"test_args_kw(1, \"tomorrow\", ones(2,2), keyword = \"my keyword\")","category":"page"},{"location":"generated/literate_example/#Math-1","page":"first example","title":"Math","text":"","category":"section"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"We can test some math","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"  frac12","category":"page"},{"location":"generated/literate_example/#Plotting-1","page":"first example","title":"Plotting","text":"","category":"section"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"Now we can test plotting","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"x = randn(3)\nscatter(x, grid = true, gridstyle = :dash, gridalpha = 0.25, framestyle = :box, label = false, title = \"simple graph\", xlabel = \"horizontal axis\", ylabel = \"vertical axis\")","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"tip: Tip\nmaybe?","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"","category":"page"},{"location":"generated/literate_example/#","page":"first example","title":"first example","text":"This page was generated using Literate.jl.","category":"page"},{"location":"time_steppers/contribution_guide/#Contribution-Guide-for-Abstract-Time-Steppers-1","page":"Time Stepping","title":"Contribution Guide for Abstract Time Steppers","text":"","category":"section"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"The main method that we have for time-stepping are Runge-Kutta methods. Of the kinds of Runge-Kutta methods we have Implicit-Explicit methods as well as multi-rate methods.","category":"page"},{"location":"time_steppers/contribution_guide/#Function-1","page":"Time Stepping","title":"Function","text":"","category":"section"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"Testing","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"solve!(Q, method, dt = dt, linear_solver = whatever)","category":"page"},{"location":"time_steppers/contribution_guide/#Testing-Latex-1","page":"Time Stepping","title":"Testing Latex","text":"","category":"section"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"Testing inline math sqrtn1 + x + x^2 + ldots. Now testing equation","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"fracnk (n-k) = binomnk","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"frac12","category":"page"},{"location":"time_steppers/contribution_guide/#Testing-Tables-italics-and-bold-1","page":"Time Stepping","title":"Testing Tables italics and bold","text":"","category":"section"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"Name Contact\ngeneric name generic email\nother name other email","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"And end of table","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"bold\nitalics\n~~strikethrough~~","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"Asterisks for unordered lists\nDashes also work\nFor nested one needs to tab\ntabbed list","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"part one\npart one a\npart one b\npart two\npart three","category":"page"},{"location":"time_steppers/contribution_guide/#Footnotes-1","page":"Time Stepping","title":"Footnotes","text":"","category":"section"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"Now I can test footnote. [1]","category":"page"},{"location":"time_steppers/contribution_guide/#Warnings-1","page":"Time Stepping","title":"Warnings","text":"","category":"section"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"warning: Warning\ncheck this","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"tip: Tip\nI wonder if tips will works","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"I guess it might not work","category":"page"},{"location":"time_steppers/contribution_guide/#","page":"Time Stepping","title":"Time Stepping","text":"[1]: A footnote","category":"page"},{"location":"iterative_solvers/contribution_guide/#Contribution-Guide-for-Abstract-Iterative-Solvers-1","page":"Iterative Solvers","title":"Contribution Guide for Abstract Iterative Solvers","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"An abstract iterative solver is a module that needs one struct, one constructor, and two functions in order to interface with the rest of CliMa. In what follows we will describe in detail the function signatures, return values, and struct properties necessary to build with CliMa.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"We have the following concrete implementations:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"GMRES\nConjugate Residual\nConjugate Gradient","category":"page"},{"location":"iterative_solvers/contribution_guide/#Basic-Template-for-an-Iterative-Solver-1","page":"Iterative Solvers","title":"Basic Template for an Iterative Solver","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"A basic template of an iterative solver could be as follows:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"module MyIterativeMethodSolver\n\nexport MyIterativeMethod\n\nusing ..LinearSolvers\nconst LS = LinearSolvers\n\n# struct\nstruct MyIterativeMethod{FT} <: LS.AbstractIterativeLinearSolver\n  # minimum\n  rtol::FT\n  atol::FT\n  # Add more structure if necessary\nend\n\n# constructor\nfunction MyIterativeMethod(args...)\n  # body of constructor\n  return MyIterativeMethod(contructor_args...)\nend\n\n# initialize function (1)\nfunction LS.initialize!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, args...)\n  # body of initialize function in abstract iterative solver\n  return Bool, Int\nend\n\n# iteration function (2)\nfunction LS.doiteration!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, threshold, args...)\n  # body of iteration\n  return Bool, Int, Float\nend\n\nend # end of module","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"MyIterativeMethod and function bodies would need to be replaced appropriately for a particular implementation. We will describe each component in detail in subsequent sections.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Struct-1","page":"Iterative Solvers","title":"Struct","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"A subset of AbstractIterativeLinearSolver needs at least two members: atol and rtol. The former represents an absolute tolerance and the latter is a relative tolerance. Both can be used to terminate the iteration to determine the convergence criteria. An example struct could be","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"struct MyIterativeMethod{FT} <: LS.AbstractIterativeLinearSolver\n  atol::FT\n  rtol::FT\nend","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"but often has more depending on the kind of iterative solver being used.  For example, in a Krylov subspace method one would need to store a number of vectors which constitute the Krylov subspace.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Constructor-1","page":"Iterative Solvers","title":"Constructor","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The constructor for the struct can be defined any number of ways depending on the needs of the struct itself. Often times this is just used to allocate memory or convergence thresholds. This can also be a good place to define structures that make the iterative solver easier to work with. For example, for a columnwise solver one would want an easy array structure to work with vectors in a columnwise fashion.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"In Basic Template for an Iterative Solver we used an outer constructor, e.g.,","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"# constructor\nfunction MyIterativeMethod(args...)\n  # body of constructor\n  return MyIterativeMethod(contructor_args...)\nend","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"but we could have also used an inner constructor if desired.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Initialize-Function-1","page":"Iterative Solvers","title":"Initialize Function","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The initialize function needs the following signature","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"function LS.initialize!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, args...)\n  # body of initialize function in abstract iterative solver\n  return Bool, Int\nend","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The intialize function has the following arguments:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"linearoperator! (function)\nQ    (array) [OVERWRITTEN]\nQrhs (array)\nsolver (struct) used for dispatch\nargs... passed to linearoperator! function","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The linearoperator! function is assumed to have the following signature:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"linearoperator!(y, x, args...)\n    # body of linear operator\n    return nothing\nend","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"It represents action of a linear operator L on a vector x, that stores the value in the vector y, i.e. Lx = y. The last argument (the args...) is necessary due to how linear operators are defined within CliMa.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The Q and Qrhs function arguments are supposed to represent the solution of the linear system LQ = Qrhs where L is the linear operator implicitly defined by linearoperator!.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The initialize function must have 2 return values:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"convergence (bool)\niterations (int)","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The return values keep track of whether or not the iterative algorithm has converged as well as how many times the linear operator was applied.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Iteration-Function-1","page":"Iterative Solvers","title":"Iteration Function","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The iteration function needs the following signature","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"function LS.doiteration!(linearoperator!, Q, Qrhs, solver::MyIterativeMethod, threshold, args...)\n  # body of iteration\n  return Bool, Int, Float\nend","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The iteration function has the following arguments:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"linearoperator! (function)\nQ (array) [OVERWRITTEN]\nQrhs (array)\nsolver (struct). used for dispatch\nthreshold (float). for the convergence criteria\nargs... passed into the linearoperator! function","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The linearoperator! function is assumed to have the following signature:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"linearoperator!(y, x, args...)\n    # body of linear operator\n    return nothing\nend","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"It represents action of a linear operator L on a vector x, that stores the value in the vector y, i.e. Lx = y. The last argument (the args...) is necessary due to how linear operators are defined within CliMa.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The Q and Qrhs function arguments are supposed to represent the solution of the linear system LQ = Qrhs where L is the linear operator implicitly defined by linearoperator!.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The iteration function must have 3 return values:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"converged (bool)\niterations (int)\nresidual_norm (float64)","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The return values keep track of whether or not the iterative algorithm has converged as well as how many times the linear operator was applied. The residual norm is useful since it is often used to determine a stopping criteria.","category":"page"},{"location":"iterative_solvers/contribution_guide/#CliMa-Specific-Considerations-1","page":"Iterative Solvers","title":"CliMa Specific Considerations","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"There are several code considerations specific to CliMa. We will describe some of these in the following subsections","category":"page"},{"location":"iterative_solvers/contribution_guide/#MPI-State-Arrays-1","page":"Iterative Solvers","title":"MPI State Arrays","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"An MPIStateArray Q in 3D, has the following structure by default:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"size(Q) = (n_ijk, n_s, n_e)","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"where","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"n_ijk is the number of Gauss-Lobatto points per element\nn_s is the number of states\nn_e is the number of elements","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"In three dimensions, if one wants to operator in a column-wise fashion (with a stacked-brick topology) it is easiest to reshape the array into the following form","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"alias_Q = reshape(Q, (n_i, n_j, n_k, n_s, n_ev, n_eh))","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"where","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"n_i is the number of Gauss-Lobatto points per element within element that are aligned with one of the horizontal directions.\nn_j is the number of Gauss-Lobatto points per element within element that are aligned with another one of the horizontal directions.\nn_k is the number of Gauss-Lobatto points within element that are aligned with the vertical direction.\nn_s is the number of states\nn_ev is the number of elements in the vertical direction\nn_eh is the number of elements in the horizontal direction","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"Note: n_i x n_j x n_k = n_ijk and n_ev x n_eh = n_e.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"Thus if one wants to operate on a column for a fixed state index (let's say the int s) and a fixed horizontal coordinate (let's say fixed ints i, j, eh), then one could operator on the state:","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"one_column = alias_Q[i, j, :, s, :, eh]","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"which are the third and fifth argument in the MPIStateArray.","category":"page"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"Another important fact is that one cannot broadcast MPIStateArrays. Thus if one has an MPIStateArray Q one often instead must work with Q.data. Also one cannot reshape MPIStateArrays.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Extra-Considerations-1","page":"Iterative Solvers","title":"Extra Considerations","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"Since GPUs have limited memory, don't take up too much memory.\nIf possible define a preconditioner. Iterative methods are typically very slow otherwise.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Preconditioners-1","page":"Iterative Solvers","title":"Preconditioners","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The code needs to be slightly restructured to allow for preconditioners.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Writing-Tests-1","page":"Iterative Solvers","title":"Writing Tests","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"Test on small systems where answers can be checked analytically. Check with matrices with easily computable inverses, i.e., the identity matrix or a diagonal matrix. Test with diverse matrix structures. Test with different array types: Arrays, CuArrays, MPIStateArrays, etc. Also test with balance laws to make sure that it can actually be run with IMEX solvers on the CPU/GPU and their distributed analogues.","category":"page"},{"location":"iterative_solvers/contribution_guide/#Performance-Checks-1","page":"Iterative Solvers","title":"Performance Checks","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"Timing performance can be done with general CPU/GPU guidelines","category":"page"},{"location":"iterative_solvers/contribution_guide/#Conventions-1","page":"Iterative Solvers","title":"Conventions","text":"","category":"section"},{"location":"iterative_solvers/contribution_guide/#","page":"Iterative Solvers","title":"Iterative Solvers","text":"The name of the module is the name of the struct but with solver appended\nQ refers to the initial guess for the iterative solver that gets overwritten with the final solution\nQrhs refers to the right hand side of the linear system","category":"page"},{"location":"function_index/#List-of-functions-in-TrialDocs-module-1","page":"Function Index","title":"List of functions in TrialDocs module","text":"","category":"section"},{"location":"function_index/#","page":"Function Index","title":"Function Index","text":"Modules = [TrialDocs]","category":"page"},{"location":"function_index/#TrialDocs.domath-Tuple{Number}","page":"Function Index","title":"TrialDocs.domath","text":"domath(x::Number)\n\nReturn x + 5.\n\n\n\n\n\n","category":"method"},{"location":"function_index/#TrialDocs.hello-Tuple{String}","page":"Function Index","title":"TrialDocs.hello","text":"hello(who::String)\n\nReturn \"Hello, who\".\n\n\n\n\n\n","category":"method"},{"location":"function_index/#TrialDocs.test_args-Tuple","page":"Function Index","title":"TrialDocs.test_args","text":"test_args(args...)\n\nDescription\n\nTesting to see if I can create documentation from a different folder\n\nArguments\n\nargs...: (arbitrary as long as it works with println).\n\nReturn\n\nNothing\n\nAdditional details\n\n\n\n\n\n","category":"method"},{"location":"function_index/#TrialDocs.test_args_kw-Tuple","page":"Function Index","title":"TrialDocs.test_args_kw","text":"testargskw(args..., keyword = \"keyword\")\n\nDescription\n\nTesting to see if I can create documentation from a different folder\n\nArguments\n\nargs...: (arbitrary as long as it works with println).\n\nKeyword Arguments\n\nkeyword: default = \"keyword\"\n\nReturn\n\nNothing\n\nAdditional details\n\nJust another test\n\n\n\n\n\n","category":"method"},{"location":"#TrialDocs-1","page":"Home","title":"TrialDocs","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia Repo for Creating Documentation","category":"page"},{"location":"#More-Info-1","page":"Home","title":"More Info","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Just testing subsections","category":"page"},{"location":"#So-far-we-have-1","page":"Home","title":"So far we have","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Contribution Guide for Abstract Iterative Solvers","category":"page"}]
}
