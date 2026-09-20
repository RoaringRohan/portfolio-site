// Project entries. To add a new project, append an object with the same shape —
// the Projects page groups and renders them automatically by `category`.
//
// Schema:
//   id        unique kebab-case string
//   title     project name
//   category  'software' | 'hardware' | 'ml' | 'finance' — which page section
//             and signal-trace channel the project lives under
//   tracks    optional array of other category ids this project also belongs
//             to. The entry renders in full under each of those channels as
//             well as its primary `category`, with a badge naming the other
//             channels it sits on. The All view shows primary `category` only,
//             so a multi-track project is never listed twice on one screen.
//   sprint    optional duration badge for short-term work, e.g. '48h',
//             '~26h', '2 weeks'. Omit for anything that isn't a timeboxed
//             build (hackathon, jam) — a semester course project doesn't need one.
//   context   where/when it was built (hackathon, course, personal)
//   date      display date string
//   when      decimal year (e.g. 2026.35 for May 2026) — positions the project
//             on the signal-trace timeline at the top of the Projects page
//   award     optional award/recognition string
//   summary   1-2 sentence editorial description
//   pipeline  optional array of strings describing the integration pipeline,
//             rendered as a hardware-to-software flow (stage by stage)
//   tech      array of tech-stack tags (rendered in monospace)
//   images    optional array of { src, alt } — imported PNGs, rendered as a
//             screenshot row. Omit for projects with no runnable UI.
//   links     optional { github, demo, devpost } URLs

import Tms1 from '../assets/images/ticket-management-system-1.png';
import Tms2 from '../assets/images/ticket-management-system-2.png';
import Mpm1 from '../assets/images/music-playlist-manager-1.png';
import Mpm2 from '../assets/images/music-playlist-manager-2.png';
import Dem1 from '../assets/images/demokritos-1.png';
import Dem2 from '../assets/images/demokritos-2.png';
import Rb1 from '../assets/images/robot-biathlon-ai-commentator-1.jpg';
import Rb2 from '../assets/images/robot-biathlon-ai-commentator-2.jpg';
import Ts1 from '../assets/images/trailsense-1.jpg';
import Ts2 from '../assets/images/trailsense-2.png';
import Tc1 from '../assets/images/terminal-chatroom-1.png';
import Tc2 from '../assets/images/terminal-chatroom-2.png';
import Awf1 from '../assets/images/automated-water-fountain-1.jpg';
import Awf2 from '../assets/images/automated-water-fountain-2.jpg';
import Awf3 from '../assets/images/automated-water-fountain-3.jpg';
import Awf4 from '../assets/images/automated-water-fountain-4.jpg';
import Dap1 from '../assets/images/data-analytics-portfolio-1.png';
import Dap2 from '../assets/images/data-analytics-portfolio-2.png';
import Th1 from '../assets/images/therahaptics-1.jpg';
import Th2 from '../assets/images/therahaptics-2.jpg';
import Th3 from '../assets/images/therahaptics-3.jpg';
import Th4 from '../assets/images/therahaptics-4.jpg';
import Th5 from '../assets/images/therahaptics-5.jpg';
import Lap1 from '../assets/images/loan-approval-predictor-1.png';
import Lap2 from '../assets/images/loan-approval-predictor-2.png';
import Lap3 from '../assets/images/loan-approval-predictor-3.png';
import Psb1 from '../assets/images/portfolio-strategy-backtester-1.png';
import Psb2 from '../assets/images/portfolio-strategy-backtester-2.png';
import Psb3 from '../assets/images/portfolio-strategy-backtester-3.png';
import Crv1 from '../assets/images/credit-risk-var-simulator-1.png';
import Crv2 from '../assets/images/credit-risk-var-simulator-2.png';
import Crv3 from '../assets/images/credit-risk-var-simulator-3.png';
import Ope1 from '../assets/images/option-pricing-engine-1.png';
import Pcs1 from '../assets/images/portfolio-constraint-study-1.png';
import Pcs2 from '../assets/images/portfolio-constraint-study-2.png';
import Pcs3 from '../assets/images/portfolio-constraint-study-3.png';
import Rc1 from '../assets/images/rustycanvas-1.png';
import Rc2 from '../assets/images/rustycanvas-2.png';
import Rc3 from '../assets/images/rustycanvas-3.png';
import Ga1 from '../assets/images/geoalarm-1.png';
import Ga2 from '../assets/images/geoalarm-2.png';
import Ga3 from '../assets/images/geoalarm-3.png';
import Dem3 from '../assets/images/demokritos-3.png';
import De1Vga1 from '../assets/images/de1-soc-vga-renderer-1.png';
import De1Piano1 from '../assets/images/de1-soc-piano-1.png';
import De1Scope1 from '../assets/images/de1-soc-oscilloscope-1.png';
import De1Edge1 from '../assets/images/de1-soc-edge-detection-1.png';

