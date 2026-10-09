export const projects = [
  {
    id: "cobalt",
    name: "Cobalt",
    tagline: "Type-Guided Repair of Input Generators",
    description: "Cobalt verifies the domain completeness of PBT input generators. When a generator misses valid parts of the domain (incomplete coverage), Cobalt automatically synthesizes a generator repair patch using refined semantic types, ensuring property coverage is fully complete.",
    tags: ["OOPSLA '25", "Program Synthesis", "Refinement Types", "PBT"],
    status: "Active",
    github: "https://github.com/purduepl/cobalt"
  },
  {
    id: "cobb",
    name: "Cobb",
    tagline: "Synthesis Modulo Logical Similarity",
    description: "Cobb is a component-based synthesis engine designed to work over large libraries where exact API components might not match the spec. It computes 'logical similarity' between types using specialized tree automata distances, producing optimal approximate matches.",
    tags: ["CAV '25", "Tree Automata", "Deductive Search"],
    status: "Active",
    github: "https://github.com/aegis-iisc/cobb"
  },
  {
    id: "poirot",
    name: "Poirot",
    tagline: "Synthesis from Effectful Libraries",
    description: "Poirot addresses program synthesis in the presence of side-effects. By utilizing an effect-tracking type system, Poirot models state changes and exceptions as mathematical expressions, allowing automatic generation of APIs that interact with databases and stateful hardware.",
    tags: ["TOPLAS '24", "Algebraic Effects", "API Synthesis"],
    status: "Completed",
    github: "https://github.com/aegis-iisc/poirot"
  },
  {
    id: "hegel",
    name: "Hegel",
    tagline: "Neurosymbolic Refinement Type Synthesis",
    description: "Hegel bridges the gap between deep learning and formal logic. It uses deep neural networks to predict program structures, which are then formally checked and completed using refinement type checkers, combining the best of LLMs and SMT solvers.",
    tags: ["Preprint", "Neurosymbolic PL", "Liquid Types"],
    status: "Active",
    github: "https://github.com/aegis-iisc/hegel"
  },
  {
    id: "lean-verif",
    name: "Lean Proofs",
    tagline: "Formalizing Synthesis Frameworks in Lean",
    description: "This project formalizes the soundness proofs of our tree automata synthesis algorithms inside the Lean 4 Interactive Theorem Prover. It ensures that the software synthesis logic itself has zero logical defects, verified directly by mathematical proof.",
    tags: ["Active", "Lean 4", "Theorem Proving"],
    status: "Active",
    github: "https://github.com/aegis-iisc/lean-simple"
  }
];
