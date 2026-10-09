export const publications = [
  {
    id: "oopsla25",
    title: "We've Got You Covered: Type-Guided Repair of Incomplete Input Generators",
    authors: "Patrick LaFontaine, Zhe Zhou, Ashish Mishra, Suresh Jagannathan, Benjamin Delaware",
    venue: "ACM Joint Conference on Object-Oriented Programming, Systems, Languages, and Applications (OOPSLA) 2025",
    year: "2025",
    category: "Program Synthesis",
    link: "https://dl.acm.org/",
    preprint: "https://purduepl.github.io/",
    abstract: "Property-based testing (PBT) relies on input generators to produce test cases that satisfy complex invariants. Writing these generators manually is error-prone, often leading to incomplete test coverage where valid parts of the input domain are missed. This paper presents Cobalt, a type-guided repair engine that automatically patches incomplete generators using refined type specifications, ensuring generator completeness modulo the target properties.",
    bibtex: `@article{lafontaine2025we,\n  title={We've Got You Covered: Type-Guided Repair of Incomplete Input Generators},\n  author={LaFontaine, Patrick and Zhou, Zhe and Mishra, Ashish and Jagannathan, Suresh and Delaware, Benjamin},\n  journal={Proceedings of the ACM on Programming Languages (PACMPL)},\n  volume={OOPSLA},\n  year={2025}\n}`
  },
  {
    id: "cobb25",
    title: "Close is Good Enough: Component-Based Synthesis Modulo Logical Similarity",
    authors: "Ashish Mishra, Suresh Jagannathan",
    venue: "International Conference on Computer-Aided Verification (CAV) 2025 (Under Review / Preprint)",
    year: "2025",
    category: "Program Synthesis",
    link: "https://arxiv.org/abs/2504.06421",
    preprint: "https://arxiv.org/abs/2504.06421",
    abstract: "Component-based program synthesis constructs programs by assembling APIs from a library. Traditional type-driven search fails when exact logical components are missing. We present Cobb, a component-based synthesizer that leverages logical similarity and component distance measures using Tree Automata. It efficiently constructs approximate program skeletons which are refined iteratively into correct implementations.",
    bibtex: `@article{mishra2025close,\n  title={Close is Good Enough: Component-Based Synthesis Modulo Logical Similarity},\n  author={Mishra, Ashish and Jagannathan, Suresh},\n  journal={arXiv preprint arXiv:2504.06421},\n  year={2025}\n}`
  },
  {
    id: "cav26",
    title: "Liquid Tree Automata: Accelerating Program Synthesis via Refined Automata",
    authors: "Ashish Mishra, Suresh Jagannathan",
    venue: "Preprint / CAV 2026 Submission",
    year: "2026",
    category: "Type Systems",
    link: "https://arxiv.org/",
    preprint: "https://arxiv.org/",
    abstract: "Tree Automata are a core data structure for representing infinite spaces of programs. However, reasoning over refinement types (Liquid Types) causes extreme state-space explosions. We present Liquid Tree Automata (LTA), which integrates semantic subtyping directly into the automata transitions, pruning the synthesis search space by up to three orders of magnitude.",
    bibtex: `@article{mishra2026liquid,\n  title={Liquid Tree Automata: Accelerating Program Synthesis via Refined Automata},\n  author={Mishra, Ashish and Jagannathan, Suresh},\n  journal={CoRR},\n  year={2026}\n}`
  },
  {
    id: "pldi23",
    title: "Covering All the Bases: Type-based Verification of Test Input Generators",
    authors: "Ashish Mishra, Suresh Jagannathan, Benjamin Delaware",
    venue: "ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI) 2023",
    year: "2023",
    category: "Program Verification",
    link: "https://dl.acm.org/doi/10.1145/3591244",
    preprint: "https://aegis-iisc.github.io/assets/pdf/OOPSLA23.pdf",
    abstract: "We introduce a type-based verification framework for verifying the coverage properties of test input generators. By defining refinement types that capture domain completeness, we show how standard type checkers can formally verify that a generator produces all test cases needed to satisfy safety specifications.",
    bibtex: `@inproceedings{mishra2023covering,\n  title={Covering All the Bases: Type-based Verification of Test Input Generators},\n  author={Mishra, Ashish and Jagannathan, Suresh and Delaware, Benjamin},\n  booktitle={Proceedings of the 44th ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI)},\n  pages={124--138},\n  year={2023}\n}`
  },
  {
    id: "poirot24",
    title: "Poirot: Synthesizing Specification-Guided Component-Based Programs from Effectful Libraries",
    authors: "Ashish Mishra, Suresh Jagannathan",
    venue: "ACM Transactions on Programming Languages and Systems (TOPLAS) 2024",
    year: "2024",
    category: "Program Synthesis",
    link: "https://aegis-iisc.github.io/assets/pdf/poirotpreprint.pdf",
    preprint: "https://aegis-iisc.github.io/assets/pdf/poirotpreprint.pdf",
    abstract: "Synthesizing programs that interact with stateful or effectful libraries is highly challenging due to side-effects. Poirot uses an algebraic effect tracking type system to guide synthesis, ensuring generated programs are logically sound and respect external library invariants.",
    bibtex: `@article{mishra2024poirot,\n  title={Poirot: Synthesizing Specification-Guided Component-Based Programs from Effectful Libraries},\n  author={Mishra, Ashish and Jagannathan, Suresh},\n  journal={ACM Transactions on Programming Languages and Systems (TOPLAS)},\n  volume={46},\n  number={2},\n  pages={1--45},\n  year={2024}\n}`
  },
  {
    id: "stubbifier20",
    title: "Stubbifier: Debloating JavaScript Libraries Using Static Analysis",
    authors: "Ashish Mishra, Frank Tip, Y. N. Srikant",
    venue: "Journal of Empirical Software Engineering (JESE) 2020 / SQJ",
    year: "2020",
    category: "Program Verification",
    link: "https://aegis-iisc.github.io/assets/pdf/JESE.pdf",
    preprint: "https://aegis-iisc.github.io/assets/pdf/JESE.pdf",
    abstract: "Modern web applications import large libraries, using only small fractions of their code. We present Stubbifier, a tool that uses inter-procedural static analysis to identify unused functions in JavaScript libraries and replace them with thin stubs, reducing payload sizes for web clients without altering software runtime behavior.",
    bibtex: `@article{mishra2020stubbifier,\n  title={Stubbifier: Debloating JavaScript Libraries Using Static Analysis},\n  author={Mishra, Ashish and Tip, Frank and Srikant, YN},\n  journal={Empirical Software Engineering},\n  volume={25},\n  number={5},\n  pages={3812--3847},\n  year={2020},\n  publisher={Springer}\n}`
  }
];