export const projects = [
  {
    id: 'trailsense',
    title: 'TrailSense',
    category: 'hardware',
    tracks: ['software', 'ml'],
    sprint: '48h',
    context: 'MakeUofT 2026, team of 2',
    date: 'Feb 2026',
    when: 2026.1,
    award: 'Winner, Best Use of Vultr',
    summary:
      "Retracing a trail on the way back, without a map, a signal or a phone in your hand. Walking out, it grabs a frame every 2.5 seconds and keeps it as a visual landmark, an ORB feature descriptor set held on the device, but only when the frame yields more than 50 keypoints, so blank sky and featureless ground never enter the trail in the first place. Walking back, each incoming frame is matched by Hamming distance against the stored landmarks, and the best match becomes a coarse match-count score driving a single LED: green on track, amber uncertain, red off. It is two days of hackathon build and behaves like one. The score is a count, not a calibrated confidence. That LED is the interface on purpose, because the whole point is not having to stare at a screen to find your way back, and the system runs with the dashboard closed. A React panel exists for setup and for watching it work: a live feature-overlay feed, the landmark log and the confidence meter. It runs on an Arduino Uno Q as the Linux brain with an ESP32-CAM as a wireless eye, and drops back to a laptop webcam and a simulated LED unchanged, which is what makes it developable without the hardware in front of you.",
    pipeline: ['ESP32-CAM frame capture', 'ORB keypoints, >50 or discard', 'Landmark stored on device', 'Brute-force Hamming match on return', 'Serial bridge to a three-colour LED'],
    tech: ['Python', 'OpenCV', 'ORB', 'FastAPI', 'React', 'Vite', 'ESP32-CAM', 'Arduino Uno Q'],
    images: [
      { src: Ts1, alt: 'Illustration of the wearable rig: a small camera module and an Arduino board mounted on the frame of a pair of glasses, worn under a grey beanie.' },
      { src: Ts2, alt: 'The dashboard in return mode: a live feature-overlay feed, the landmark log and the saturated match-count meter.' },
    ],
    links: {
      github: 'https://github.com/RoaringRohan/trailsense',
      devpost: 'https://devpost.com/software/trailsense-zit7ox',
    },
  },
  {
    id: 'taken-gino',
    title: 'Taken Gino',
    category: 'software',
    context: 'Course project, team of 4',
    date: '2022',
    when: 2022.27,
    award: null,
    summary:
      "A 2D Unity arena brawler in C# with three heroes on real stat tradeoffs and independently swappable melee and ranged loadouts. Combat lives once in a shared base class, so each hero is a ~60-line subclass that only sets its own numbers. Three heroes by two melee by two ranged gives twelve distinct play patterns out of one system.",
    pipeline: null,
    tech: ['C#', 'Unity 2D', 'Physics2D', 'TextMeshPro'],
    links: { github: 'https://github.com/RoaringRohan/taken-gino' },
  },
  {
    id: 'ticket-management-system',
    title: 'Ticket Management System',
    category: 'software',
    context: 'Course project, team of 5',
    date: '2022',
    when: 2022.8,
    award: null,
    summary:
      "A role-based IT helpdesk on Node, Express and MySQL: issuers open tickets, managers route them to a technician who covers that software, and technicians work them to closure. It ships with a populated seven-table schema of 4,500 tickets across 2,500 employees, so the manager reporting queries are real GROUP BY and JOIN work rather than three rows of demo data.",
    pipeline: null,
    tech: ['Node.js', 'Express', 'MySQL', 'express-validator'],
    images: [
      { src: Tms1, alt: 'Manager view: assign-ticket form and a max-salary-by-access-level report.' },
      { src: Tms2, alt: 'Closed-ticket queue rendered from the seeded dataset.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/ticket-management-system' },
  },
  {
    id: 'music-playlist-manager',
    title: 'Music Playlist Manager',
    category: 'software',
    context: 'Course project, team of 2',
    date: 'Jan 2023',
    when: 2023.02,
    award: null,
    summary:
      "A full-stack music library on Angular, Express and MongoDB, built around a real JWT access/refresh auth layer: anyone can search the catalogue and browse public playlists, signed-in users own their own, and admins moderate reviews and the site's policy documents. The auth boundary is enforced by middleware order rather than per-handler guards. Public routes mount, then checkJWT, then the secure and admin routers, so reaching an authenticated route without a valid token isn't a mistake the code leaves available.",
    pipeline: null,
    tech: ['Angular', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt'],
    images: [
      { src: Mpm1, alt: 'Public playlist view: track count, computed total play time and average rating.' },
      { src: Mpm2, alt: 'Catalogue search by artist, each result linking out to a YouTube search.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/music-playlist-manager' },
  },
  {
    id: 'terminal-chatroom',
    title: 'Terminal Chatroom',
    category: 'software',
    context: 'Course project, team of 4',
    date: 'Apr 2023',
    when: 2023.28,
    award: null,
    summary:
      "A multi-room chat server in C++ where the shared vector of client threads doubles as the routing table: a message is relayed by walking that vector under a POSIX named semaphore and writing only to threads reporting the same room, so there is no separate membership map to keep in sync. Rooms are switched live over the same connection, and shutdown is cooperative: Enter on stdin unwinds a destructor that closes every client socket rather than letting process exit do it. Paired with a Tkinter client whose background receive thread keeps the UI responsive.",
    pipeline: null,
    tech: ['C++11', 'pthreads', 'POSIX Semaphores', 'TCP Sockets', 'Python', 'Tkinter'],
    images: [
      { src: Tc1, alt: 'Two clients in room 1: each one sees the other messages relayed by the server.' },
      { src: Tc2, alt: 'The same message sent in room 1, with a client sitting in room 2 seeing nothing.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/terminal-chatroom' },
  },
  {
    id: 'automated-water-fountain',
    title: 'Automated Water Fountain',
    category: 'hardware',
    context: 'Course project, team of 5',
    date: 'Apr 2023',
    when: 2023.3,
    award: null,
    summary:
      "A sound-reactive fountain designed to raise and lower its pump speed to match the ambient noise of the room. The constraint that shapes it is that the fountain sits inside its own feedback loop, since running the pump makes the room louder, so the firmware switches on a fifteen-sample windowed average against gapped thresholds rather than on what the microphone hears moment to moment. Two targets are kept side by side: the Arduino Mega build that was physically assembled, and a bare-metal ARM Cortex-A9 variant written against the Cyclone V memory map with no HAL.",
    pipeline: ['Electret microphone', '15-sample ring buffer average', 'Three-state threshold machine', 'PWM through transistor gate', 'DC pump'],
    tech: ['Arduino Mega', 'C/C++', 'Bare-metal ARM', 'Cyclone V', 'PWM', 'EEPROM'],
    images: [
      { src: Awf1, alt: 'CAD model of the fountain body, water wheel and basin in a 3D modelling tool.' },
      { src: Awf2, alt: 'The 3D-printed fountain body and water wheel assembled.' },
      { src: Awf3, alt: 'Breadboard with the microphone, transistor and motor wired to an Arduino.' },
      { src: Awf4, alt: 'The full bench setup running, with the laptop and instruments alongside.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/automated-water-fountain' },
  },
  {
    id: 'course-outline-manager',
    title: 'Course Outline Manager',
    category: 'software',
    context: 'Course project, team of 3',
    date: 'Apr 2023',
    when: 2023.31,
    award: null,
    summary:
      'A course-outline authoring and review tool built around a three-role model: administrators assign courses to instructors and watch a cross-course feed of raised issues, instructors write outlines in a structured editor and export them to PDF from the browser, and reviewers file issues keyed to the document they concern rather than free-floating. All state lives in three Firestore collections read and written straight from the page, so a multi-role workflow with shared persistent state runs with no backend code, no framework and no build step.',
    pipeline: null,
    tech: ['Vanilla JS', 'Cloud Firestore', 'Firebase SDK', 'HTML/CSS', 'Client-side PDF'],
    links: { github: 'https://github.com/RoaringRohan/course-outline-manager' },
  },
  {
    id: 'renewable-energy-analysis',
    title: 'Renewable Energy Analysis',
    category: 'ml',
    context: 'Course project, team of 5',
    date: 'Dec 2024',
    when: 2024.92,
    award: null,
    summary:
      "A study of whether solar irradiance, normally read off a pyranometer that most sites do not have, can be recovered from the commodity weather variables every site already records: temperature, pressure, humidity, wind and cloud cover. Across roughly 165,000 hourly readings it runs the comparison rather than assuming the answer, fitting a least-squares baseline, a tuned XGBoost regressor over seven weather features and a Keras network against the same target. The result is the interesting kind of negative: nearly all the gain comes from moving linear to non-linear, while the further step to a neural network buys about 0.004 R² for a far longer training cycle and much worse interpretability. Feature selection is read off an annotated correlation matrix rather than picked by hand, and every chart is committed with the notebook, so the analysis renders on GitHub with nothing installed and nothing run.",
    pipeline: null,
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'TensorFlow / Keras', 'seaborn', 'Jupyter'],
    links: { github: 'https://github.com/RoaringRohan/renewable-energy-analysis' },
  },
  {
    id: 'data-analytics-portfolio',
    title: 'Data Analytics Portfolio',
    category: 'ml',
    context: 'Personal project',
    date: 'May 2024 to Feb 2025',
    when: 2025.12,
    award: null,
    summary:
      "Five self-directed passes at the whole analyst path, raw public file to queryable database, deliberately repeating one numbered ETL shape so each pass could be made cleaner than the last. Three run end to end into MySQL: World Bank indicators modelled as a star schema over 93 countries, a Netflix catalogue normalised into five tables because a title has many actors, genres and countries, and 196,776 hourly weather records. Every intermediate CSV is kept on disk between stages, so the output of any single step can be opened and checked, which makes debugging structure rather than clutter. Loads go through parameterised inserts and credentials through python-dotenv, both from the first commit. The other two projects go the opposite direction and implement neural networks from scratch in NumPy: He initialisation, ReLU and sigmoid, the backward pass and mini-batch gradient descent all written by hand, with scikit-learn present only to scale and split.",
    pipeline: ['Raw public dataset', 'pandas extract + transform', 'Schema build and parameterised load', 'MySQL 8', 'Analysis / dashboard'],
    tech: ['Python', 'pandas', 'NumPy', 'SQL', 'MySQL 8', 'Jupyter', 'Power BI'],
    images: [
      { src: Dap1, alt: 'The ETL process used across these projects.' },
      { src: Dap2, alt: 'The star schema: a Countries dimension joined to population, economic and social indicator tables.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/data-analytics-portfolio' },
  },
  {
    id: 'therahaptics',
    title: 'TheraHaptics',
    category: 'hardware',
    tracks: ['software'],
    context: 'Course project, team of 4',
    date: 'Mar 2025',
    when: 2025.22,
    award: null,
    summary:
      "Physiotherapy patients are sent home with exercises and almost nobody does them properly. There is no feedback on whether a movement was performed correctly and no record of what happened between appointments, so the next session starts with a shrug. Closing that loop means measuring the movement itself, which puts sensors on the arm rather than a checkbox in an app: a forearm sleeve of six EMG channels reads muscle activity, an ESP32 samples it, and a model classifies which gesture was performed. What makes it hold together is where the seams were put. Classification stays in Python because that is where the models live, the guided session stays in Unity because that is where rendering and exercise logic live, and the two talk over a plain TCP socket rather than embedding a Python runtime in a game engine or reimplementing the models in C#. The clinical side is a .NET service over MongoDB holding patients, programs, pain and progress reports behind JWT auth, so a therapist can assign a program remotely and see what came back. Four classifier families were compared on the same captured gestures, and the deep hybrid did not beat the classical baseline.",
    pipeline: ['Six-channel EMG sleeve', 'ESP32 sampling', 'Gesture classification in Python', 'TCP socket', 'Unity guided session', '.NET API over MongoDB'],
    tech: ['C#', '.NET 9', 'Unity', 'Python', 'TensorFlow', 'scikit-learn', 'ESP32', 'MongoDB', 'JWT'],
    images: [
      { src: Th1, alt: 'Patient dashboard showing plan completion, last session summary and goals.' },
      { src: Th2, alt: 'Guided exercise view with target duration, repetitions and instructions.' },
      { src: Th3, alt: 'Pain reporting screen with hand diagrams and a 0-10 severity slider.' },
      { src: Th4, alt: 'Therapist dashboard listing patients with join dates and progress bars.' },
      { src: Th5, alt: 'Registration form with name, email and password fields.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/therahaptics' },
  },
  {
    id: 'shipping-delay-predictor',
    title: 'Shipping Delay Predictor',
    category: 'ml',
    context: 'Course project, team of 3',
    date: 'Apr 2025',
    when: 2025.3,
    award: null,
    summary:
      "A Vertex AI training package for telling a customer at checkout that their order will probably arrive late, built around the fact that late deliveries are the rare class. A model that answers \"on time\" every single time scores about 97% on this data and is worth nothing. Essentially all the engineering goes at that problem: a hand-written focal loss rather than an imported one, an explicit weight on the delayed class exposed as a tunable, a shifted decision threshold, and, the decision that actually matters, precision on the delayed class as both the early-stopping monitor and the objective reported to Vizier, so the hyperparameter search optimises the minority class instead of aggregate accuracy. A parallel AutoML model was trained on the same features as a benchmark, which answers \"was the hand-built version worth it\" with a measurement rather than an assumption, and reports the answer even though it is slightly unflattering. The two together also make the neatest point in the project: the same AutoML model scores 0.98 on ROC-AUC and 0.72 on precision-recall AUC. One model, two metrics, and a clean demonstration of why the flattering one is the wrong one to quote on an imbalanced problem.",
    pipeline: ['Olist order tables in BigQuery', 'SQL clean, dedupe and join', '12-feature table to Cloud Storage', 'Keras trainer on Vertex AI', 'Vizier tuning on precision'],
    tech: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Vertex AI', 'BigQuery', 'Cloud Storage', 'SQL'],
    links: { github: 'https://github.com/RoaringRohan/shipping-delay-predictor' },
  },
  {
    id: 'loan-approval-predictor',
    title: 'Loan Approval Predictor',
    category: 'software',
    tracks: ['ml'],
    context: 'Course project, team of 2',
    date: 'Apr 2025',
    when: 2025.29,
    award: null,
    summary:
      "Five classifiers (logistic regression, random forest, SVM, XGBoost and a Keras network) trained on the same split over 4,269 historical loan decisions and compared on precision, recall and F1 rather than accuracy alone, and then the part that makes it more than a notebook: the winner is actually put somewhere a person can use it. The model is serialised together with the StandardScaler that was fitted during training, and the Flask service applies that same fitted object server-side before predicting. That is the detail most projects of this shape get wrong, and getting it wrong produces a service that silently returns nonsense. A Next.js client walks an applicant through the questions one at a time and calls that endpoint for a verdict, with a standalone single-file HTML form shipped alongside it so the API can be exercised without installing Node at all. The four numbered stages (data, analysis, service, client) can each be opened on their own.",
    pipeline: ['Raw loan decisions', 'Feature derivation (debt-to-income, loan-to-assets, CIBIL bucket)', 'Five models on one split', 'joblib model + fitted scaler', 'Flask /predict', 'Next.js wizard client'],
    tech: ['Python', 'scikit-learn', 'XGBoost', 'Flask', 'Next.js', 'React', 'Tailwind CSS'],
    images: [
      { src: Lap1, alt: 'The wizard asking for the credit score, the feature that decides most cases.' },
      { src: Lap2, alt: 'The verdict for an applicant with a 778 credit score: Approved.' },
      { src: Lap3, alt: 'The same application with a 417 credit score: Rejected.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/loan-approval-predictor' },
  },
  {
    id: 'portfolio-strategy-backtester',
    title: 'Portfolio Strategy Backtester',
    category: 'finance',
    context: 'Course project',
    date: 'Dec 2025',
    when: 2025.92,
    award: null,
    summary:
      "Nine rebalancing strategies implemented from their optimisation formulations and run over three market regimes (a rising market, the 2008 crisis and the 2022 rate shock) on the argument that the question worth asking is not which allocation wins over a convenient window but which ones survive a window nobody would choose. The ranking reorders between regimes, and the leveraged max-Sharpe book makes the case on its own: unremarkable while markets rise, then a near-total wipeout in 2008. The solver work is varied rather than nine calls to one routine: minimum variance and maximum Sharpe as quadratic programs, maximum return as a linear program, equal risk contribution as a nonlinear program with a log-barrier objective checked against finite differences, and benchmark tracking as a mixed-integer quadratic program, since capping the book at ten of thirty holdings needs binary variables. Every rebalance pays 0.5% of traded value, rounds to whole shares and shrinks any trade that would overdraw the cash account, so no strategy spends money it does not have. All ten charts and three summary tables are committed with the notebook, so the backtest reads on GitHub with nothing installed.",
    pipeline: null,
    tech: ['Python', 'NumPy', 'pandas', 'CPLEX', 'IPOPT', 'Jupyter'],
    images: [
      { src: Psb1, alt: 'Daily portfolio value for all nine strategies through 2008 and 2009, starting from the same capital and ending across a wide spread.' },
      { src: Psb2, alt: 'Maximum drawdown per two-month rebalancing period for all nine strategies through 2008 and 2009.' },
      { src: Psb3, alt: 'Stacked allocation areas over time for minimum variance, maximum expected return, maximum Sharpe ratio and robust optimisation.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/portfolio-strategy-backtester' },
  },
  {
    id: 'credit-risk-var-simulator',
    title: 'Credit Risk VaR Simulator',
    category: 'finance',
    context: 'Course project',
    date: 'Dec 2025',
    when: 2025.93,
    award: null,
    summary:
      "Tail risk on a credit book is routinely sized with a normal approximation because it is analytic and cheap, but credit losses are nothing like normal. Most scenarios see no defaults at all and a few see many correlated ones. This simulates one-period rating migration for a 100-counterparty portfolio across eight states, composing each counterparty's latent creditworthiness from a correlated systemic driver and an idiosyncratic shock, and treats a large Monte Carlo run as the reference the shortcuts are measured against. Against that reference, on a one-period horizon over the same 100-counterparty book, the normal approximation recovers only 60.4% of 99.9% VaR and 56.6% of CVaR, and the shortfall widens the further into the tail you look, which is the signature of a shape problem rather than a calibration one. The more useful finding needs the part most work at this level skips: re-running each estimator over a hundred independent trials to measure its sampling error, which shows that two budgets spending exactly the same number of scenarios are not equally good, and that spending them on more systemic draws beats more idiosyncratic ones, because the systemic factor is what populates the tail.",
    pipeline: ['Migration probabilities to state boundaries', 'Cholesky-correlated systemic drivers', 'Latent draw per counterparty', 'Rating at horizon to loss', 'VaR / CVaR with measured sampling error'],
    tech: ['Python', 'NumPy', 'SciPy', 'Monte Carlo', 'Jupyter'],
    images: [
      { src: Crv1, alt: 'Simulated loss distribution for the value-weighted portfolio against the normal approximation, with the 99% and 99.9% VaR and CVaR marked.' },
      { src: Crv2, alt: 'Tail densities on a logarithmic scale: out-of-sample, both Monte Carlo budgets and the normal approximation, above the 95th percentile of loss.' },
      { src: Crv3, alt: 'Histograms of losses beyond the 95th percentile for the out-of-sample reference and both Monte Carlo budgets, with the normal approximation overlaid.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/credit-risk-var-simulator' },
  },
  {
    id: 'option-pricing-engine',
    title: 'Option Pricing Engine',
    category: 'finance',
    context: 'Course project',
    date: 'Dec 2025',
    when: 2025.94,
    award: null,
    summary:
      "A Monte Carlo pricer is only worth anything if you can check it against something. European options have an exact analytic price, so this prices them both ways to establish the engine is right, including a seeded search for the path count needed to close the gap to a tenth of a cent, and validates the analytic delta against a finite-difference one, sweeping the bump size to show the error is flat where it should be rather than picking a step and hoping. The underlying evolves under the risk-neutral measure rather than the stated expected return, which is the detail separating a pricing simulation from a forecasting one. The validated engine is then turned on barrier options, which have no convenient closed form, and the interesting part is where that exposes the method's limit: a simulation only sees the price at the steps it monitors, so a one-step knock-in prints a structurally impossible zero. The instrument is not worthless; the grid cannot represent it. It is also the one notebook here that runs start to finish on a clean kernel and reproduces its committed figures to the digit.",
    pipeline: null,
    tech: ['Python', 'NumPy', 'SciPy', 'Monte Carlo', 'Black-Scholes', 'Jupyter'],
    images: [
      { src: Ope1, alt: 'Fifty simulated stock price paths over one year, with the strike at 105, the up-in barrier at 110 and the down-out barrier at 90 drawn as horizontal lines.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/option-pricing-engine' },
  },
  {
    id: 'portfolio-constraint-study',
    title: 'Portfolio Constraint Study',
    category: 'finance',
    context: 'Course project, team of 3',
    date: 'Dec 2025',
    when: 2025.95,
    award: null,
    summary:
      "Mean-variance optimisation returns weights like 3.65%, and no broker fills that. Shares trade in whole lots and custodians impose minimum position sizes, and each of those constraints breaks the convexity that makes the problem easy, turning a quadratic program into a mixed-integer one. The question here is not whether that can be solved but what it costs, and the answer is asymmetric in a useful way: rounding to whole lots raises variance by a fraction of a percent, while a 25% minimum-holding floor costs nearly forty times as much and collapses a five-stock book to two. Making a portfolio tradeable is close to free; making it tidy is expensive. Each constraint is formulated twice over, once in CVXPY and once against the native CPLEX API, and the two agree, which is a real check on the formulation, since one canonicalises the problem for you and the other builds the matrices by hand. The sharpest argument in it is the naive comparison: solving unconstrained and then deleting sub-threshold positions does not give the best constrained portfolio, it gives the best unconstrained one with holes in it.",
    pipeline: null,
    tech: ['Python', 'CVXPY', 'CPLEX', 'NumPy', 'statsmodels', 'Jupyter'],
    images: [
      { src: Pcs1, alt: 'Efficient frontier of the continuous problem with the round-lot solutions plotted on top, coloured by how many assets each holds.' },
      { src: Pcs2, alt: 'Efficient frontier of the continuous problem with the minimum-holding solutions plotted on top, sitting to the right of the continuous curve.' },
      { src: Pcs3, alt: 'Grouped bar chart of minimum-variance weights per asset at no threshold and at 5%, 10% and 25% minimums.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/portfolio-constraint-study' },
  },
  {
    id: 'de1-soc-vga-renderer',
    title: 'DE1-SoC VGA Renderer',
    category: 'hardware',
    context: 'Course project, team of 2',
    date: 'Dec 2025',
    when: 2025.96,
    award: null,
    summary:
      "The graphics hardware on a DE1-SoC lives in the FPGA fabric at fixed physical addresses, which Linux userspace cannot touch, so drawing anything means splitting the work across the kernel boundary. This is a misc character device driver that maps the VGA pixel and character buffers through the lightweight HPS-to-FPGA bridge and exposes them as /dev/video, owning the primitives itself: reading it returns the resolution so userspace never hardcodes 320×240, and writing it takes text commands, which means a shell echo is enough to draw, genuinely useful on a board reachable only over a serial console. Bresenham runs in integer arithmetic throughout, because kernel space has no floating point without saving and restoring FPU state. The real engineering is the swap: requesting a buffer flip only takes effect at the end of the current refresh, so the driver polls the status bit before drawing again, which is what keeps frames from tearing and what caps the animation at 60 Hz. Text is drawn into the hardware character buffer rather than rasterised into pixels, so a running frame counter costs almost nothing and never touches the swap.",
    pipeline: ['Userspace animation program', 'Text command to /dev/video', 'Kernel driver parse + draw', 'ioremap over HPS-to-FPGA bridge', 'Buffer swap on vertical refresh', 'VGA out'],
    tech: ['C', 'Linux kernel module', 'ioremap', 'DE1-SoC', 'Cyclone V', 'VGA', 'RGB565'],
    images: [
      { src: De1Vga1, alt: 'Still from the demo recording: the kernel module driving a screenful of coloured lines over VGA, with the DE1-SoC board in front of the monitor.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/de1-soc-vga-renderer' },
  },
  {
    id: 'de1-soc-piano',
    title: 'DE1-SoC Piano',
    category: 'hardware',
    context: 'Course project, team of 2',
    date: 'Dec 2025',
    when: 2025.97,
    award: null,
    summary:
      "A playable polyphonic instrument on a development board, where the constraint that shapes everything is that the audio CODEC consumes 8,000 samples a second and will not wait. Stop producing samples to poll a keyboard or redraw a screen and the sound audibly glitches. There is no sound library: every sample is the sine of an accumulated phase, notes are frequencies in equal temperament rather than opaque constants, and chords are plain superposition, so polyphony costs no new mechanism at all. A sample is a number, and mixing is addition. Timing is solved by asking the hardware instead of guessing at it: the CODEC's FIFO reports its remaining space and the sample loop spins until both channels have room, so the drain rate sets the software's pace with no timer involved. The slow work is then moved off that loop onto separate threads for keyboard and display, sharing one small per-note volume array behind a single mutex, so nothing that blocks can stall the thing that must not.",
    pipeline: ['PS/2 keyboard event', 'Per-note volume array behind one mutex', 'Sine sample per active note, summed', 'Spin on CODEC FIFO space', 'Audio CODEC at 8 kHz'],
    tech: ['C', 'pthreads', 'Linux device drivers', 'DE1-SoC', 'Cyclone V', 'Audio CODEC', 'PS/2'],
    images: [
      { src: De1Piano1, alt: 'Still from the demo recording: a sustained tone drawn as a green waveform on the VGA display, with the DE1-SoC board and the speaker beside it.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/de1-soc-piano' },
  },
  {
    id: 'de1-soc-oscilloscope',
    title: 'DE1-SoC Oscilloscope',
    category: 'hardware',
    context: 'Course project, team of 2',
    date: 'Dec 2025',
    when: 2025.98,
    award: null,
    summary:
      "An oscilloscope is a timing problem twice over, not a drawing problem. Sample at the wrong rate and the waveform aliases into something that was never on the wire; start each sweep at an arbitrary moment and a perfectly steady signal appears to slide across the screen, because consecutive captures begin at different points in its cycle. The trigger is what converts a stream of samples into a stable picture, and it is here: consecutive ADC readings compared against the mid-range level, the sweep starting only on a crossing, with a switch selecting rising or falling slope, the same control a bench scope puts on its front panel. The capture buffer is deliberately exactly one screen wide, so samples map one-to-one onto pixel columns with no resampling, and the sampling period then falls out of the requested sweep arithmetically rather than being tuned by hand. Stretch the time base from the pushbuttons while it runs and the interval timer is re-armed with the recalculated period. Sampling itself is interrupt-driven, the handler doing one ADC read and a store and nothing else. A square-wave generator built on one of the board's hardware timers is included, which makes the whole thing demonstrable with a loopback wire instead of lab equipment.",
    pipeline: ['Square-wave generator on a hardware timer', '12-bit ADC over the lightweight bridge', 'Edge trigger on mid-range crossing', 'SIGALRM interval sampling into a 320-sample buffer', 'Connected trace on VGA'],
    tech: ['C', 'POSIX timers', 'SIGALRM', '12-bit ADC', 'DE1-SoC', 'Cyclone V', 'VGA'],
    images: [
      { src: De1Scope1, alt: 'Still from the demo recording: a square wave traced on the VGA display by the sampling loop, with the DE1-SoC board in front of the monitor.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/de1-soc-oscilloscope' },
  },
  {
    id: 'de1-soc-edge-detection',
    title: 'DE1-SoC Edge Detection',
    category: 'hardware',
    context: 'Course project, team of 2',
    date: 'Dec 2025',
    when: 2025.99,
    award: null,
    summary:
      "A DE1-SoC puts an ARM core and an FPGA on the same die, which poses the question the platform exists to ask: for a given piece of work, which side should do it? Edge detection is a good test case, convolution-heavy and embarrassingly parallel, the kind of work a CPU does adequately and dedicated fabric does far better, so the same algorithm is built on both sides of that boundary and both paths are instrumented. The software path implements the Canny stages on the ARM core in integer arithmetic throughout: a 5×5 Gaussian normalised by its weight sum, Sobel gradients kept signed so direction survives, non-maximum suppression thinning ridges to single pixels, and a connectivity pass that links fragments and drops isolated noise. The hardware path moves the image across the boundary by DMA rather than memory-mapped registers, streaming pixels in and back out through fabric with buffers in SDRAM over the non-lightweight bridge, because a 640×480 image does not fit in FPGA on-chip memory. Loading a new bitstream at runtime means unloading every driver that touches the fabric first, since they hold addresses about to stop meaning what they meant.",
    pipeline: ['BMP in', 'Gaussian blur', 'Sobel gradients', 'Non-maximum suppression', 'Threshold + connectivity', 'Same work again as an FPGA stream over DMA'],
    tech: ['C', 'DMA', 'FPGA', 'DE1-SoC', 'Cyclone V', 'SDRAM', '/dev/mem'],
    images: [
      { src: De1Edge1, alt: 'Still from the demo recording: Sobel edge output of a bridge photograph on the VGA display, white edges on black, with the DE1-SoC board in front.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/de1-soc-edge-detection' },
  },
  {
    id: 'rustycanvas',
    title: 'RustyCanvas',
    category: 'hardware',
    tracks: ['software'],
    context: 'Course project, team of 3',
    date: 'Dec 2025',
    when: 2025.995,
    award: null,
    summary:
      "A shared pixel canvas in the spirit of r/place, except whatever the grid holds also has to appear on a real LED matrix on a desk. That forces one API to serve two clients with almost nothing in common: a browser with a full runtime and plenty of memory, and a microcontroller with no operating system, no allocator and a few hundred kilobytes of RAM. The interface is visibly designed around the weaker one, so alongside the full-canvas read there is a delta feed returning only what changed since a given timestamp, because a device without a heap should not refetch 512 pixels on a polling loop. Persistence is an embedded pure-Rust key-value store rather than a database process, so the whole server is a single binary that starts with one command, which matters for something meant to be demonstrated on a desk. Every layer is Rust across three genuinely different targets: an async server, a WebAssembly bundle in the browser, and bare-metal firmware that speaks HTTP over a raw TCP socket into fixed-capacity buffers because there is no reqwest without an allocator.",
    pipeline: ['Browser (Yew/WASM) or ESP32-C6', 'HTTP to axum service', 'sled embedded store', 'Delta feed since timestamp', '16×32 LED matrix'],
    tech: ['Rust', 'axum', 'tokio', 'sled', 'Yew', 'WebAssembly', 'esp-hal', 'ESP32-C6'],
    images: [
      { src: Rc1, alt: 'The Yew front end: the 32x16 grid, the colour palette and the reset control.' },
      { src: Rc2, alt: 'Architecture diagram of the browser client, the Rust server and the ESP32-C6 node.' },
      { src: Rc3, alt: 'ESP32-C6 pin wiring for the hardware node.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/rustycanvas' },
  },
  {
    id: 'robot-biathlon-ai-commentator',
    title: 'Robot Biathlon AI Commentator',
    category: 'software',
    tracks: ['hardware', 'ml'],
    sprint: '~26h',
    context: 'UTRA Hacks 2026',
    date: 'Feb 2026',
    when: 2026.09,
    award: 'Winner, Best Use of DigitalOcean',
    summary:
      "An LLM as a sports referee: rather than just driving a rover around an obstacle course, have something watch its camera feed, judge the run and call the race out loud. Built at a robotics hackathon in roughly 26 hours, and the software is the half that lives here; the rover itself was built and mounted elsewhere. The vision layer segments the ESP32's MJPEG stream in HSV rather than RGB, which is the right call for a venue where nobody controls the lighting, with red handled as two ranges because it wraps the hue circle at 0/180; detected regions are area-filtered to drop noise and projected into a trapezoid floor view, so a marker's position becomes a steering angle rather than a raw pixel coordinate. The same frames go to Gemini under a prompt that casts it as a biathlon referee, pinned to a fixed JSON schema and explicitly told not to abstain: on track, drifting left or right, or off, plus a commentary cue. The reasoning is that a referee who stays silent is worse than one occasionally wrong, and the cue becomes speech through ElevenLabs on a Next.js dashboard. Behind all of it, each run's footage lands in Snowflake and a nightly job rebuilds a YOLO dataset and retrains, so the detector learns from the robot's own runs instead of being trained once and frozen, though as committed that loop ends at the trained model rather than feeding back into the live navigation path.",
    pipeline: ['ESP32 MJPEG stream', 'HSV segmentation to steering angle', 'Gemini referee verdict as constrained JSON', 'ElevenLabs commentary on a Next.js dashboard', 'Run footage to Snowflake, nightly YOLOv8 retrain'],
    tech: ['Python', 'OpenCV', 'YOLOv8', 'TypeScript', 'Next.js', 'React', 'Gemini', 'ElevenLabs', 'Snowflake', 'ESP32'],
    images: [
      { src: Rb1, alt: 'The rover: a wooden chassis with two drive wheels, an ultrasonic sensor, motor driver, breadboard and two 9V batteries, following a red strip of tape.' },
      { src: Rb2, alt: 'The Olympus // Command dashboard: live camera feed with an AI referee call, the HSV vision view, match archives and system status for Snowflake, Gemini, ElevenLabs and DigitalOcean.' },
    ],
    links: {
      github: 'https://github.com/RoaringRohan/robot-biathlon-ai-commentator',
      devpost: 'https://devpost.com/software/super-epic-hackathon-gang-project',
    },
  },
  {
    id: 'demokritos',
    title: 'Demokritos',
    category: 'software',
    context: 'Course project, team of 3',
    date: 'Apr 2026',
    when: 2026.3,
    award: null,
    summary:
      "Blackboard and Moodle assume an institution with an IT department standing behind them. A weekend tutor or a study-group organiser has none of that, so one course ends up scattered across a Drive folder, a Forms quiz, a spreadsheet of deadlines and a group chat, and the students hunt across all four. This puts the whole teaching loop behind one login with no institutional licence: anyone can create a course and teach it, anyone can browse the marketplace and enrol in a click, and roles are per-user per-course, so the same person is an instructor in one course and a student in another, enforced server-side on every API request rather than hidden in the interface. Courses hold lectures with attachments, timed multiple-choice quizzes with attempt caps, and assignments taking PDF submissions. Two details carry the design: submitted PDFs go straight to object storage on short-lived presigned URLs, so file bytes never pass through the API server and the database holds only metadata; and quiz telemetry reaches an external Learning Record Store through a server-side proxy, because that store authenticates with a key and secret that must never reach a browser. The client posts a plain statement to the app's own route and the credentials stay behind it. The discussion forum updates over Server-Sent Events rather than polling, the server holding each connection open and enqueueing to every listener on a course as comments land. The core was driven end to end: an account, a course, a lecture and a timed quiz, each read back through the UI. The features that need third-party credentials (AI-assisted grading, calendar sync, the analytics feed and cloud upload) are built but were not exercised.",
    pipeline: null,
    tech: ['TypeScript', 'Next.js', 'React', 'Prisma', 'PostgreSQL', 'Better Auth', 'Tailwind CSS', 'Google Cloud Storage', 'Server-Sent Events', 'xAPI'],
    images: [
      { src: Dem1, alt: 'Instructor view of a course curriculum: a lecture module and a quiz module, with edit and delete controls.' },
      { src: Dem2, alt: 'A lecture module inside a course, with its description and the instructor-only module settings control.' },
      { src: Dem3, alt: 'Instructor dashboard listing a taught course above the course marketplace.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/demokritos' },
  },
  {
    id: 'geoalarm',
    title: 'GeoAlarm',
    category: 'software',
    context: 'Apple Swift Student Challenge entry',
    date: 'Feb 2026',
    when: 2026.15,
    award: null,
    summary:
      "A clock alarm can't say \"remind me when I get to the store\" or \"when I leave the office\", and location reminders that can are hard to demo without walking somewhere. This is an iOS alarm that fires on arriving at or leaving a place: pick a spot on a map, set a radius from 100 m to 1 km, choose arrival or departure. The design choice that carries it is that the trigger logic is pure Swift with no UI or CoreLocation types in it: a Haversine distance, a region check and a transition detector, where outside-to-inside is an arrival and inside-to-outside a departure, and fired or disabled alarms stay quiet. Because of that split, real GPS and a Simulation Mode, where you teleport to a preset, type coordinates or drag a slider that walks a virtual position toward an alarm, both drive one code path, so the same trigger can be shown from a desk. Denied location permission drops the app into Simulation Mode with a banner instead of leaving it dead, and it uses Apple frameworks only. It has never been compiled or run: there is no Xcode project, the 17 XCTest cases were written without a Swift toolchain and have never been executed, and triggering is foreground-only with an in-app alert, so it is not a working wake-me-when-I-arrive alarm.",
    pipeline: null,
    tech: ['Swift', 'SwiftUI', 'CoreLocation', 'MapKit', 'Combine', 'XCTest'],
    images: [
      { src: Ga1, alt: 'The alarm list running in Simulation Mode, with two location alarms shown as triggered.' },
      { src: Ga2, alt: 'The New Alarm sheet with title, arrival/departure toggle, preset location and detection radius.' },
      { src: Ga3, alt: 'The New Alarm sheet scrolled to the map preview, showing the target pin and its radius circle.' },
    ],
    links: { github: 'https://github.com/RoaringRohan/geoalarm' },
  },
];

// Newest first, in every track: latest work sits at the top of each section.
// Ties keep their literal order above (Array.sort is stable).
projects.sort((a, b) => b.when - a.when);

// Channel membership. A project sits on its primary `category` and on every
// channel named in `tracks`. Pass primaryOnly for the All view, where listing
// a multi-track project under each of its channels would show it twice.
export const inChannel = (project, categoryId, primaryOnly = false) =>
  project.category === categoryId ||
  (!primaryOnly && (project.tracks?.includes(categoryId) ?? false));

export const categories = [
  {
    id: 'software',
    label: 'Software',
    index: '01',
    blurb: 'Full-stack systems and quantitative tooling.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    index: '02',
    blurb: 'Embedded systems and hardware-to-cloud pipelines.',
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    index: '03',
    blurb: 'Learning systems, from research models to applied engines.',
  },
  {
    id: 'finance',
    label: 'Quantitative Finance',
    index: '04',
    blurb: 'Pricing, risk and portfolio optimization, solved rather than assumed.',
  },
];
