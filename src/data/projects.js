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
//   images    optional array of { src, alt, tall? } — imported PNGs, rendered as a
//             screenshot row. Omit for projects with no runnable UI. Set
//             tall: true on a portrait shot so it spans two grid rows.
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
      "Getting back down a trail with no map, no signal and no screen. On the way out, an ESP32-CAM saves a visual landmark every 2.5 seconds (ORB features, only from frames with 50+ keypoints). On the way back, each frame is matched against those landmarks and a single LED shows green, amber or red. Built in 48 hours on an Arduino Uno Q; the score is a match count, not a calibrated confidence.",
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
      "A 2D Unity arena brawler with three heroes and swappable melee and ranged loadouts. All combat logic lives in one shared base class, so each hero is a ~60-line subclass that only sets its stats. Result: twelve distinct play styles from a single combat system.",
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
      "An IT helpdesk where staff open tickets, managers assign them to a technician who knows that software, and technicians close them out. Built on Node, Express and MySQL with a seven-table schema seeded with 4,500 tickets and 2,500 employees, so the manager reports run real JOIN and GROUP BY queries on realistic data.",
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
      "A music library app on Angular, Express and MongoDB with three access levels: guests search and browse public playlists, users manage their own, admins moderate reviews. Auth uses JWT access and refresh tokens, and route order enforces it: public routes, then the token check, then secure and admin routes. No protected handler is reachable without a valid token.",
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
      "A multi-room chat server in C++ with a Python Tkinter client. Each client runs on its own thread, and that thread list doubles as the routing table: messages go only to clients in the same room, guarded by a POSIX semaphore, so there is no separate membership map to keep in sync. Users switch rooms on a live connection, and shutdown closes every socket cleanly.",
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
      "A fountain that adjusts its pump speed to match the noise in the room. The catch: the pump makes noise too, so the fountain hears itself. The fix was a 15-sample moving average with gaps between thresholds, so it ignores short spikes and its own sound. Built on an Arduino Mega, plus a bare-metal ARM Cortex-A9 version with no HAL.",
    pipeline: ['Electret microphone', '15-sample ring buffer average', 'Three-state threshold machine', 'PWM through transistor gate', 'DC pump'],
    tech: ['Arduino Mega', 'C/C++', 'Bare-metal ARM', 'Cyclone V', 'PWM', 'EEPROM'],
    images: [
      { src: Awf1, alt: 'CAD model of the fountain body, water wheel and basin in a 3D modelling tool.' },
      { src: Awf2, alt: 'The 3D-printed fountain body and water wheel assembled.', tall: true },
      { src: Awf3, alt: 'Breadboard with the microphone, transistor and motor wired to an Arduino.', tall: true },
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
      "A tool for writing and reviewing course outlines with three roles. Admins assign courses, instructors write outlines and export them to PDF, and reviewers file issues tied to a specific outline. All data lives in Firestore and is read straight from the browser, so the whole multi-user workflow runs with no backend, no framework and no build step.",
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
      "Can solar irradiance be estimated from ordinary weather data, without the pyranometer most sites don't have? Using ~165,000 hourly readings, this compares linear regression, tuned XGBoost and a Keras neural network on the same target. Result: nearly all the gain comes from going non-linear. The neural network adds only 0.004 R² over XGBoost, at a much higher training cost.",
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
      "Five self-directed projects covering the analyst workflow, from raw public data to a queryable database. Three are ETL pipelines into MySQL: World Bank indicators as a star schema, a Netflix catalogue normalised into five tables, and ~197,000 hourly weather records. Every stage writes a CSV, so any step can be inspected. The other two build neural networks from scratch in NumPy, backpropagation included.",
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
      "Physio patients get home exercises but no feedback on whether they're doing them right, and therapists see nothing between visits. A six-channel EMG sleeve on an ESP32 reads muscle activity, Python classifies the gesture, and a Unity app guides the session over a TCP socket. A .NET and MongoDB API lets therapists assign programs and track progress. Of four model families tested, the deep hybrid did not beat the classical baseline.",
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
      "Predicts at checkout whether an order will arrive late. The hard part: late orders are rare, so a model that always says \"on time\" scores ~97% and is useless. The Keras trainer on Vertex AI uses a custom focal loss, class weighting and a shifted threshold, and tunes for precision on late orders. An AutoML benchmark shows why the metric matters: 0.98 ROC-AUC, but only 0.72 PR-AUC.",
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
      "Compares five classifiers on 4,269 past loan decisions using precision, recall and F1, then deploys the best one. The Flask API ships the model with its fitted scaler and applies it server-side, which avoids the common bug where a deployed model gets unscaled input and returns nonsense. A Next.js wizard walks applicants through the form one question at a time.",
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
      "Tests nine portfolio strategies across three market regimes: a bull market, the 2008 crisis and the 2022 rate shock. Each strategy is built from its optimisation model (quadratic, linear, nonlinear and mixed-integer) and solved with CPLEX and IPOPT. Every rebalance pays 0.5% in costs, trades whole shares and never overdraws cash. Result: rankings change by regime, and leveraged max-Sharpe nearly wipes out in 2008.",
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
      "Credit tail risk is often sized with a normal approximation, but credit losses are far from normal. This Monte Carlo model simulates rating changes for 100 borrowers with correlated defaults and uses a large run as the benchmark. Result: the normal approximation captures only 60.4% of 99.9% VaR and 56.6% of CVaR. It also shows that spending simulation budget on systemic draws beats idiosyncratic ones.",
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
      "A Monte Carlo option pricer, checked against Black-Scholes before it is trusted. European options are priced both ways, and the analytic delta is validated against finite differences. The engine then prices barrier options, which have no simple closed form, and exposes the method's limit: with one monitoring step, a knock-in option prices at an impossible zero. Runs cleanly and reproduces its figures exactly.",
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
      "Optimisers return weights like 3.65%, which no broker can fill. This study adds real-world constraints (whole lots, minimum position sizes), which turn a quadratic program into a mixed-integer one, and measures what they cost. Result: round lots barely move risk, while a 25% minimum holding costs nearly forty times more and shrinks a five-stock portfolio to two. Built in both CVXPY and CPLEX, and the two agree.",
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
      "Linux programs can't reach the DE1-SoC's VGA hardware directly. This kernel driver maps the screen buffers and exposes them as /dev/video, which accepts plain-text draw commands, so even a shell echo can draw. Lines use integer-only Bresenham because the kernel has no floating point. Buffer swaps wait for the screen refresh, giving tear-free animation at 60 Hz.",
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
      "A polyphonic keyboard instrument on the DE1-SoC, with no sound library. The audio chip needs 8,000 samples a second and any stall is audible. Each note is a generated sine wave and chords are simply summed. The audio loop is paced by the chip's buffer, while keyboard and display run on separate threads, so nothing slow can block the sound.",
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
      "A working oscilloscope on the DE1-SoC, where the hard part is timing. An edge trigger (rising or falling, set by a switch) starts every sweep at the same point in the wave, so the trace holds still. The buffer is exactly one screen wide, so each sample maps to one pixel column, and the sample rate updates live when the time base changes. A built-in square-wave generator lets it be demoed with one wire.",
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
      "The DE1-SoC has an ARM CPU and an FPGA on one chip, so which one should do the image processing? The same edge detector is built on both. The ARM side runs full Canny in integer math: Gaussian blur, Sobel, non-maximum suppression and edge linking. The FPGA side streams the image through the fabric by DMA, using SDRAM because a 640×480 frame doesn't fit in on-chip memory.",
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
      "A shared pixel canvas like r/place that also appears on a physical LED matrix. One API serves both a browser and an ESP32-C6 with no OS or heap, so it adds a delta endpoint that returns only the pixels that changed. The server is a single Rust binary with an embedded database. All three parts are Rust: an axum server, a Yew/WebAssembly front end and bare-metal firmware.",
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
      "An AI referee and commentator for a robot obstacle race, built in ~26 hours. HSV colour segmentation turns the rover's camera feed into steering angles and holds up under venue lighting. Gemini watches the same frames and returns a fixed JSON verdict (on track, drifting, off), voiced by ElevenLabs on a Next.js dashboard. Runs are stored in Snowflake for nightly YOLO retraining, though that model isn't fed back into live navigation yet.",
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
      "Tutors and study groups have no LMS, so a course ends up split across Drive, Forms, spreadsheets and a group chat. Demokritos puts lectures, timed quizzes and PDF assignments behind one login, with per-course roles checked server-side. Files go straight to cloud storage through presigned URLs, and a server proxy keeps analytics credentials out of the browser. Core flows were tested end to end; features that need third-party keys are built but untested.",
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
    id: 'honey-hills-lavender-farm',
    title: 'Honey Hills Lavender Farm',
    category: 'software',
    context: 'Freelance client project, solo',
    date: 'Feb 2026',
    when: 2026.12,
    award: null,
    summary:
      "A lavender farm and beekeeping business needed to sell honey, oils, candles and flowers online and tell its bee-conservation story. Built the whole site solo on Squarespace: design, layout, all copy, and a shop with cart alongside pages for the farm, lavender growing, bee education, the Saturday market and contact.",
    pipeline: null,
    tech: ['Squarespace', 'E-commerce', 'UI Design', 'Copywriting'],
    links: { demo: 'https://www.honeyhills.ca/' },
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
      "An iOS alarm that goes off when you arrive at or leave a place, not at a set time. The trigger logic is pure Swift with no UI or location code in it, so real GPS and a built-in simulation mode share one code path and the app can be demoed from a desk. Uses Apple frameworks only. Not yet compiled or run: there's no Xcode project, the 17 tests haven't been executed, and alerts are foreground-only.",
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
