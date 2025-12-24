const App = () => {
  const { useState, useEffect, useMemo } = React;

  const squareConfigs = [
    { size: 6, left: "4%", top: "10%", duration: 22, delay: 0, moveX: 36, moveY: -42, opacity: 0.46 },
    { size: 5, left: "16%", top: "22%", duration: 19, delay: -4, moveX: -34, moveY: 30, opacity: 0.4 },
    { size: 8, left: "32%", top: "14%", duration: 26, delay: -2, moveX: 44, moveY: -36, opacity: 0.48 },
    { size: 4, left: "52%", top: "20%", duration: 18, delay: -6, moveX: -32, moveY: 38, opacity: 0.38 },
    { size: 6, left: "68%", top: "12%", duration: 21, delay: -8, moveX: 40, moveY: -32, opacity: 0.44 },
    { size: 5, left: "84%", top: "28%", duration: 20, delay: -10, moveX: -28, moveY: 34, opacity: 0.36 },
    { size: 7, left: "10%", top: "46%", duration: 24, delay: -3, moveX: 38, moveY: -46, opacity: 0.42 },
    { size: 5, left: "26%", top: "50%", duration: 19, delay: -7, moveX: -30, moveY: 32, opacity: 0.36 },
    { size: 8, left: "42%", top: "44%", duration: 23, delay: -1, moveX: 42, moveY: -40, opacity: 0.48 },
    { size: 4, left: "60%", top: "38%", duration: 18, delay: -9, moveX: -36, moveY: 30, opacity: 0.34 },
    { size: 6, left: "76%", top: "50%", duration: 25, delay: -2, moveX: 36, moveY: -40, opacity: 0.44 },
    { size: 5, left: "90%", top: "42%", duration: 20, delay: -5, moveX: -30, moveY: 26, opacity: 0.34 },
    { size: 4, left: "14%", top: "68%", duration: 22, delay: -2, moveX: 32, moveY: -28, opacity: 0.34 },
    { size: 7, left: "30%", top: "70%", duration: 27, delay: -5, moveX: -40, moveY: 44, opacity: 0.46 },
    { size: 5, left: "48%", top: "74%", duration: 19, delay: -7, moveX: 30, moveY: -34, opacity: 0.38 },
    { size: 6, left: "64%", top: "66%", duration: 23, delay: -4, moveX: -36, moveY: 38, opacity: 0.42 },
    { size: 4, left: "80%", top: "72%", duration: 21, delay: -6, moveX: 38, moveY: -30, opacity: 0.34 },
    { size: 6, left: "18%", top: "86%", duration: 24, delay: -8, moveX: -34, moveY: 40, opacity: 0.4 },
    { size: 5, left: "40%", top: "90%", duration: 19, delay: -3, moveX: 34, moveY: -44, opacity: 0.36 },
    { size: 7, left: "70%", top: "86%", duration: 26, delay: -5, moveX: -32, moveY: 34, opacity: 0.42 },
    { size: 5, left: "8%", top: "30%", duration: 20, delay: -6, moveX: 30, moveY: -36, opacity: 0.36 },
    { size: 6, left: "36%", top: "6%", duration: 24, delay: -9, moveX: -38, moveY: 34, opacity: 0.4 },
    { size: 4, left: "58%", top: "82%", duration: 19, delay: -7, moveX: 28, moveY: -32, opacity: 0.32 },
    { size: 7, left: "88%", top: "60%", duration: 27, delay: -4, moveX: -42, moveY: 38, opacity: 0.44 },
    { size: 5, left: "24%", top: "58%", duration: 21, delay: -5, moveX: 34, moveY: -30, opacity: 0.36 },
  ];

  const baseForbesList = [
    { name: "Bernard Arnault", worth: 211, company: "LVMH", sector: "luxury" },
    { name: "Elon Musk", worth: 198, company: "Tesla, SpaceX", sector: "tech" },
    { name: "Jeff Bezos", worth: 193, company: "Amazon", sector: "commerce" },
    { name: "Larry Ellison", worth: 141, company: "Oracle", sector: "enterprise" },
    { name: "Mark Zuckerberg", worth: 134, company: "Meta", sector: "social" },
  ];

  const baseCompanies = [
    { name: "Apple", value: 2900, sector: "tech" },
    { name: "Microsoft", value: 2700, sector: "enterprise" },
    { name: "Saudi Aramco", value: 2100, sector: "energy" },
    { name: "NVIDIA", value: 2000, sector: "ai" },
    { name: "Alphabet", value: 1900, sector: "search" },
  ];

  const presidentPools = {
    usa: ["Kamala Harris", "Donald Trump", "Gavin Newsom", "Nikki Haley"],
    canada: ["Mark Carney", "Pierre Poilievre", "Chrystia Freeland"],
    india: ["Narendra Modi", "Rahul Gandhi", "Nirmala Sitharaman"],
    germany: ["Olaf Scholz", "Annalena Baerbock", "Friedrich Merz"],
    uk: ["Keir Starmer", "Rishi Sunak", "Rachel Reeves"],
    russia: ["Vladimir Putin", "Mikhail Mishustin", "Sergey Sobyanin"],
    china: ["Xi Jinping", "Li Qiang", "Ding Xuexiang"],
  };

  const collegeOptions = [
    { name: "MIT", acceptanceRate: "4%", focus: "STEM" },
    { name: "Stanford", acceptanceRate: "3%", focus: "Entrepreneurship" },
    { name: "UCLA", acceptanceRate: "9%", focus: "Research" },
    { name: "NYU", acceptanceRate: "12%", focus: "Business" },
    { name: "State University", acceptanceRate: "48%", focus: "Public" },
  ];

  const worldEventTemplates = [
    {
      title: "Arctic LNG shock",
      description: "A sudden freeze closes export terminals in northern Europe for three months.",
      impact: "Energy prices spike and trucking companies ration fuel allotments.",
      sector: "energy",
    },
    {
      title: "Taiwan Strait convoy standoff",
      description: "A naval blockade disrupts chip shipments for six weeks.",
      impact: "Electronics makers delay launches and factories cut weekend shifts.",
      sector: "tech",
    },
    {
      title: "AI co-pilot breakthrough",
      description: "A new transformer model passes medical board exams and ships to hospitals.",
      impact: "Healthcare staffing costs drop while med-tech valuations jump.",
      sector: "ai",
    },
    {
      title: "Monsoon-linked crop failure",
      description: "A late monsoon damages rice harvests across Southeast Asia.",
      impact: "Food prices rise and importers scramble for supply.",
      sector: "commerce",
    },
  ];

  const lifeEventPools = {
    teen: [
      {
        title: "Drone repair hustle",
        text: "You fix broken DJI drones for neighbors and list spare parts on eBay.",
        cash: 240,
        happiness: 3,
      },
      {
        title: "Math league rivalry",
        text: "A transfer student beats you in a regionals quiz, pushing you to grind calculus.",
        grades: 4,
        happiness: -1,
      },
      {
        title: "Cross-country move",
        text: "Your family relocates from Austin to Pittsburgh for a hospital promotion.",
        happiness: -2,
      },
      {
        title: "AI-native choice: prompt club",
        text: "You start a lunchtime prompt-engineering club and test a campus safety bot.",
        happiness: 2,
        grades: 2,
      },
    ],
    adult: [
      {
        title: "Product ops contract",
        text: "A fintech recruiter offers a 6-month product ops contract at $22/hr.",
        cash: 1200,
        happiness: 2,
      },
      {
        title: "Mentor in residence",
        text: "A former NASA engineer agrees to review your capstone each Friday.",
        happiness: 4,
      },
      {
        title: "Transmission failure",
        text: "Your used sedan needs a $800 transmission rebuild before midterms.",
        cash: -800,
        happiness: -2,
      },
      {
        title: "AI-native choice: lab collaboration",
        text: "You pilot an AI lab notebook that flags a critical reagent mismatch.",
        happiness: 3,
        grades: 3,
      },
    ],
  };

  const LOG_SIZE = 6;
  const ACTIONS_PER_YEAR = 2;

  const initialProfile = () => {
    const stored = localStorage.getItem("lifeSimProfile");
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  };
  const storedProfile = initialProfile();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState(storedProfile?.country || "");
  const [playerName, setPlayerName] = useState(storedProfile?.name || "");
  const [hasPlayerName, setHasPlayerName] = useState(Boolean(storedProfile?.name));

  const [age, setAge] = useState(15);
  const [year, setYear] = useState(2024);
  const [cash, setCash] = useState(1200);
  const [grades, setGrades] = useState(78);
  const [happiness, setHappiness] = useState(70);
  const [health, setHealth] = useState(84);
  const [iq] = useState(106);
  const [looks] = useState("8/10");
  const [logEntries, setLogEntries] = useState([
    { time: "2023", title: "You joined the robotics club and built a line-following bot.", icon: "⚙" },
    { time: "2024", title: "Life begins in editing mode with a full year ahead.", icon: "✦" },
  ]);
  const [worldEvents, setWorldEvents] = useState([]);
  const [collegeApps, setCollegeApps] = useState([]);
  const [collegeDecisions, setCollegeDecisions] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [activeApp, setActiveApp] = useState("activities");
  const [earthTab, setEarthTab] = useState("forbes");
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);
  const [actionsLeft, setActionsLeft] = useState(ACTIONS_PER_YEAR);

  const stats = {
    cash: `$${cash.toLocaleString()}`,
    date: `06-10-${year}`,
    developedBy: "DEVELOPED BY JONATHAN CHARLES IBANEZ",
    age,
    name: playerName || "Awaiting Alias",
    iq,
    health,
    happiness,
    looks,
    country: country || "Origin unknown",
  };

  useEffect(() => {
    if (!playerName) return;
    setHasPlayerName(true);
    localStorage.setItem("lifeSimProfile", JSON.stringify({ name: playerName, country }));
  }, [playerName, country]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const safeFirst = firstName.trim();
    const safeMiddle = middleName.trim();
    const safeLast = lastName.trim();
    const safeCountry = country.trim();
    if (!safeFirst || !safeLast || !safeCountry) return;
    const fullName = [safeFirst, safeMiddle, safeLast].filter(Boolean).join(" ");
    setPlayerName(fullName);
  };

  const appendLog = (entry) => {
    setLogEntries((prev) => [...prev, entry].slice(-LOG_SIZE));
  };

  const resolveWorldEvents = (nextYear) => {
    setWorldEvents((prev) => {
      const updated = prev.map((event) =>
        event.endYear <= nextYear ? { ...event, status: "resolved" } : event
      );
      updated
        .filter((event) => event.endYear <= nextYear && event.status === "resolved")
        .forEach((event) => {
          appendLog({
            time: `${nextYear}`,
            title: `${event.title} resolved after ${event.duration} years.`,
            icon: "✓",
          });
        });
      return updated.filter((event) => event.status !== "resolved");
    });
  };

  const getOpenAiKey = () => window.OPENAI_API_KEY || localStorage.getItem("openaiKey");

  const requestOpenAI = async (systemPrompt, userPrompt) => {
    const apiKey = getOpenAiKey();
    if (!apiKey) return null;
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.7,
        }),
      });
      if (!response.ok) return null;
      const data = await response.json();
      return data?.choices?.[0]?.message?.content || null;
    } catch (error) {
      return null;
    }
  };

  const parseJsonResponse = (content) => {
    if (!content) return null;
    try {
      return JSON.parse(content);
    } catch (error) {
      return null;
    }
  };

  const triggerWorldEvent = async (nextYear) => {
    if (nextYear % 3 !== 0) return;
    const template = worldEventTemplates[Math.floor(Math.random() * worldEventTemplates.length)];
    const worldContext = `Year: ${nextYear}. Active events: ${activeWorldEvents
      .map((event) => event.title)
      .join(", ") || "none"}. Player country: ${country || "unknown"}.`;
    const aiResponse = await requestOpenAI(
      "You generate hyper-specific global events for a life simulation game. Respond only in JSON.",
      `${worldContext} Create a world event for year ${nextYear}. Include title, description, impact, sector. Avoid generalism.`
    );
    const aiEvent = parseJsonResponse(aiResponse);
    const finalEvent = aiEvent && aiEvent.title ? aiEvent : template;
    const duration = 2 + Math.floor(Math.random() * 3);
    const newEvent = {
      id: `${nextYear}-${finalEvent.title}`,
      title: finalEvent.title,
      description: finalEvent.description,
      impact: finalEvent.impact,
      sector: finalEvent.sector || template.sector,
      startYear: nextYear,
      endYear: nextYear + duration,
      duration,
      status: "active",
    };
    setWorldEvents((prev) => [...prev, newEvent]);
    appendLog({
      time: `${nextYear}`,
      title: `${finalEvent.title} begins. ${finalEvent.impact}`,
      icon: "⚡",
    });
  };

  const triggerLifeEvent = async (nextAge, nextYear) => {
    const pool = nextAge < 18 ? lifeEventPools.teen : lifeEventPools.adult;
    const fallbackEvent = pool[Math.floor(Math.random() * pool.length)];
    const lifeContext = `Year: ${nextYear}. Age: ${nextAge}. Name: ${playerName || "player"}. Country: ${
      country || "unknown"
    }. Cash: ${cash}. Grades: ${grades}. Happiness: ${happiness}. Health: ${health}.`;
    const aiResponse = await requestOpenAI(
      "You generate hyper-specific life events for a simulation game. Respond only in JSON.",
      `${lifeContext} Create a life event. Include title, text, cash, happiness, grades. Avoid generalism.`
    );
    const aiEvent = parseJsonResponse(aiResponse);
    const event = aiEvent && aiEvent.title ? aiEvent : fallbackEvent;
    if (!event) return;
    if (event.cash) setCash((prev) => Math.max(0, prev + event.cash));
    if (event.happiness) setHappiness((prev) => Math.min(100, Math.max(0, prev + event.happiness)));
    if (event.grades) setGrades((prev) => Math.min(100, Math.max(0, prev + event.grades)));
    appendLog({
      time: `${nextYear}`,
      title: `${event.title}: ${event.text}`,
      icon: "✦",
    });
  };

  const triggerAiChoiceEvent = async (nextYear) => {
    const choiceContext = `Year: ${nextYear}. Player: ${playerName || "player"} (${
      country || "unknown"
    }). Active world events: ${activeWorldEvents.map((event) => event.title).join(", ") || "none"}.`;
    const aiResponse = await requestOpenAI(
      "You generate AI-native choice events for a life simulation game. Respond only in JSON.",
      `${choiceContext} Create an AI-native choice event. Include title and text. Avoid generalism.`
    );
    const aiEvent = parseJsonResponse(aiResponse);
    const fallback = {
      title: "AI-native choice: campus safety model",
      text: "You decide whether to deploy a dorm safety model that flags late-night walks on a public map.",
    };
    const event = aiEvent && aiEvent.title ? aiEvent : fallback;
    appendLog({
      time: `${nextYear}`,
      title: `${event.title}: ${event.text}`,
      icon: "🧠",
    });
  };

  const advanceYear = async () => {
    const nextAge = age + 1;
    const nextYear = year + 1;
    setAge(nextAge);
    setYear(nextYear);
    setActionsLeft(ACTIONS_PER_YEAR);
    setGrades((prev) => Math.min(100, Math.max(50, prev - 1)));
    setHealth((prev) => Math.min(100, Math.max(40, prev - 1)));
    await triggerLifeEvent(nextAge, nextYear);
    resolveWorldEvents(nextYear);
    await triggerWorldEvent(nextYear);
    if (nextYear % 4 === 0) {
      await triggerAiChoiceEvent(nextYear);
    }
    if (nextAge === 17) {
      appendLog({
        time: `${nextYear}`,
        title: "College applications open. Build your list.",
        icon: "🎓",
      });
    }
    if (nextAge === 18) {
      const decisions = collegeApps.map((college) => ({
        ...college,
        accepted: Math.random() < parseFloat(college.acceptanceRate) / 100,
      }));
      setCollegeDecisions(decisions);
      appendLog({
        time: `${nextYear}`,
        title: "College decisions arrive.",
        icon: "📬",
      });
    }
  };

  const handleAction = (handler, counted = true) => {
    if (counted && actionsLeft <= 0) return;
    if (counted) {
      setActionsLeft((prev) => Math.max(0, prev - 1));
    }
    handler();
  };

  const handleGradeAction = (delta, label, counted = true) => {
    setGrades((prev) => Math.min(100, Math.max(0, prev + delta)));
    appendLog({
      time: `${year}`,
      title: `${label}. Grades ${delta > 0 ? "rise" : "dip"}.`,
      icon: delta > 0 ? "📈" : "📉",
    });
    if (counted) {
      setActionsLeft((prev) => Math.max(0, prev - 1));
    }
  };

  const handleApplyCollege = (college) => {
    if (collegeApps.some((item) => item.name === college.name)) return;
    setCollegeApps((prev) => [...prev, college]);
    appendLog({
      time: `${year}`,
      title: `Applied to ${college.name} (${college.acceptanceRate} acceptance).`,
      icon: "🎓",
    });
  };

  const handleChooseCollege = (college) => {
    setSelectedCollege(college.name);
    setCash((prev) => Math.max(0, prev - 4000));
    appendLog({
      time: `${year}`,
      title: `You commit to ${college.name}.`,
      icon: "🏫",
    });
  };

  const handleRestart = () => {
    setShowRestartConfirm(false);
    setAge(15);
    setYear(2024);
    setCash(1200);
    setGrades(78);
    setHappiness(70);
    setHealth(84);
    setWorldEvents([]);
    setCollegeApps([]);
    setCollegeDecisions([]);
    setSelectedCollege("");
    setActionsLeft(ACTIONS_PER_YEAR);
    setPhoneOpen(false);
    setActiveApp("activities");
    setEarthTab("forbes");
    setLogEntries([
      { time: "2023", title: "You joined the robotics club and built a line-following bot.", icon: "⚙" },
      { time: "2024", title: "Life begins in editing mode with a full year ahead.", icon: "✦" },
    ]);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setCountry("");
    setPlayerName("");
    setHasPlayerName(false);
    localStorage.removeItem("lifeSimProfile");
  };

  const activeWorldEvents = useMemo(() => worldEvents.filter((event) => event.status === "active"), [
    worldEvents,
  ]);

  const normalizedLogEntries = useMemo(() => {
    const padding = Array.from({ length: Math.max(0, LOG_SIZE - logEntries.length) }, () => ({
      time: "",
      title: "",
      icon: "",
    }));
    return [...logEntries, ...padding];
  }, [logEntries]);

  const sectorBoosts = useMemo(() => {
    return activeWorldEvents.reduce((acc, event) => {
      if (!event.sector) return acc;
      acc[event.sector] = (acc[event.sector] || 1) + 0.05;
      return acc;
    }, {});
  }, [activeWorldEvents]);

  const forbesList = useMemo(() => {
    return baseForbesList
      .map((person) => {
        const sectorBoost = sectorBoosts[person.sector] || 1;
        const volatility = ((year % 7) - 3) * 0.6;
        const worth = Math.max(40, person.worth * sectorBoost + volatility);
        return { ...person, worth: `$${worth.toFixed(0)}B` };
      })
      .sort((a, b) => parseFloat(b.worth.replace("$", "")) - parseFloat(a.worth.replace("$", "")));
  }, [baseForbesList, sectorBoosts, year]);

  const companyList = useMemo(() => {
    return baseCompanies
      .map((company) => {
        const sectorBoost = sectorBoosts[company.sector] || 1;
        const volatility = ((year % 5) - 2) * 30;
        const value = Math.max(500, company.value * sectorBoost + volatility);
        return { ...company, value: `$${value.toFixed(0)}B` };
      })
      .sort((a, b) => parseFloat(b.value.replace("$", "")) - parseFloat(a.value.replace("$", "")));
  }, [baseCompanies, sectorBoosts, year]);

  const presidents = useMemo(() => {
    const pick = (list, offset) => list[(year + offset) % list.length];
    return [
      { country: "USA", leader: pick(presidentPools.usa, 1) },
      { country: "Canada", leader: pick(presidentPools.canada, 2) },
      { country: "India", leader: pick(presidentPools.india, 3) },
      { country: "Germany", leader: pick(presidentPools.germany, 4) },
      { country: "UK", leader: pick(presidentPools.uk, 5) },
      { country: "Russia", leader: pick(presidentPools.russia, 6) },
      { country: "China", leader: pick(presidentPools.china, 7) },
    ];
  }, [year]);

  const newsStories = useMemo(() => {
    const baseNews = activeWorldEvents.map((event) => ({
      title: event.title,
      detail: event.impact,
    }));
    const filler = [
      {
        title: "Global drone shipping pact",
        detail: "12 ports sign a corridor agreement to speed up autonomous freight.",
      },
      {
        title: "Breakthrough battery recall",
        detail: "Solid-state packs pulled after rapid thermal failures in Seoul tests.",
      },
      {
        title: "Cybersecurity outage",
        detail: "A zero-day in a hospital network delays surgeries across three states.",
      },
      {
        title: "Record satellite launch",
        detail: "A 120-satellite launch expands rural connectivity across the Andes.",
      },
    ];
    const combined = [...baseNews, ...filler].slice(0, 5);
    return combined;
  }, [activeWorldEvents]);

  return (
    <div className="stage">
      {!hasPlayerName && (
        <div className="modal-overlay is-visible" role="dialog" aria-modal="true">
          <form className="name-card modal-card" onSubmit={handleSubmit}>
            <div className="name-title">Choose an alias</div>
            <p className="name-instructions">
              Enter a first, middle, and last name that is <strong>not</strong> your real name.
            </p>
            <div className="name-fields">
              <label className="field">
                <span>First name</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="e.g. Nova"
                  required
                />
              </label>
              <label className="field">
                <span>Middle name</span>
                <input
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  placeholder="e.g. Orion"
                />
              </label>
              <label className="field">
                <span>Last name</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="e.g. Vale"
                  required
                />
              </label>
              <label className="field">
                <span>Country of origin</span>
                <select value={country} onChange={(e) => setCountry(e.target.value)} required>
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Japan">Japan</option>
                  <option value="Australia">Australia</option>
                </select>
              </label>
            </div>
            <button type="submit" className="name-submit">
              Enter
            </button>
          </form>
        </div>
      )}

      {showRestartConfirm && (
        <div className="modal-overlay is-visible" role="dialog" aria-modal="true">
          <div className="modal-card confirm-card">
            <div className="modal-title">Restart life?</div>
            <p className="modal-text">Are you sure you want to reset your life timeline?</p>
            <div className="modal-actions">
              <button className="modal-btn ghost" onClick={() => setShowRestartConfirm(false)}>
                No
              </button>
              <button className="modal-btn" onClick={handleRestart}>
                Yes, restart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="background-squares" aria-hidden="true">
        {squareConfigs.map((sq, index) => (
          <span
            key={index}
            className="square"
            style={{
              width: `${sq.size}px`,
              height: `${sq.size}px`,
              left: sq.left,
              top: sq.top,
              animationDuration: `${sq.duration}s`,
              animationDelay: `${sq.delay}s`,
              opacity: sq.opacity,
              "--moveX": `${sq.moveX}px`,
              "--moveY": `${sq.moveY}px`,
            }}
          />
        ))}
      </div>

      <div className="app">
        <header className="top-bar">
          <span className="meta">{stats.developedBy}</span>
          <span className="cash">{stats.cash}</span>
          <span className="date">{stats.date}</span>
        </header>

        <main className="content">
          <section className="status-card">
            <div>
              <div className="status-label">EDITING MODE</div>
              <div className="status-value">STATS</div>
            </div>
            <div className="status-actions">
              <button className="status-btn" onClick={advanceYear}>
                Advance year
              </button>
              <button className="status-btn ghost" onClick={() => setShowRestartConfirm(true)}>
                Restart life
              </button>
            </div>
            <div className="status-actions">
              <div className="status-pill">
                Actions left this year: <strong>{actionsLeft}</strong>
              </div>
            </div>
          </section>

          <section className="log-panel">
            <div className="panel-title">Event log</div>
            {normalizedLogEntries.map((entry, index) => (
              <div key={index} className={`log-entry ${entry.title ? "" : "is-empty"}`}>
                <div className="log-time">{entry.time}</div>
                <div className="log-title">{entry.title}</div>
                <div className="log-icon">{entry.icon}</div>
              </div>
            ))}
          </section>

          <button className="phone-bar" onClick={() => setPhoneOpen(true)}>
            <span>PHONE</span>
            <span className="phone-toggle">Open</span>
          </button>

          {phoneOpen && (
            <div className="phone-modal modal-overlay is-visible" role="dialog" aria-modal="true">
              <section className="phone-device">
                <div className="phone-status">
                  <span>{year}</span>
                  <span className="phone-notch" />
                  <span>{age} yrs</span>
                </div>
                <div className="phone-header">
                  <div>
                    <div className="phone-title">Life OS</div>
                    <div className="phone-subtitle">Apps & actions</div>
                  </div>
                  <button className="phone-close" onClick={() => setPhoneOpen(false)}>
                    Close
                  </button>
                </div>
                <div className="phone-apps">
                  {[
                    { id: "activities", label: "Activities", icon: "🎯" },
                    { id: "career", label: "Career", icon: "💼" },
                    { id: "social", label: "Social", icon: "🫶" },
                    { id: "health", label: "Health", icon: "💪" },
                    { id: "earth", label: "Earth", icon: "🌍" },
                  ].map((app) => (
                    <button
                      key={app.id}
                      className={`app-tile ${activeApp === app.id ? "active" : ""}`}
                      onClick={() => setActiveApp(app.id)}
                    >
                      <span className="app-icon">{app.icon}</span>
                      <span className="app-label">{app.label}</span>
                    </button>
                  ))}
                </div>
                <div className="phone-content">
                  {activeApp === "activities" && (
                    <div className="phone-panel activities-panel">
                      <h3>Activities</h3>
                      <p>Pick actions that shape your future. Each choice nudges your stats.</p>
                      <div className="diagram activity-diagram" aria-hidden="true">
                        <svg viewBox="0 0 120 60" role="presentation">
                          <path d="M5 50 C35 10, 85 10, 115 50" />
                          <circle cx="18" cy="44" r="4" />
                          <circle cx="60" cy="20" r="5" />
                          <circle cx="102" cy="44" r="4" />
                        </svg>
                      </div>
                      <div className="action-grid">
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() => handleGradeAction(3, "Studied late")}
                        >
                          Study late
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() => handleGradeAction(-2, "Skipped homework")}
                        >
                          Skip homework
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHappiness((prev) => Math.min(100, prev + 4));
                              appendLog({
                                time: `${year}`,
                                title: "Went to a concert at a downtown amphitheater.",
                                icon: "🎵",
                              });
                            })
                          }
                        >
                          Go to concert
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setCash((prev) => prev + 150);
                              appendLog({
                                time: `${year}`,
                                title: "Worked a late-night shift at a 24-hour diner.",
                                icon: "💵",
                              });
                            })
                          }
                        >
                          Part-time shift
                        </button>
                      </div>
                    </div>
                  )}
                  {activeApp === "career" && (
                    <div className="phone-panel career-panel">
                      <h3>Career</h3>
                      <div className="diagram career-diagram" aria-hidden="true">
                        <svg viewBox="0 0 120 60" role="presentation">
                          <rect x="8" y="40" width="20" height="12" rx="2" />
                          <rect x="40" y="32" width="20" height="20" rx="2" />
                          <rect x="72" y="24" width="20" height="28" rx="2" />
                          <path d="M10 12 H30 M50 8 H70 M90 4 H110" />
                        </svg>
                      </div>
                      <div className="career-block">
                        <div className="career-title">Student</div>
                        <div className="career-row">
                          <span>Grades</span>
                          <div className="progress">
                            <div className="progress-bar" style={{ width: `${grades}%` }} />
                          </div>
                          <span>{grades}%</span>
                        </div>
                        <div className="career-row">
                          <span>Focus</span>
                          <span>STEM Track</span>
                        </div>
                        <div className="career-actions">
                          <button onClick={() => handleGradeAction(5, "Took extra tutoring", false)}>
                            Tutoring
                          </button>
                          <button onClick={() => handleGradeAction(-4, "Partied all weekend", false)}>
                            Party weekend
                          </button>
                          <button onClick={advanceYear}>Advance year</button>
                        </div>
                      </div>
                      {age === 17 && (
                        <div className="career-block">
                          <h4>College applications</h4>
                          <p>Select schools to apply to this year.</p>
                          <div className="college-list">
                            {collegeOptions.map((college) => (
                              <div key={college.name} className="college-item">
                                <div>
                                  <div className="college-name">{college.name}</div>
                                  <div className="college-meta">
                                    Acceptance {college.acceptanceRate} · {college.focus}
                                  </div>
                                </div>
                                <button onClick={() => handleApplyCollege(college)}>Apply</button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {age >= 18 && (
                        <div className="career-block">
                          <h4>College decisions</h4>
                          {collegeDecisions.length === 0 && (
                            <p>Decisions will arrive after you apply at age 17.</p>
                          )}
                          {collegeDecisions.length > 0 && (
                            <div className="college-list">
                              {collegeDecisions.map((college) => (
                                <div key={college.name} className="college-item">
                                  <div>
                                    <div className="college-name">{college.name}</div>
                                    <div className="college-meta">
                                      {college.accepted ? "Accepted" : "Rejected"} · {college.focus}
                                    </div>
                                  </div>
                                  {college.accepted && (
                                    <button onClick={() => handleChooseCollege(college)}>
                                      {selectedCollege === college.name ? "Chosen" : "Choose"}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  {activeApp === "social" && (
                    <div className="phone-panel social-panel">
                      <h3>Social</h3>
                      <p>Build relationships that stick. Positive bonds unlock more events.</p>
                      <div className="diagram social-diagram" aria-hidden="true">
                        <svg viewBox="0 0 120 60" role="presentation">
                          <circle cx="20" cy="30" r="8" />
                          <circle cx="60" cy="14" r="7" />
                          <circle cx="96" cy="34" r="9" />
                          <path d="M28 28 L52 18 L87 32" />
                        </svg>
                      </div>
                      <div className="action-grid">
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHappiness((prev) => Math.min(100, prev + 3));
                              appendLog({
                                time: `${year}`,
                                title: "Had lunch with friends at the campus food truck court.",
                                icon: "🫶",
                              });
                            })
                          }
                        >
                          Meet friends
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHappiness((prev) => Math.max(0, prev - 2));
                              appendLog({
                                time: `${year}`,
                                title: "Argument with a sibling over rent payments.",
                                icon: "💬",
                              });
                            })
                          }
                        >
                          Family tension
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHappiness((prev) => Math.min(100, prev + 4));
                              appendLog({
                                time: `${year}`,
                                title: "Volunteered at a community fridge on Maple Street.",
                                icon: "🤝",
                              });
                            })
                          }
                        >
                          Volunteer
                        </button>
                      </div>
                    </div>
                  )}
                  {activeApp === "health" && (
                    <div className="phone-panel health-panel">
                      <h3>Health</h3>
                      <p>Stay balanced to avoid long-term penalties.</p>
                      <div className="diagram brain-diagram" aria-hidden="true">
                        <svg viewBox="0 0 120 70" role="presentation">
                          <path
                            d="M35 55 C18 55, 10 38, 18 28 C8 16, 20 6, 34 12 C40 2, 56 2, 60 14 C72 10, 88 22, 78 34 C90 42, 78 60, 60 56 C54 68, 38 66, 35 55 Z"
                          />
                          <path d="M38 28 C44 18, 58 18, 62 30" />
                          <path d="M32 40 C40 36, 46 40, 52 46" />
                          <path d="M56 40 C64 34, 72 36, 76 44" />
                        </svg>
                      </div>
                      <div className="health-stats">
                        <div>
                          <span>Health</span>
                          <strong>{health}%</strong>
                        </div>
                        <div>
                          <span>Happiness</span>
                          <strong>{happiness}%</strong>
                        </div>
                      </div>
                      <div className="action-grid">
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHealth((prev) => Math.min(100, prev + 5));
                              appendLog({
                                time: `${year}`,
                                title: "Completed a 5K training loop along the river trail.",
                                icon: "💪",
                              });
                            })
                          }
                        >
                          Workout
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHealth((prev) => Math.max(0, prev - 4));
                              appendLog({
                                time: `${year}`,
                                title: "Ate fast food all week during finals crunch.",
                                icon: "🍔",
                              });
                            })
                          }
                        >
                          Eat junk
                        </button>
                        <button
                          disabled={actionsLeft <= 0}
                          onClick={() =>
                            handleAction(() => {
                              setHappiness((prev) => Math.min(100, prev + 2));
                              appendLog({
                                time: `${year}`,
                                title: "Took a rest day and streamed a full docu-series.",
                                icon: "🛌",
                              });
                            })
                          }
                        >
                          Rest day
                        </button>
                      </div>
                    </div>
                  )}
                  {activeApp === "earth" && (
                    <div className="phone-panel earth-panel">
                      <h3>Earth</h3>
                      <div className="diagram earth-diagram" aria-hidden="true">
                        <svg viewBox="0 0 120 60" role="presentation">
                          <circle cx="60" cy="30" r="20" />
                          <path d="M48 30 C52 22, 68 20, 72 30" />
                          <path d="M44 34 C52 40, 66 42, 74 32" />
                          <path d="M60 10 V50" />
                        </svg>
                      </div>
                      <div className="earth-tabs">
                        {[
                          { id: "forbes", label: "Forbes" },
                          { id: "companies", label: "Companies" },
                          { id: "presidents", label: "Presidents" },
                          { id: "news", label: "News" },
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            className={`earth-tab ${earthTab === tab.id ? "active" : ""}`}
                            onClick={() => setEarthTab(tab.id)}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                      {earthTab === "forbes" && (
                        <div className="earth-list">
                          {forbesList.map((person, index) => (
                            <div key={person.name} className="earth-item">
                              <div className="earth-rank">#{index + 1}</div>
                              <div>
                                <div className="earth-name">{person.name}</div>
                                <div className="earth-meta">{person.company}</div>
                              </div>
                              <div className="earth-worth">{person.worth}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {earthTab === "companies" && (
                        <div className="earth-list">
                          {companyList.map((company, index) => (
                            <div key={company.name} className="earth-item">
                              <div className="earth-rank">#{index + 1}</div>
                              <div>
                                <div className="earth-name">{company.name}</div>
                                <div className="earth-meta">{company.sector.toUpperCase()}</div>
                              </div>
                              <div className="earth-worth">{company.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {earthTab === "presidents" && (
                        <div className="earth-list">
                          {presidents.map((leader) => (
                            <div key={leader.country} className="earth-item">
                              <div className="earth-rank">★</div>
                              <div>
                                <div className="earth-name">{leader.leader}</div>
                                <div className="earth-meta">{leader.country}</div>
                              </div>
                              <div className="earth-worth">In office</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {earthTab === "news" && (
                        <div className="earth-list">
                          {newsStories.map((story, index) => (
                            <div key={`${story.title}-${index}`} className="earth-item">
                              <div className="earth-rank">#{index + 1}</div>
                              <div>
                                <div className="earth-name">{story.title}</div>
                                <div className="earth-meta">{story.detail}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>
            </div>
          )}

          <section className="summary-grid">
            <div className="card relationships">
              <div className="card-title">Relationships & possessions</div>
              <div className="mini-list">
                <div>Mom (Close)</div>
                <div>Best friend: Juno (Trusted)</div>
                <div>Mentor: Coach V.</div>
              </div>
              <div className="divider" />
              <div className="mini-list">
                <div>Smartphone</div>
                <div>Gaming laptop</div>
                <div>Used sedan</div>
              </div>
            </div>
            <div className="card age">
              <div className="label">YOU ARE</div>
              <div className="value">{stats.age}</div>
              <div className="label">YEARS OLD</div>
              {selectedCollege && <div className="tag">{selectedCollege}</div>}
            </div>
            <div className="card details">
              <div className="name">{stats.name}</div>
              <div className="stat">
                <span>Origin</span>
                <span>{stats.country}</span>
              </div>
              <div className="stat">
                <span>IQ</span>
                <span>{stats.iq}</span>
              </div>
              <div className="stat">
                <span>Health</span>
                <span>{stats.health}%</span>
              </div>
              <div className="stat">
                <span>Happiness</span>
                <span>{stats.happiness}%</span>
              </div>
              <div className="stat">
                <span>Looks</span>
                <span>{stats.looks}</span>
              </div>
            </div>
            <div className="card world">
              <div className="card-title">World events</div>
              {activeWorldEvents.length === 0 && <div className="muted">No active crises.</div>}
              {activeWorldEvents.map((event) => (
                <div key={event.id} className="world-item">
                  <div className="world-title">{event.title}</div>
                  <div className="world-meta">
                    Year {event.startYear} → {event.endYear}
                  </div>
                  <div className="world-desc">{event.description}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
