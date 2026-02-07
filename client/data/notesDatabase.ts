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
  // JEE Physics
  {
    id: "jee-physics-1",
    title: "Complete Guide to Newton's Laws of Motion",
    description: "Detailed comprehensive guide covering Newton's three laws of motion with real-world applications, problem-solving techniques, and advanced concepts for JEE preparation.",
    content: `
      <h2>Newton's Laws of Motion: Complete Study Guide</h2>
      <p>Newton's laws of motion form the foundation of classical mechanics. Understanding these three laws is essential for solving any mechanics problem in physics.</p>
      
      <h3>Introduction to Forces</h3>
      <p>A force is any interaction that can change an object's motion or shape. Forces are vectors, meaning they have both magnitude and direction. The standard unit of force is the Newton (N), where 1 N = 1 kg⋅m/s².</p>
      
      <h3>First Law of Motion (Law of Inertia)</h3>
      <p><strong>Statement:</strong> An object at rest remains at rest, and an object in motion remains in motion with constant velocity unless acted upon by a net external force.</p>
      <p>This law defines inertia as the property of matter to resist changes in motion. The greater the mass, the greater the inertia and the harder it is to change the motion.</p>
      
      <h4>Key Concepts:</h4>
      <ul>
        <li><strong>Inertial Reference Frame:</strong> A reference frame where Newton's first law holds true</li>
        <li><strong>Net Force:</strong> The vector sum of all forces acting on an object</li>
        <li><strong>Equilibrium:</strong> When net force is zero, an object maintains constant velocity</li>
      </ul>
      
      <h4>Real-World Examples:</h4>
      <ul>
        <li>A passenger in a car leans forward when the car suddenly brakes because the passenger's body wants to maintain its forward motion</li>
        <li>A book on a smooth table slides indefinitely if pushed, as there's minimal friction force</li>
        <li>An astronaut floating in space continues moving in a straight line unless affected by gravity or external propulsion</li>
      </ul>
      
      <h3>Second Law of Motion (F = ma)</h3>
      <p><strong>Mathematical Formulation:</strong> F = ma, where F is the net force, m is mass, and a is acceleration.</p>
      <p>This fundamental equation tells us that the acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass.</p>
      
      <h4>Detailed Explanation:</h4>
      <p>The second law can be expressed in its more general form using momentum: F = dp/dt, where p = mv is the linear momentum. This formulation is more powerful and works even when mass is changing.</p>
      
      <h4>Problem-Solving Applications:</h4>
      <ul>
        <li><strong>Atwood Machine:</strong> Two masses connected by a string over a pulley</li>
        <li><strong>Inclined Planes:</strong> Motion of objects on slopes with friction</li>
        <li><strong>Circular Motion:</strong> Centripetal acceleration and centripetal force</li>
        <li><strong>Connected Objects:</strong> Multiple objects moving together with tension forces</li>
      </ul>
      
      <h4>Important Relationships:</h4>
      <ul>
        <li>Force is directly proportional to acceleration: If force doubles, acceleration doubles</li>
        <li>Force is inversely proportional to mass: Heavier objects require more force for same acceleration</li>
        <li>Weight is the gravitational force: W = mg</li>
      </ul>
      
      <h3>Third Law of Motion (Action-Reaction)</h3>
      <p><strong>Statement:</strong> For every action, there is an equal and opposite reaction. These forces act on different objects.</p>
      <p>The third law explains that forces always come in pairs. When object A exerts a force on object B, object B simultaneously exerts a force on object A that is equal in magnitude but opposite in direction.</p>
      
      <h4>Critical Distinction:</h4>
      <p>Action and reaction forces act on <strong>different objects</strong>, so they do NOT cancel each other. This is crucial for understanding why objects can accelerate.</p>
      
      <h4>Detailed Examples:</h4>
      <ul>
        <li><strong>Rocket Propulsion:</strong> Rocket exerts downward force on exhaust gases; exhaust gases exert upward force on rocket</li>
        <li><strong>Walking:</strong> Person pushes ground backward; ground pushes person forward</li>
        <li><strong>Swimming:</strong> Swimmer pushes water backward; water pushes swimmer forward</li>
        <li><strong>Bird Flight:</strong> Bird pushes air downward; air pushes bird upward</li>
        <li><strong>Collision:</strong> Car A pushes on Car B with force F; Car B pushes on Car A with force -F</li>
      </ul>
      
      <h3>Advanced Problem-Solving Techniques</h3>
      <h4>Free Body Diagrams:</h4>
      <p>Always draw a free body diagram showing all forces acting on the object you're analyzing. Choose your coordinate system carefully to simplify calculations.</p>
      
      <h4>Step-by-Step Problem Solving:</h4>
      <ol>
        <li>Identify the object you're analyzing</li>
        <li>List all forces acting on the object</li>
        <li>Choose a convenient coordinate system</li>
        <li>Resolve all forces into components</li>
        <li>Apply Newton's second law (ΣF = ma) in each direction</li>
        <li>Solve the resulting equations</li>
      </ol>
      
      <h3>Practice Problems</h3>
      <ol>
        <li>A 1500 kg car accelerates from rest to 25 m/s in 8 seconds on a horizontal road. Assuming friction force is 2000 N, find the driving force of the engine.</li>
        <li>Two blocks of masses 3 kg and 5 kg are connected by a rope. The 5 kg block is pulled with a force of 40 N. Find the acceleration and tension in the rope.</li>
        <li>An elevator of mass 1000 kg carries 10 passengers of average mass 70 kg each. The elevator accelerates upward at 2 m/s². Calculate the tension in the cable.</li>
        <li>A 2 kg book is placed on a table. The maximum static friction is 8 N. What minimum force is needed to start moving the book?</li>
      </ol>
    `,
    stream: "jee",
    subject: "Physics",
    chapter: "Chapter 5: Laws of Motion",
    uploadedBy: "Rahul Kumar",
    uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    credits: 250,
    downloads: 3456,
    rating: 4.9,
    reviews: 456,
    verified: true,
    fileSize: "5.2 MB",
    difficulty: "medium",
    tags: ["mechanics", "forces", "motion", "newton", "acceleration", "inertia"],
    views: 7892,
    bookmarked: 1245,
    isPinned: true,
    language: "en",
    estimatedReadTime: 45,
  },
  {
    id: "jee-chemistry-1",
    title: "Atomic Structure and Quantum Mechanics - Complete Notes",
    description: "Comprehensive study material on quantum numbers, electron configuration, and periodic table trends with detailed explanations and numerical problems.",
    content: `
      <h2>Atomic Structure and Quantum Mechanics</h2>
      <p>The modern atomic structure is based on quantum mechanical principles. This guide covers everything you need for JEE preparation.</p>
      
      <h3>Introduction to Quantum Mechanics</h3>
      <p>Classical mechanics fails to explain the behavior of electrons in atoms. Quantum mechanics provides the correct framework for understanding atomic structure. The key principle is that electrons don't have definite positions but exist in probability clouds called orbitals.</p>
      
      <h3>Quantum Numbers</h3>
      <p>Four quantum numbers completely describe the state of an electron in an atom.</p>
      
      <h4>1. Principal Quantum Number (n)</h4>
      <ul>
        <li><strong>Significance:</strong> Determines the energy level and approximate distance of electron from nucleus</li>
        <li><strong>Values:</strong> n = 1, 2, 3, ... ∞</li>
        <li><strong>Shells:</strong> K (n=1), L (n=2), M (n=3), N (n=4)</li>
        <li><strong>Maximum Electrons:</strong> 2n² electrons can fit in nth shell</li>
      </ul>
      
      <h4>2. Azimuthal (Angular Momentum) Quantum Number (l)</h4>
      <ul>
        <li><strong>Significance:</strong> Determines the shape of the orbital and angular momentum</li>
        <li><strong>Values:</strong> l = 0, 1, 2, ... (n-1)</li>
        <li><strong>Orbital Types:</strong> s (l=0), p (l=1), d (l=2), f (l=3)</li>
        <li><strong>Orbitals per subshell:</strong> (2l+1) orbitals</li>
        <li><strong>Maximum Electrons:</strong> 2(2l+1) electrons per subshell</li>
      </ul>
      
      <h4>3. Magnetic Quantum Number (m<sub>l</sub>)</h4>
      <ul>
        <li><strong>Significance:</strong> Determines the orientation of the orbital in space</li>
        <li><strong>Values:</strong> m<sub>l</sub> = -l, -(l-1), ... 0, ... (l-1), l</li>
        <li><strong>For p orbitals:</strong> m<sub>l</sub> = -1, 0, +1 (three p orbitals: p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)</li>
      </ul>
      
      <h4>4. Spin Quantum Number (m<sub>s</sub>)</h4>
      <ul>
        <li><strong>Significance:</strong> Describes the intrinsic angular momentum (spin) of electron</li>
        <li><strong>Values:</strong> m<sub>s</sub> = +½ (spin up) or -½ (spin down)</li>
        <li><strong>Pauli Exclusion Principle:</strong> No two electrons can have identical quantum numbers</li>
      </ul>
      
      <h3>Electron Configuration</h3>
      <p>The distribution of electrons in various orbitals follows specific rules:</p>
      
      <h4>Aufbau Principle</h4>
      <p>Electrons fill orbitals in order of increasing energy. The order is generally: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p</p>
      
      <h4>Hund's Rule</h4>
      <p>Electrons prefer to occupy separate orbitals with parallel spins before pairing up. This minimizes electron-electron repulsion.</p>
      
      <h4>Pauli Exclusion Principle</h4>
      <p>No two electrons in an atom can have the same set of four quantum numbers.</p>
      
      <h3>Periodic Table Trends</h3>
      
      <h4>Atomic Radius</h4>
      <ul>
        <li><strong>Trend across period:</strong> Decreases (due to increasing nuclear charge)</li>
        <li><strong>Trend down group:</strong> Increases (due to addition of new shells)</li>
      </ul>
      
      <h4>Ionization Energy</h4>
      <ul>
        <li><strong>Trend across period:</strong> Generally increases</li>
        <li><strong>Trend down group:</strong> Generally decreases</li>
        <li><strong>Exceptions:</strong> Group 13 and 16 due to subshell configurations</li>
      </ul>
      
      <h4>Electron Affinity</h4>
      <ul>
        <li><strong>Trend across period:</strong> Generally increases (most negative for halogens)</li>
        <li><strong>Trend down group:</strong> Generally decreases</li>
      </ul>
      
      <h4>Electronegativity</h4>
      <ul>
        <li><strong>Trend across period:</strong> Increases (F is most electronegative)</li>
        <li><strong>Trend down group:</strong> Decreases</li>
      </ul>
      
      <h3>Important Concepts</h3>
      <p><strong>Orbital vs. Orbit:</strong> An orbit is a definite circular path (Bohr model), while an orbital is a region of space with high probability of finding an electron (Quantum mechanical model).</p>
      
      <p><strong>Shielding Effect:</strong> Inner shell electrons shield outer electrons from the full nuclear charge. This reduces the effective nuclear charge experienced by outer electrons.</p>
      
      <h3>Solved Examples</h3>
      <ol>
        <li>Write the electron configuration of Cu (Z=29) and explain why it has an anomalous configuration.</li>
        <li>For 3d orbital, determine the values of n, l, m<sub>l</sub>, and the number of orbitals.</li>
        <li>Why does the first ionization energy of Al (Group 13) is lower than Mg (Group 2)?</li>
      </ol>
    `,
    stream: "jee",
    subject: "Chemistry",
    chapter: "Chapter 2: Atomic Structure",
    uploadedBy: "Priya Sharma",
    uploadDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    credits: 280,
    downloads: 4123,
    rating: 4.8,
    reviews: 512,
    verified: true,
    fileSize: "6.1 MB",
    difficulty: "hard",
    tags: ["atomic-structure", "quantum-numbers", "electrons", "orbitals", "periodic-table"],
    views: 8934,
    bookmarked: 1567,
    isPinned: true,
    language: "en",
    estimatedReadTime: 50,
  },
  {
    id: "neet-biology-1",
    title: "Cell Structure and Functions - Detailed Study Material",
    description: "Comprehensive notes on cell structure, organelles, their functions, and differences between prokaryotic and eukaryotic cells for NEET exam preparation.",
    content: `
      <h2>Cell Structure and Functions</h2>
      <p>The cell is the basic unit of life. Understanding cell structure is fundamental to biology. This comprehensive guide covers both prokaryotic and eukaryotic cells.</p>
      
      <h3>What is a Cell?</h3>
      <p>A cell is the smallest unit of life that can function independently. All living organisms are made of one or more cells. The cell theory states that:</p>
      <ul>
        <li>All living organisms are made of cells</li>
        <li>The cell is the basic unit of life</li>
        <li>All cells come from pre-existing cells</li>
      </ul>
      
      <h3>Types of Cells</h3>
      
      <h4>Prokaryotic Cells</h4>
      <p>Found in bacteria and archaea. These cells lack a membrane-bound nucleus and organelles.</p>
      <ul>
        <li><strong>Size:</strong> 0.5-5.0 μm</li>
        <li><strong>Nucleus:</strong> Absent (DNA in nucleoid region)</li>
        <li><strong>Organelles:</strong> Absent</li>
        <li><strong>Cell Wall:</strong> Present (peptidoglycan in bacteria)</li>
        <li><strong>Ribosomes:</strong> 70S (smaller)</li>
      </ul>
      
      <h4>Eukaryotic Cells</h4>
      <p>Found in animals, plants, fungi, and protists. These cells have a membrane-bound nucleus and organelles.</p>
      <ul>
        <li><strong>Size:</strong> 10-100 μm</li>
        <li><strong>Nucleus:</strong> Present</li>
        <li><strong>Organelles:</strong> Present (many)</li>
        <li><strong>Cell Wall:</strong> Present in plants and fungi (cellulose)</li>
        <li><strong>Ribosomes:</strong> 80S (larger)</li>
      </ul>
      
      <h3>Plant Cells vs. Animal Cells</h3>
      <table>
        <tr>
          <th>Feature</th>
          <th>Plant Cell</th>
          <th>Animal Cell</th>
        </tr>
        <tr>
          <td>Cell Wall</td>
          <td>Present (cellulose)</td>
          <td>Absent</td>
        </tr>
        <tr>
          <td>Chloroplast</td>
          <td>Present</td>
          <td>Absent</td>
        </tr>
        <tr>
          <td>Vacuole</td>
          <td>Large (central)</td>
          <td>Small or absent</td>
        </tr>
        <tr>
          <td>Centrioles</td>
          <td>Absent</td>
          <td>Present</td>
        </tr>
      </table>
      
      <h3>Cell Membrane (Plasma Membrane)</h3>
      <p><strong>Structure:</strong> Selectively permeable barrier made of phospholipid bilayer with embedded proteins (Fluid Mosaic Model).</p>
      <p><strong>Functions:</strong></p>
      <ul>
        <li>Controls entry and exit of substances</li>
        <li>Provides cell recognition and communication</li>
        <li>Protects the cell contents</li>
      </ul>
      
      <h3>Nucleus</h3>
      <p><strong>Function:</strong> Contains the genetic material (DNA) and controls all cellular activities.</p>
      <p><strong>Components:</strong></p>
      <ul>
        <li><strong>Nuclear Membrane:</strong> Double membrane controlling passage of substances</li>
        <li><strong>Nucleoplasm:</strong> Gel-like substance inside nucleus</li>
        <li><strong>Chromatin:</strong> Loosely packed DNA + proteins during interphase</li>
        <li><strong>Chromosomes:</strong> Condensed chromatin during cell division</li>
        <li><strong>Nucleolus:</strong> Site of ribosomal RNA synthesis</li>
      </ul>
      
      <h3>Cytoplasmic Organelles</h3>
      
      <h4>Mitochondria</h4>
      <ul>
        <li><strong>Structure:</strong> Double membrane with cristae (folds)</li>
        <li><strong>Function:</strong> Site of aerobic respiration; produces ATP (energy)</li>
        <li><strong>Special Features:</strong> Has own DNA (mtDNA) and ribosomes (70S)</li>
        <li><strong>Significance:</strong> More in muscle and nerve cells (high energy demand)</li>
      </ul>
      
      <h4>Endoplasmic Reticulum (ER)</h4>
      <p><strong>Rough ER:</strong> Studded with ribosomes; synthesizes proteins</p>
      <p><strong>Smooth ER:</strong> No ribosomes; synthesizes lipids and detoxifies drugs</p>
      
      <h4>Golgi Apparatus (Golgi Complex)</h4>
      <ul>
        <li><strong>Structure:</strong> Stack of flattened cisternae</li>
        <li><strong>Function:</strong> Modifies, packages, and ships proteins</li>
        <li><strong>Forms:</strong> Lysosomes and vesicles</li>
      </ul>
      
      <h4>Lysosomes</h4>
      <ul>
        <li><strong>Content:</strong> Digestive enzymes (acid hydrolases)</li>
        <li><strong>Function:</strong> Intracellular digestion of waste materials</li>
        <li><strong>Name:</strong> "Cellular dustbins" or "Suicide bags"</li>
      </ul>
      
      <h4>Chloroplasts</h4>
      <ul>
        <li><strong>Structure:</strong> Double membrane with thylakoid stacks (grana)</li>
        <li><strong>Function:</strong> Site of photosynthesis</li>
        <li><strong>Contains:</strong> Chlorophyll pigment (green color)</li>
      </ul>
      
      <h4>Ribosomes</h4>
      <ul>
        <li><strong>Function:</strong> Protein synthesis site (translation)</li>
        <li><strong>Types:</strong> Free ribosomes (cytoplasm) or attached (rough ER)</li>
        <li><strong>Composed of:</strong> rRNA and proteins</li>
      </ul>
      
      <h4>Centrosome and Centrioles</h4>
      <ul>
        <li><strong>Structure:</strong> Two perpendicular centrioles</li>
        <li><strong>Function:</strong> Organize microtubules and form spindle fibers</li>
        <li><strong>Location:</strong> Animal cells only (near nucleus)</li>
      </ul>
      
      <h3>Cytoskeleton</h3>
      <p>Network of protein fibers providing cell shape and movement:</p>
      <ul>
        <li><strong>Microfilaments:</strong> Thinnest; made of actin</li>
        <li><strong>Intermediate Filaments:</strong> Medium size</li>
        <li><strong>Microtubules:</strong> Thickest; made of tubulin</li>
      </ul>
      
      <h3>Key Points to Remember</h3>
      <ul>
        <li>Mitochondria has its own DNA - evidence of endosymbiotic theory</li>
        <li>Chloroplasts also have their own DNA</li>
        <li>Prokaryotes lack nuclei but are highly efficient</li>
        <li>Eukaryotic cells are more complex and larger</li>
      </ul>
    `,
    stream: "neet",
    subject: "Biology",
    chapter: "Chapter 8: Cell: The Unit of Life",
    uploadedBy: "Dr. Anil Singh",
    uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    credits: 220,
    downloads: 5678,
    rating: 4.9,
    reviews: 634,
    verified: true,
    fileSize: "7.3 MB",
    difficulty: "medium",
    tags: ["cell-biology", "organelles", "cell-structure", "prokaryotic", "eukaryotic"],
    views: 9876,
    bookmarked: 1892,
    isPinned: true,
    language: "en",
    estimatedReadTime: 55,
  },
  {
    id: "ca-accounts-1",
    title: "Company Law: Formation and Management of Companies",
    description: "Detailed study material on company formation, constitutional documents, and company management principles required for CA examination.",
    content: `
      <h2>Company Law: Formation and Management of Companies</h2>
      <p>Company law forms the legal framework for corporate governance. This comprehensive guide covers company formation, constitutional documents, and management principles.</p>
      
      <h3>What is a Company?</h3>
      <p>A company is an artificial juridical person created by law, having perpetual succession and a common seal. It's distinct from its members and has its own legal identity.</p>
      
      <h4>Key Characteristics:</h4>
      <ul>
        <li><strong>Artificial Entity:</strong> Created by law, not natural birth</li>
        <li><strong>Separate Legal Entity:</strong> Distinct from its members</li>
        <li><strong>Perpetual Succession:</strong> Continues to exist despite changes in ownership</li>
        <li><strong>Common Seal:</strong> Official stamp representing company identity</li>
        <li><strong>Limited Liability:</strong> Members' liability limited to their investment</li>
        <li><strong>Transferable Shares:</strong> Ownership shares can be transferred</li>
      </ul>
      
      <h3>Types of Companies</h3>
      
      <h4>Private Company</h4>
      <p>A company whose articles restrict the transfer of shares and limit membership.</p>
      <ul>
        <li><strong>Minimum Members:</strong> 2</li>
        <li><strong>Maximum Members:</strong> 200 (excluding employees)</li>
        <li><strong>Minimum Share Capital:</strong> ₹1 lakh</li>
        <li><strong>Public Issue:</strong> Cannot make public offering</li>
        <li><strong>Advantages:</strong> Less formalities, easier management, privacy</li>
      </ul>
      
      <h4>Public Company</h4>
      <p>A company whose articles don't restrict share transfer and has minimum 7 members.</p>
      <ul>
        <li><strong>Minimum Members:</strong> 7</li>
        <li><strong>Maximum Members:</strong> Unlimited</li>
        <li><strong>Minimum Share Capital:</strong> ₹5 lakh</li>
        <li><strong>Public Issue:</strong> Can raise capital from public</li>
        <li><strong>Advantages:</strong> Larger capital, strong financial position</li>
      </ul>
      
      <h3>Stages of Company Formation</h3>
      
      <h4>Pre-incorporation Stage</h4>
      <ul>
        <li>Preliminary contracts on behalf of company (not binding on company)</li>
        <li>Company not yet formed, so cannot be a party to contract</li>
        <li>Doctrine of Pre-incorporation Contracts applies</li>
        <li>Promoter liable on such contracts</li>
      </ul>
      
      <h4>Incorporation Stage</h4>
      <p><strong>Documents Required:</strong></p>
      <ul>
        <li>Memorandum of Association (MoA)</li>
        <li>Articles of Association (AoA)</li>
        <li>Declaration regarding rules compliance</li>
        <li>Statutory declaration</li>
        <li>Proof of registered office</li>
      </ul>
      
      <p><strong>Process:</strong></p>
      <ol>
        <li>Registrar reviews documents</li>
        <li>Issues Certificate of Incorporation</li>
        <li>Company becomes legal entity</li>
        <li>Company commences operations</li>
      </ol>
      
      <h4>Post-incorporation Stage</h4>
      <ul>
        <li>Company begins commercial activities</li>
        <li>Shares offered to public (if public company)</li>
        <li>Directors appointed</li>
        <li>Board meetings held</li>
      </ul>
      
      <h3>Memorandum of Association (MoA)</h3>
      <p>The fundamental document that defines the constitution of the company and its powers.</p>
      
      <h4>Contents of Memorandum:</h4>
      <ul>
        <li><strong>Name Clause:</strong> Company name with "Private Limited" or "Limited"</li>
        <li><strong>Registered Office Clause:</strong> Location of principal place of business</li>
        <li><strong>Objects Clause:</strong> Purposes for which company formed</li>
        <li><strong>Liability Clause:</strong> Extent of members' liability</li>
        <li><strong>Capital Clause:</strong> Amount of authorized share capital</li>
        <li><strong>Association Clause:</strong> Members' agreement to be associated</li>
      </ul>
      
      <h4>Importance of Objects Clause:</h4>
      <p>The objects clause is ultra vires if the company acts beyond its stated objectives. Any contract entered beyond objects is void and cannot be enforced.</p>
      
      <h3>Articles of Association (AoA)</h3>
      <p>Bye-laws of the company defining internal management and procedures.</p>
      
      <h4>Contents:</h4>
      <ul>
        <li>Number and conduct of directors</li>
        <li>Directors' powers and duties</li>
        <li>Board meetings and procedures</li>
        <li>General meetings conduct</li>
        <li>Rights and duties of members</li>
        <li>Share transfer and allotment procedures</li>
        <li>Dividend declaration and payment</li>
        <li>Appointment of auditors</li>
      </ul>
      
      <h4>Key Differences from MoA:</h4>
      <table>
        <tr>
          <th>Memorandum</th>
          <th>Articles</th>
        </tr>
        <tr>
          <td>Defines external relations</td>
          <td>Defines internal management</td>
        </tr>
        <tr>
          <td>Cannot be altered except with Registrar approval</td>
          <td>Can be altered by special resolution</td>
        </tr>
        <tr>
          <td>Acts Ultra Vires (beyond) are void</td>
          <td>Internal, not subject to ultra vires</td>
        </tr>
      </table>
      
      <h3>Prospectus and Allotment</h3>
      
      <h4>Prospectus</h4>
      <p>An invitation to public to subscribe to shares of the company. Must contain full information about company, financial position, and management.</p>
      
      <h4>Requirements:</h4>
      <ul>
        <li>Must be in prescribed form</li>
        <li>Must be filed with Registrar before issue</li>
        <li>Must contain directors' names and signatures</li>
        <li>Must state financial details and track record</li>
        <li>Criminal penalty for false statements</li>
      </ul>
      
      <h4>Allotment of Shares</h4>
      <ul>
        <li>Binding contract when board resolves to allot</li>
        <li>Share certificate issued as evidence of ownership</li>
        <li>Member gains rights as shareholder</li>
      </ul>
      
      <h3>Directors: Appointment and Powers</h3>
      
      <h4>Qualifications:</h4>
      <ul>
        <li>Must be at least 21 years old</li>
        <li>Must be natural person (not a company or partnership)</li>
        <li>Should have DIN (Director Identification Number)</li>
      </ul>
      
      <h4>Powers of Directors:</h4>
      <ul>
        <li>Execute contracts on behalf of company</li>
        <li>Draw, accept, and endorse bills</li>
        <li>Borrow funds on company security</li>
        <li>Invest company funds</li>
        <li>Establish bank accounts</li>
      </ul>
      
      <h4>Duties of Directors:</h4>
      <ul>
        <li>Act in good faith for company benefit</li>
        <li>Act within powers granted</li>
        <li>Avoid conflicts of interest</li>
        <li>Exercise reasonable care and diligence</li>
        <li>Not misuse company property</li>
      </ul>
      
      <h3>Company Meetings</h3>
      
      <h4>Types of Meetings:</h4>
      <ul>
        <li><strong>Board Meetings:</strong> Directors meeting for management decisions</li>
        <li><strong>General Meetings:</strong> All shareholders meeting</li>
        <li><strong>Annual General Meeting (AGM):</strong> Held within 6 months of financial year end</li>
      </ul>
      
      <h4>Requirements for Valid Meeting:</h4>
      <ul>
        <li>Proper notice (at least 21 days)</li>
        <li>Proper quorum</li>
        <li>Proper chairman</li>
        <li>Resolutions passed as per procedures</li>
      </ul>
      
      <h3>Winding Up (Liquidation)</h3>
      <p>Process of closing company and distributing assets.</p>
      
      <h4>Grounds for Winding Up:</h4>
      <ul>
        <li>Member petition (insolvency)</li>
        <li>Creditor petition (debt not paid)</li>
        <li>Registrar petition (non-compliance)</li>
        <li>Court order</li>
      </ul>
      
      <h3>Important Case Laws</h3>
      <ul>
        <li><strong>Salomon v. Salomon:</strong> Established separate legal entity principle</li>
        <li><strong>Foss v. Harbottle:</strong> Rule regarding derivative suits</li>
      </ul>
    `,
    stream: "ca",
    subject: "Company Law",
    chapter: "Chapter 1: Company Formation",
    uploadedBy: "CA Rajesh Nair",
    uploadDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    credits: 300,
    downloads: 3245,
    rating: 4.7,
    reviews: 398,
    verified: true,
    fileSize: "8.9 MB",
    difficulty: "hard",
    tags: ["company-law", "formation", "memorandum", "articles", "directors", "constitution"],
    views: 6234,
    bookmarked: 987,
    language: "en",
    estimatedReadTime: 60,
  },
  {
    id: "iit-nit-cs-1",
    title: "Data Structures: Arrays, Linked Lists, and Stacks - Complete Guide",
    description: "Comprehensive study material covering fundamental data structures used in computer science with implementation details and practice problems.",
    content: `
      <h2>Data Structures: Foundation of Computer Science</h2>
      <p>Data structures are the way we organize and store data for efficient access and modification. This guide covers the fundamental data structures needed for IIT/NIT entrance exams and programming interviews.</p>
      
      <h3>What are Data Structures?</h3>
      <p>A data structure is a specialized format for organizing and storing data in a computer's memory. Choosing the right data structure is crucial for:</p>
      <ul>
        <li>Efficient access and retrieval of data</li>
        <li>Optimal memory usage</li>
        <li>Faster algorithm execution</li>
        <li>Better problem-solving approaches</li>
      </ul>
      
      <h3>Classification of Data Structures</h3>
      
      <h4>Linear Data Structures</h4>
      <p>Data elements arranged in a sequential manner:</p>
      <ul>
        <li>Arrays</li>
        <li>Linked Lists</li>
        <li>Stacks</li>
        <li>Queues</li>
      </ul>
      
      <h4>Non-Linear Data Structures</h4>
      <p>Data elements not arranged sequentially:</p>
      <ul>
        <li>Trees</li>
        <li>Graphs</li>
        <li>Hash Tables</li>
      </ul>
      
      <h3>Arrays</h3>
      
      <h4>Definition</h4>
      <p>An array is a collection of elements of the same type stored in contiguous memory locations. Each element is accessed by its index (position).</p>
      
      <h4>Characteristics:</h4>
      <ul>
        <li><strong>Fixed Size:</strong> Size determined at creation</li>
        <li><strong>Homogeneous Elements:</strong> All elements same type</li>
        <li><strong>Contiguous Memory:</strong> Elements stored sequentially</li>
        <li><strong>Index-based Access:</strong> O(1) time complexity</li>
        <li><strong>Zero-based Indexing:</strong> First element at index 0</li>
      </ul>
      
      <h4>Advantages:</h4>
      <ul>
        <li>Fast access - constant time O(1)</li>
        <li>Simple implementation</li>
        <li>Cache friendly</li>
        <li>Easy to use for sorted data</li>
      </ul>
      
      <h4>Disadvantages:</h4>
      <ul>
        <li>Fixed size - cannot grow dynamically</li>
        <li>Insertion/deletion expensive - O(n)</li>
        <li>Wastes memory if not fully utilized</li>
        <li>Requires contiguous memory block</li>
      </ul>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>Access: O(1)</li>
        <li>Search: O(n) for unsorted, O(log n) for sorted binary search</li>
        <li>Insertion: O(n)</li>
        <li>Deletion: O(n)</li>
      </ul>
      
      <h3>Linked Lists</h3>
      
      <h4>Definition</h4>
      <p>A linked list is a linear data structure where elements (nodes) are linked together using pointers. Each node contains data and a pointer to the next node.</p>
      
      <h4>Types of Linked Lists:</h4>
      
      <h5>Singly Linked List</h5>
      <p>Each node points to the next node. Last node points to NULL.</p>
      <ul>
        <li>Structure: Node = {data, next pointer}</li>
        <li>Traversal: Only forward direction</li>
      </ul>
      
      <h5>Doubly Linked List</h5>
      <p>Each node has pointers to both next and previous nodes.</p>
      <ul>
        <li>Structure: Node = {prev pointer, data, next pointer}</li>
        <li>Traversal: Both forward and backward</li>
        <li>Extra memory: For previous pointer</li>
      </ul>
      
      <h5>Circular Linked List</h5>
      <p>Last node points back to the first node instead of NULL.</p>
      <ul>
        <li>Creates a circular structure</li>
        <li>Useful for round-robin scheduling</li>
      </ul>
      
      <h4>Advantages:</h4>
      <ul>
        <li>Dynamic size - grows as needed</li>
        <li>Efficient insertion/deletion - O(1) if pointer known</li>
        <li>No memory wastage</li>
        <li>Flexible memory usage</li>
      </ul>
      
      <h4>Disadvantages:</h4>
      <ul>
        <li>No random access - must traverse</li>
        <li>Extra memory for pointers</li>
        <li>Cache unfriendly</li>
        <li>More complex implementation</li>
      </ul>
      
      <h4>Time Complexity:</h4>
      <ul>
        <li>Access: O(n)</li>
        <li>Search: O(n)</li>
        <li>Insertion: O(1) if position known, else O(n)</li>
        <li>Deletion: O(1) if position known, else O(n)</li>
      </ul>
      
      <h3>Stacks</h3>
      
      <h4>Definition</h4>
      <p>A stack is a linear data structure following LIFO (Last In First Out) principle. The last element inserted is the first one to be removed.</p>
      
      <h4>Core Operations:</h4>
      <ul>
        <li><strong>Push:</strong> Insert element at top - O(1)</li>
        <li><strong>Pop:</strong> Remove element from top - O(1)</li>
        <li><strong>Peek/Top:</strong> View top element - O(1)</li>
        <li><strong>isEmpty:</strong> Check if stack empty - O(1)</li>
        <li><strong>isFull:</strong> Check if stack full - O(1)</li>
      </ul>
      
      <h4>Real-World Applications:</h4>
      <ul>
        <li>Browser back button (page history)</li>
        <li>Undo/Redo functionality</li>
        <li>Expression evaluation (postfix, prefix)</li>
        <li>Syntax parsing</li>
        <li>Function call stack in programming</li>
        <li>Depth-First Search (DFS)</li>
        <li>Tower of Hanoi puzzle</li>
      </ul>
      
      <h4>Implementation Approaches:</h4>
      
      <h5>Array-based Stack:</h5>
      <ul>
        <li>Fixed size</li>
        <li>Simple implementation</li>
        <li>Faster access</li>
        <li>Risk of overflow</li>
      </ul>
      
      <h5>Linked List-based Stack:</h5>
      <ul>
        <li>Dynamic size</li>
        <li>No overflow risk</li>
        <li>Extra memory for pointers</li>
        <li>Slightly slower</li>
      </ul>
      
      <h4>Key Problems:</h4>
      <ul>
        <li>Balanced parentheses checking</li>
        <li>Expression evaluation and conversion</li>
        <li>Next greater element problem</li>
        <li>Stock span problem</li>
        <li>Largest rectangle in histogram</li>
      </ul>
      
      <h3>Queues</h3>
      
      <h4>Definition</h4>
      <p>A queue is a linear data structure following FIFO (First In First Out) principle. First element inserted is first to be removed.</p>
      
      <h4>Core Operations:</h4>
      <ul>
        <li><strong>Enqueue:</strong> Insert at rear - O(1)</li>
        <li><strong>Dequeue:</strong> Remove from front - O(1)</li>
        <li><strong>Front:</strong> View first element - O(1)</li>
        <li><strong>isEmpty:</strong> Check if queue empty - O(1)</li>
      </ul>
      
      <h4>Types:</h4>
      <ul>
        <li><strong>Simple Queue:</strong> Regular FIFO queue</li>
        <li><strong>Circular Queue:</strong> Rear connects to front</li>
        <li><strong>Priority Queue:</strong> Elements have priorities</li>
        <li><strong>Deque (Double-ended Queue):</strong> Insert/delete from both ends</li>
      </ul>
      
      <h4>Applications:</h4>
      <ul>
        <li>CPU scheduling</li>
        <li>Breadth-First Search (BFS)</li>
        <li>Print queue management</li>
        <li>Network packet handling</li>
        <li>Customer service systems</li>
      </ul>
      
      <h3>Comparison Table</h3>
      <table>
        <tr>
          <th>Operation</th>
          <th>Array</th>
          <th>Linked List</th>
          <th>Stack</th>
          <th>Queue</th>
        </tr>
        <tr>
          <td>Access</td>
          <td>O(1)</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>Search</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>Insertion</td>
          <td>O(n)</td>
          <td>O(1)*</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>Deletion</td>
          <td>O(n)</td>
          <td>O(1)*</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
      </table>
      <p>* If position is known</p>
      
      <h3>Practice Problems</h3>
      <ol>
        <li>Implement a stack that supports push, pop, top, and getMin in O(1) time.</li>
        <li>Evaluate postfix expressions using stack.</li>
        <li>Check if parentheses are balanced in an expression.</li>
        <li>Implement a LRU Cache using HashMap and Doubly Linked List.</li>
        <li>Find the next greater element for each element in an array.</li>
      </ol>
    `,
    stream: "iit-nit",
    subject: "Data Structures",
    chapter: "Chapter 1: Fundamentals",
    uploadedBy: "Prof. Vikram Sharma",
    uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    credits: 320,
    downloads: 4567,
    rating: 4.9,
    reviews: 521,
    verified: true,
    fileSize: "9.5 MB",
    difficulty: "hard",
    tags: ["data-structures", "arrays", "linked-lists", "stacks", "queues", "algorithms"],
    views: 8765,
    bookmarked: 1456,
    isPinned: true,
    language: "en",
    estimatedReadTime: 65,
  },
];

export const searchNotes = (query: string): NoteContent[] => {
  const q = query.toLowerCase();
  return notesDatabase.filter((note) =>
    note.title.toLowerCase().includes(q) ||
    note.description.toLowerCase().includes(q) ||
    note.tags.some((tag) => tag.toLowerCase().includes(q)) ||
    note.subject.toLowerCase().includes(q) ||
    note.uploadedBy.toLowerCase().includes(q)
  );
};

export const getStreamNotes = (stream: string): NoteContent[] => {
  return notesDatabase.filter((note) => note.stream === stream);
};

export const getSubjectNotes = (stream: string, subject: string): NoteContent[] => {
  return notesDatabase.filter((note) => note.stream === stream && note.subject === subject);
};
