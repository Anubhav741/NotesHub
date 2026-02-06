export interface NoteContent {
  id: string;
  title: string;
  description: string;
  content: string; // HTML content for reading
  stream: "jee" | "neet" | "ca" | "iit-nit";
  subject: string;
  chapter?: string;
  uploadedBy: string;
  uploadDate: Date;
  credits: number;
  downloads: number;
  rating: number; // 0-5 stars
  reviews: number;
  verified: boolean;
  fileSize: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  views: number;
  bookmarked: number;
  isPinned?: boolean;
  language: "en" | "hi";
  thumbnail?: string;
  estimatedReadTime: number; // in minutes
}

export const notesDatabase: NoteContent[] = [
  // JEE Notes
  {
    id: "jee-physics-1",
    title: "Physics - Mechanics: Newton's Laws of Motion",
    description: "Complete guide to Newton's three laws of motion with detailed explanations and practical examples.",
    content: `
      <h2>Newton's Laws of Motion</h2>
      <h3>First Law of Motion</h3>
      <p>An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.</p>
      <h4>Example:</h4>
      <p>A book lying on a table remains at rest until someone pushes it. A moving ball continues rolling until friction stops it.</p>
      
      <h3>Second Law of Motion</h3>
      <p><strong>F = ma</strong></p>
      <p>The acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass.</p>
      <h4>Applications:</h4>
      <ul>
        <li>Calculating force needed to accelerate objects</li>
        <li>Understanding motion under constant force</li>
        <li>Solving collision problems</li>
      </ul>
      
      <h3>Third Law of Motion</h3>
      <p>For every action, there is an equal and opposite reaction.</p>
      <h4>Real-world Examples:</h4>
      <ul>
        <li>Rocket propulsion: Rocket pushes exhaust down, exhaust pushes rocket up</li>
        <li>Walking: Foot pushes ground backward, ground pushes foot forward</li>
        <li>Swimming: Hands push water backward, water pushes swimmer forward</li>
      </ul>
      
      <h3>Practice Problems:</h3>
      <ol>
        <li>A 1000 kg car accelerates at 5 m/s². Find the net force applied.</li>
        <li>Explain why a person falls forward when a bus suddenly stops.</li>
        <li>Calculate the tension in a rope supporting a 50 kg mass.</li>
      </ol>
    `,
    stream: "jee",
    subject: "Physics",
    chapter: "Chapter 5",
    uploadedBy: "Rahul Kumar",
    uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    credits: 150,
    downloads: 2541,
    rating: 4.8,
    reviews: 342,
    verified: true,
    fileSize: "2.4 MB",
    difficulty: "medium",
    tags: ["mechanics", "forces", "motion", "newton"],
    views: 5234,
    bookmarked: 892,
    isPinned: true,
    language: "en",
    estimatedReadTime: 25,
  },
  {
    id: "jee-chemistry-1",
    title: "Chemistry - Atomic Structure & Periodicity",
    description: "Comprehensive notes on atomic structure, quantum numbers, and periodic table trends.",
    content: `
      <h2>Atomic Structure</h2>
      <h3>Quantum Numbers</h3>
      <p>Quantum numbers describe the properties of electrons in atoms.</p>
      <h4>Principal Quantum Number (n):</h4>
      <ul>
        <li>Determines the energy level of electron</li>
        <li>Values: 1, 2, 3, ... ∞</li>
      </ul>
      
      <h3>Periodic Table Trends</h3>
      <p><strong>Atomic Radius:</strong> Decreases across a period, increases down a group</p>
      <p><strong>Ionization Energy:</strong> Generally increases across a period, decreases down a group</p>
      <p><strong>Electronegativity:</strong> Increases across a period, decreases down a group</p>
      
      <h3>Electronic Configuration</h3>
      <p>Rules for filling electrons:</p>
      <ol>
        <li>Aufbau Principle: Fill orbitals in order of increasing energy</li>
        <li>Pauli Exclusion Principle: Max 2 electrons per orbital with opposite spins</li>
        <li>Hund's Rule: Electrons occupy empty orbitals before pairing</li>
      </ol>
      
      <h3>Important Concepts</h3>
      <ul>
        <li>Valence electrons determine chemical properties</li>
        <li>Atoms tend to achieve octet configuration</li>
        <li>Shielding effect reduces effective nuclear charge</li>
      </ul>
    `,
    stream: "jee",
    subject: "Chemistry",
    chapter: "Chapter 2",
    uploadedBy: "Priya Sharma",
    uploadDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    credits: 120,
    downloads: 1823,
    rating: 4.7,
    reviews: 256,
    verified: true,
    fileSize: "1.8 MB",
    difficulty: "hard",
    tags: ["chemistry", "atomic-structure", "periodicity", "jee"],
    views: 3891,
    bookmarked: 645,
    language: "en",
    estimatedReadTime: 30,
  },
  {
    id: "jee-maths-1",
    title: "Mathematics - Calculus Fundamentals",
    description: "Master derivatives, integrals, and their applications with detailed examples.",
    content: `
      <h2>Calculus Fundamentals</h2>
      <h3>Derivatives</h3>
      <p><strong>Definition:</strong> Rate of change of a function with respect to a variable</p>
      <p><strong>Formula:</strong> f'(x) = lim(h→0) [f(x+h) - f(x)] / h</p>
      
      <h3>Common Derivative Rules</h3>
      <ul>
        <li>Power Rule: d/dx(x^n) = nx^(n-1)</li>
        <li>Product Rule: d/dx(uv) = u'v + uv'</li>
        <li>Chain Rule: d/dx(f(g(x))) = f'(g(x)) · g'(x)</li>
        <li>Quotient Rule: d/dx(u/v) = (u'v - uv') / v²</li>
      </ul>
      
      <h3>Integration</h3>
      <p><strong>Definition:</strong> Reverse process of differentiation</p>
      <h4>Common Integrals:</h4>
      <ul>
        <li>∫x^n dx = x^(n+1)/(n+1) + C</li>
        <li>∫e^x dx = e^x + C</li>
        <li>∫sin(x) dx = -cos(x) + C</li>
        <li>∫cos(x) dx = sin(x) + C</li>
      </ul>
      
      <h3>Applications</h3>
      <ul>
        <li>Finding maximum and minimum values</li>
        <li>Calculating area under curves</li>
        <li>Solving rate of change problems</li>
      </ul>
    `,
    stream: "jee",
    subject: "Mathematics",
    chapter: "Chapter 7",
    uploadedBy: "Amit Verma",
    uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    credits: 180,
    downloads: 3124,
    rating: 4.9,
    reviews: 512,
    verified: true,
    fileSize: "2.1 MB",
    difficulty: "hard",
    tags: ["mathematics", "calculus", "derivatives", "integrals"],
    views: 6782,
    bookmarked: 1203,
    isPinned: true,
    language: "en",
    estimatedReadTime: 40,
  },

  // NEET Notes
  {
    id: "neet-biology-1",
    title: "Biology - Cell Structure and Function",
    description: "Complete guide to cell structure, organelles, and cellular functions for NEET.",
    content: `
      <h2>Cell Structure and Function</h2>
      <h3>Introduction to Cells</h3>
      <p><strong>Definition:</strong> Cells are the basic structural and functional units of life.</p>
      <p><strong>Cell Theory:</strong></p>
      <ul>
        <li>All organisms are composed of cells</li>
        <li>Cells are the basic unit of life</li>
        <li>All cells come from pre-existing cells</li>
      </ul>
      
      <h3>Prokaryotic vs Eukaryotic Cells</h3>
      <table border="1">
        <tr>
          <th>Feature</th>
          <th>Prokaryotic</th>
          <th>Eukaryotic</th>
        </tr>
        <tr>
          <td>Nucleus</td>
          <td>Absent</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>Organelles</td>
          <td>Absent</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>0.1-5.0 μm</td>
          <td>10-100 μm</td>
        </tr>
      </table>
      
      <h3>Cell Organelles</h3>
      <h4>Nucleus:</h4>
      <ul>
        <li>Controls cellular activities</li>
        <li>Contains DNA</li>
        <li>Site of transcription</li>
      </ul>
      
      <h4>Mitochondria:</h4>
      <ul>
        <li>Powerhouse of the cell</li>
        <li>ATP production through cellular respiration</li>
        <li>Contains own DNA and ribosomes</li>
      </ul>
      
      <h4>Endoplasmic Reticulum:</h4>
      <ul>
        <li>Rough ER: Protein synthesis (with ribosomes)</li>
        <li>Smooth ER: Lipid synthesis and detoxification</li>
      </ul>
      
      <h3>Cell Membrane</h3>
      <p><strong>Fluid Mosaic Model:</strong> Membrane consists of phospholipids and proteins</p>
      <p><strong>Functions:</strong></p>
      <ul>
        <li>Selective permeability</li>
        <li>Protection</li>
        <li>Cell recognition and communication</li>
      </ul>
    `,
    stream: "neet",
    subject: "Biology",
    chapter: "Chapter 8",
    uploadedBy: "Dr. Sneha Gupta",
    uploadDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    credits: 140,
    downloads: 2876,
    rating: 4.8,
    reviews: 401,
    verified: true,
    fileSize: "3.2 MB",
    difficulty: "medium",
    tags: ["biology", "cell-structure", "organelles", "neet"],
    views: 5123,
    bookmarked: 978,
    isPinned: true,
    language: "en",
    estimatedReadTime: 35,
  },
  {
    id: "neet-chemistry-1",
    title: "Chemistry - Chemical Bonding and Molecular Structure",
    description: "Understand chemical bonds, VSEPR theory, and molecular geometry.",
    content: `
      <h2>Chemical Bonding</h2>
      <h3>Types of Chemical Bonds</h3>
      
      <h4>1. Ionic Bonds</h4>
      <ul>
        <li>Complete transfer of electrons from metal to non-metal</li>
        <li>Formation of cations and anions</li>
        <li>Example: NaCl - Sodium chloride</li>
      </ul>
      
      <h4>2. Covalent Bonds</h4>
      <ul>
        <li>Sharing of electron pairs between atoms</li>
        <li>Types: Polar and Non-polar</li>
        <li>Example: H₂O - Water</li>
      </ul>
      
      <h4>3. Metallic Bonds</h4>
      <ul>
        <li>Delocalized electrons in metal lattices</li>
        <li>Responsible for metallic properties</li>
        <li>Example: Cu, Fe, Al</li>
      </ul>
      
      <h3>VSEPR Theory</h3>
      <p><strong>Valence Shell Electron Pair Repulsion Theory:</strong></p>
      <p>Electron pairs (bonding and lone pairs) repel each other and arrange to minimize repulsion.</p>
      
      <h3>Molecular Geometry Examples</h3>
      <ul>
        <li>CH₄ (Methane): Tetrahedral</li>
        <li>H₂O (Water): Bent</li>
        <li>CO₂ (Carbon dioxide): Linear</li>
        <li>NH₃ (Ammonia): Trigonal pyramidal</li>
      </ul>
      
      <h3>Electronegativity and Polarity</h3>
      <p>Difference in electronegativity determines bond polarity</p>
      <ul>
        <li>ΔEN < 0.4: Non-polar covalent</li>
        <li>0.4 < ΔEN < 1.7: Polar covalent</li>
        <li>ΔEN > 1.7: Ionic</li>
      </ul>
    `,
    stream: "neet",
    subject: "Chemistry",
    chapter: "Chapter 4",
    uploadedBy: "Prof. Rajesh Singh",
    uploadDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    credits: 130,
    downloads: 2145,
    rating: 4.6,
    reviews: 289,
    verified: true,
    fileSize: "2.3 MB",
    difficulty: "medium",
    tags: ["chemistry", "bonding", "molecular-structure", "neet"],
    views: 4321,
    bookmarked: 734,
    language: "en",
    estimatedReadTime: 28,
  },
  {
    id: "neet-physics-1",
    title: "Physics - Thermodynamics & Heat Transfer",
    description: "Master thermodynamic laws, heat transfer mechanisms, and energy conservation.",
    content: `
      <h2>Thermodynamics</h2>
      <h3>Zeroth Law of Thermodynamics</h3>
      <p>If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.</p>
      <p><strong>Implication:</strong> This allows us to define temperature</p>
      
      <h3>First Law of Thermodynamics</h3>
      <p><strong>ΔU = Q - W</strong></p>
      <p>Change in internal energy = Heat added - Work done by system</p>
      <h4>Key Points:</h4>
      <ul>
        <li>Energy is conserved</li>
        <li>Q > 0: Heat added to system</li>
        <li>W > 0: Work done by system</li>
      </ul>
      
      <h3>Second Law of Thermodynamics</h3>
      <p>Entropy of an isolated system always increases or remains constant.</p>
      <p><strong>ΔS ≥ 0</strong></p>
      
      <h3>Heat Transfer Mechanisms</h3>
      <h4>1. Conduction</h4>
      <ul>
        <li>Heat transfer through direct contact</li>
        <li>Formula: Q = kA(T₁-T₂)t/d</li>
        <li>Example: Metal spoon in hot water</li>
      </ul>
      
      <h4>2. Convection</h4>
      <ul>
        <li>Heat transfer through fluid motion</li>
        <li>Example: Boiling water, air circulation</li>
      </ul>
      
      <h4>3. Radiation</h4>
      <ul>
        <li>Heat transfer through electromagnetic waves</li>
        <li>Formula: Q = εσAT⁴</li>
        <li>Example: Sun's heat reaching Earth</li>
      </ul>
      
      <h3>Specific Heat Capacity</h3>
      <p><strong>Definition:</strong> Amount of heat required to raise temperature of 1 kg substance by 1°C</p>
      <p><strong>Formula:</strong> Q = mcΔT</p>
    `,
    stream: "neet",
    subject: "Physics",
    chapter: "Chapter 11",
    uploadedBy: "Prof. Vikram Patel",
    uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    credits: 145,
    downloads: 1987,
    rating: 4.7,
    reviews: 324,
    verified: true,
    fileSize: "2.5 MB",
    difficulty: "medium",
    tags: ["physics", "thermodynamics", "heat", "neet"],
    views: 4567,
    bookmarked: 821,
    language: "en",
    estimatedReadTime: 32,
  },

  // CA Notes
  {
    id: "ca-accounts-1",
    title: "Accounting - Double Entry System & Journalizing",
    description: "Complete guide to double entry bookkeeping and journal entries for CA.",
    content: `
      <h2>Double Entry System of Bookkeeping</h2>
      <h3>Fundamental Concepts</h3>
      <p><strong>Every transaction has two aspects:</strong></p>
      <ul>
        <li>Debit side (left)</li>
        <li>Credit side (right)</li>
      </ul>
      
      <h3>Golden Rules of Accounting</h3>
      <h4>Rule 1: Debit the receiver, Credit the giver</h4>
      <p>For transactions involving cash or property</p>
      
      <h4>Rule 2: Debit what comes in, Credit what goes out</h4>
      <p>For transactions involving assets</p>
      
      <h4>Rule 3: Debit all expenses and losses, Credit all incomes and gains</h4>
      <p>For transactions involving income and expenses</p>
      
      <h3>Journalizing Process</h3>
      <p><strong>Journal Entry Format:</strong></p>
      <pre>
Date: [Date]
[Account to be Debited]     Dr.   [Amount]
    [Account to be Credited]     Cr.   [Amount]
Narrative: [Description]
      </pre>
      
      <h3>Example Journal Entries</h3>
      <h4>Purchase of Equipment:</h4>
      <pre>
Equipment Account      Dr.   50,000
    Cash Account              Cr.   50,000
(Being equipment purchased)
      </pre>
      
      <h4>Payment of Salary:</h4>
      <pre>
Salary Expense Account   Dr.   10,000
    Cash Account                  Cr.   10,000
(Being salary paid)
      </pre>
      
      <h3>T-Account Format</h3>
      <p>Visual representation of accounts with Debit and Credit sides</p>
      <table border="1">
        <tr>
          <td colspan="2">Account Name</td>
        </tr>
        <tr>
          <td>Debit Side</td>
          <td>Credit Side</td>
        </tr>
        <tr>
          <td>Left</td>
          <td>Right</td>
        </tr>
      </table>
    `,
    stream: "ca",
    subject: "Accounts",
    chapter: "Chapter 2",
    uploadedBy: "CA Anjali Desai",
    uploadDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
    credits: 160,
    downloads: 1542,
    rating: 4.9,
    reviews: 267,
    verified: true,
    fileSize: "1.9 MB",
    difficulty: "easy",
    tags: ["accounting", "bookkeeping", "journal", "ca"],
    views: 3234,
    bookmarked: 567,
    language: "en",
    estimatedReadTime: 26,
  },
  {
    id: "ca-laws-1",
    title: "Company Law - Formation and Management of Companies",
    description: "Comprehensive notes on company formation, memorandum, and articles.",
    content: `
      <h2>Company Law</h2>
      <h3>Definition of Company</h3>
      <p>As per Companies Act: A company is an incorporated association of persons created by law with perpetual succession and a common seal.</p>
      
      <h3>Characteristics of a Company</h3>
      <ul>
        <li>Artificial legal person</li>
        <li>Perpetual succession</li>
        <li>Limited liability</li>
        <li>Common seal</li>
        <li>Separate property</li>
        <li>Transferable shares</li>
        <li>Capacity to sue and be sued</li>
      </ul>
      
      <h3>Types of Companies</h3>
      <h4>Based on Incorporation:</h4>
      <ul>
        <li>Company registered under Companies Act</li>
        <li>Company incorporated by Special Charter</li>
        <li>Statutory Company</li>
      </ul>
      
      <h4>Based on Liability:</h4>
      <ul>
        <li>Company limited by shares</li>
        <li>Company limited by guarantee</li>
        <li>Unlimited company</li>
      </ul>
      
      <h3>Memorandum of Association</h3>
      <p><strong>Definition:</strong> Document that defines the relation between the company and outsiders</p>
      <p><strong>Contains:</strong></p>
      <ul>
        <li>Name of company</li>
        <li>Objects of company</li>
        <li>Amount of share capital</li>
        <li>Liability of members</li>
        <li>Association clause</li>
      </ul>
      
      <h3>Articles of Association</h3>
      <p><strong>Definition:</strong> Internal regulations governing company's conduct</p>
      <p><strong>Important Clauses:</strong></p>
      <ul>
        <li>Transfer of shares</li>
        <li>Directors' powers and duties</li>
        <li>General meetings procedures</li>
        <li>Dividend policies</li>
      </ul>
    `,
    stream: "ca",
    subject: "Laws",
    chapter: "Chapter 3",
    uploadedBy: "Advocate Rohit Sharma",
    uploadDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    credits: 170,
    downloads: 1289,
    rating: 4.8,
    reviews: 198,
    verified: true,
    fileSize: "2.0 MB",
    difficulty: "medium",
    tags: ["law", "company-law", "formation", "ca"],
    views: 2876,
    bookmarked: 421,
    language: "en",
    estimatedReadTime: 29,
  },

  // IIT/NIT Notes
  {
    id: "iit-cse-1",
    title: "Data Structures - Arrays and Linked Lists",
    description: "Master fundamental data structures with C++ implementations and complexity analysis.",
    content: `
      <h2>Data Structures Fundamentals</h2>
      <h3>Arrays</h3>
      <p><strong>Definition:</strong> Collection of elements stored at contiguous memory locations</p>
      <h4>Characteristics:</h4>
      <ul>
        <li>Fixed size (static)</li>
        <li>Homogeneous data type</li>
        <li>O(1) access time by index</li>
        <li>O(n) insertion/deletion time</li>
      </ul>
      
      <h4>Array Operations:</h4>
      <pre>
// Accessing element
int element = arr[index];

// Inserting element (at end)
arr[size] = value;
size++;

// Searching
for(int i = 0; i < size; i++) {
    if(arr[i] == target) return i;
}
      </pre>
      
      <h3>Linked Lists</h3>
      <p><strong>Definition:</strong> Linear data structure with dynamic size</p>
      <h4>Node Structure:</h4>
      <pre>
struct Node {
    int data;
    Node* next;
};
      </pre>
      
      <h4>Linked List Operations:</h4>
      <ul>
        <li>Insertion: O(n) - O(1) at beginning</li>
        <li>Deletion: O(n) - O(1) at beginning</li>
        <li>Searching: O(n)</li>
        <li>Access: O(n)</li>
      </ul>
      
      <h3>Advantages & Disadvantages</h3>
      <table border="1">
        <tr>
          <th>Aspect</th>
          <th>Arrays</th>
          <th>Linked Lists</th>
        </tr>
        <tr>
          <td>Access</td>
          <td>O(1)</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>Insertion</td>
          <td>O(n)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>Space</td>
          <td>Fixed</td>
          <td>Dynamic</td>
        </tr>
      </table>
      
      <h3>Implementation Tips</h3>
      <ul>
        <li>Use arrays for frequent access</li>
        <li>Use linked lists for frequent insertion/deletion</li>
        <li>Always check boundary conditions</li>
        <li>Handle null pointers carefully</li>
      </ul>
    `,
    stream: "iit-nit",
    subject: "CS",
    chapter: "Chapter 4",
    uploadedBy: "Prof. Aditya Kumar",
    uploadDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    credits: 190,
    downloads: 3421,
    rating: 4.9,
    reviews: 589,
    verified: true,
    fileSize: "2.7 MB",
    difficulty: "medium",
    tags: ["data-structures", "arrays", "linked-lists", "cpp"],
    views: 7234,
    bookmarked: 1456,
    isPinned: true,
    language: "en",
    estimatedReadTime: 38,
  },
  {
    id: "iit-cse-2",
    title: "Algorithms - Sorting Algorithms Masterclass",
    description: "Complete guide to all sorting algorithms with complexity analysis and use cases.",
    content: `
      <h2>Sorting Algorithms</h2>
      <h3>1. Bubble Sort</h3>
      <p><strong>Time Complexity:</strong> O(n²)</p>
      <p><strong>Space Complexity:</strong> O(1)</p>
      <p>Simplest sorting algorithm, repeatedly swaps adjacent elements</p>
      
      <h3>2. Selection Sort</h3>
      <p><strong>Time Complexity:</strong> O(n²)</p>
      <p><strong>Space Complexity:</strong> O(1)</p>
      <p>Finds minimum element and places at beginning</p>
      
      <h3>3. Insertion Sort</h3>
      <p><strong>Time Complexity:</strong> O(n²)</p>
      <p><strong>Space Complexity:</strong> O(1)</p>
      <p>Builds sorted array one item at a time</p>
      
      <h3>4. Merge Sort</h3>
      <p><strong>Time Complexity:</strong> O(n log n)</p>
      <p><strong>Space Complexity:</strong> O(n)</p>
      <p>Divide and conquer algorithm, stable sort</p>
      
      <h3>5. Quick Sort</h3>
      <p><strong>Time Complexity:</strong> O(n log n) average, O(n²) worst</p>
      <p><strong>Space Complexity:</strong> O(log n)</p>
      <p>Fast in-place sorting using pivot</p>
      
      <h3>6. Heap Sort</h3>
      <p><strong>Time Complexity:</strong> O(n log n)</p>
      <p><strong>Space Complexity:</strong> O(1)</p>
      <p>Uses binary heap data structure</p>
      
      <h3>Comparison Table</h3>
      <table border="1">
        <tr>
          <th>Algorithm</th>
          <th>Best Case</th>
          <th>Average Case</th>
          <th>Worst Case</th>
          <th>Space</th>
        </tr>
        <tr>
          <td>Bubble Sort</td>
          <td>O(n)</td>
          <td>O(n²)</td>
          <td>O(n²)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>Merge Sort</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>Quick Sort</td>
          <td>O(n log n)</td>
          <td>O(n log n)</td>
          <td>O(n²)</td>
          <td>O(log n)</td>
        </tr>
      </table>
      
      <h3>When to Use Each?</h3>
      <ul>
        <li><strong>Merge Sort:</strong> When space available, need guaranteed O(n log n)</li>
        <li><strong>Quick Sort:</strong> General purpose, good average performance</li>
        <li><strong>Heap Sort:</strong> Guaranteed O(n log n), limited space</li>
        <li><strong>Bubble Sort:</strong> Educational purposes, nearly sorted data</li>
      </ul>
    `,
    stream: "iit-nit",
    subject: "Algorithms",
    chapter: "Chapter 5",
    uploadedBy: "Dr. Nikhil Gupta",
    uploadDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    credits: 200,
    downloads: 4123,
    rating: 5.0,
    reviews: 678,
    verified: true,
    fileSize: "3.1 MB",
    difficulty: "hard",
    tags: ["algorithms", "sorting", "complexity", "competitive-programming"],
    views: 8934,
    bookmarked: 1834,
    isPinned: true,
    language: "en",
    estimatedReadTime: 45,
  },
];

export const getStreamNotes = (stream: string): NoteContent[] => {
  return notesDatabase.filter((note) => note.stream === stream);
};

export const getSubjectNotes = (stream: string, subject: string): NoteContent[] => {
  return notesDatabase.filter((note) => note.stream === stream && note.subject === subject);
};

export const searchNotes = (query: string): NoteContent[] => {
  const q = query.toLowerCase();
  return notesDatabase.filter(
    (note) =>
      note.title.toLowerCase().includes(q) ||
      note.description.toLowerCase().includes(q) ||
      note.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      note.subject.toLowerCase().includes(q)
  );
};
