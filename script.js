const App = () => {
  const { useState, useEffect, useMemo } = React;

  const squareConfigs = [
    { size: 6, left: "4%", top: "10%", duration: 22, delay: 0, moveX: 18, moveY: -26, opacity: 0.32 },
    { size: 5, left: "16%", top: "22%", duration: 19, delay: -4, moveX: -22, moveY: 16, opacity: 0.25 },
    { size: 8, left: "32%", top: "14%", duration: 26, delay: -2, moveX: 28, moveY: -18, opacity: 0.28 },
    { size: 4, left: "52%", top: "20%", duration: 18, delay: -6, moveX: -20, moveY: 24, opacity: 0.22 },
    { size: 6, left: "68%", top: "12%", duration: 21, delay: -8, moveX: 24, moveY: -20, opacity: 0.3 },
    { size: 5, left: "84%", top: "28%", duration: 20, delay: -10, moveX: -16, moveY: 22, opacity: 0.2 },
    { size: 7, left: "10%", top: "46%", duration: 24, delay: -3, moveX: 22, moveY: -28, opacity: 0.24 },
    { size: 5, left: "26%", top: "50%", duration: 19, delay: -7, moveX: -18, moveY: 20, opacity: 0.2 },
    { size: 8, left: "42%", top: "44%", duration: 23, delay: -1, moveX: 26, moveY: -22, opacity: 0.28 },
    { size: 4, left: "60%", top: "38%", duration: 18, delay: -9, moveX: -22, moveY: 18, opacity: 0.18 },
    { size: 6, left: "76%", top: "50%", duration: 25, delay: -2, moveX: 20, moveY: -24, opacity: 0.3 },
    { size: 5, left: "90%", top: "42%", duration: 20, delay: -5, moveX: -18, moveY: 16, opacity: 0.2 },
    { size: 4, left: "14%", top: "68%", duration: 22, delay: -2, moveX: 20, moveY: -18, opacity: 0.2 },
    { size: 7, left: "30%", top: "70%", duration: 27, delay: -5, moveX: -24, moveY: 26, opacity: 0.26 },
    { size: 5, left: "48%", top: "74%", duration: 19, delay: -7, moveX: 18, moveY: -20, opacity: 0.22 },
    { size: 6, left: "64%", top: "66%", duration: 23, delay: -4, moveX: -22, moveY: 22, opacity: 0.24 },
    { size: 4, left: "80%", top: "72%", duration: 21, delay: -6, moveX: 24, moveY: -16, opacity: 0.18 },
    { size: 6, left: "18%", top: "86%", duration: 24, delay: -8, moveX: -20, moveY: 24, opacity: 0.22 },
    { size: 5, left: "40%", top: "90%", duration: 19, delay: -3, moveX: 22, moveY: -26, opacity: 0.2 },
    { size: 7, left: "70%", top: "86%", duration: 26, delay: -5, moveX: -18, moveY: 20, opacity: 0.24 },
  ];

  const forbesList = [
    { name: "Bernard Arnault", worth: "$211B", company: "LVMH" },
    { name: "Elon Musk", worth: "$198B", company: "Tesla, SpaceX" },
    { name: "Jeff Bezos", worth: "$193B", company: "Amazon" },
    { name: "Larry Ellison", worth: "$141B", company: "Oracle" },
    { name: "Mark Zuckerberg", worth: "$134B", company: "Meta" },
  ];

  const collegeOptions = [
    { name: "MIT", acceptanceRate: "4%", focus: "STEM" },
    { name: "Stanford", acceptanceRate: "3%", focus: "Entrepreneurship" },
    { name: "UCLA", acceptanceRate: "9%", focus: "Research" },
    { name: "NYU", acceptanceRate: "12%", focus: "Business" },
    { name: "State University", acceptanceRate: "48%", focus: "Public" },
  ];

  const worldEventTemplates = [
    {
      title: "Global Energy Shock",
      description: "Fuel costs spike and supply chains struggle.",
      impact: "Inflation rises, wages lag behind.",
    },
    {
      title: "Regional Conflict",
      description: "A tense standoff escalates into war.",
      impact: "Markets dip, travel becomes risky.",
    },
    {
      title: "Tech Breakthrough",
      description: "A new AI platform reshapes industries.",
      impact: "Productivity jumps, some jobs fade fast.",
    },
    {
      title: "Public Health Crisis",
      description: "A fast-moving illness strains hospitals.",
      impact: "Healthcare priorities shift worldwide.",
    },
  ];

  const lifeEventPools = {
    teen: [
      {
        title: "Side hustle sparks",
        text: "You start flipping gadgets online.",
        cash: 240,
        happiness: 3,
      },
      {
        title: "School rivalry",
        text: "A rival pushes you to improve your grades.",
        grades: 4,
        happiness: -1,
      },
      {
        title: "Family move",
        text: "Your family relocates, forcing a new start.",
        happiness: -2,
      },
    ],
    adult: [
      {
        title: "Job opportunity",
        text: "A recruiter reaches out for a role.",
        cash: 1200,
        happiness: 2,
      },
      {
        title: "Mentor found",
        text: "A seasoned pro offers to guide you.",
        happiness: 4,
      },
      {
        title: "Unexpected expense",
        text: "A surprise bill hits your budget.",
        cash: -800,
        happiness: -2,
      },
    ],
  };

  const initialName = () => localStorage.getItem("lifeSimAlias") || "";
  const storedAlias = initialName();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [playerName, setPlayerName] = useState(storedAlias);
  const [hasPlayerName, setHasPlayerName] = useState(Boolean(storedAlias));

  const [age, setAge] = useState(16);
  const [year, setYear] = useState(2024);
  const [cash, setCash] = useState(1200);
  const [grades, setGrades] = useState(78);
  const [happiness, setHappiness] = useState(70);
  const [health, setHealth] = useState(84);
  const [iq] = useState(106);
  const [looks] = useState("8/10");
  const [logEntries, setLogEntries] = useState([
    { time: "Age 16", title: "Life begins in editing mode.", icon: "✦" },
    { time: "Age 15", title: "You joined the robotics club.", icon: "⚙" },
  ]);
  const [worldEvents, setWorldEvents] = useState([]);
  const [collegeApps, setCollegeApps] = useState([]);
  const [collegeDecisions, setCollegeDecisions] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [activeApp, setActiveApp] = useState("activities");
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);

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
  };

  useEffect(() => {
    if (!playerName) return;
    setHasPlayerName(true);
    localStorage.setItem("lifeSimAlias", playerName);
  }, [playerName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const safeFirst = firstName.trim();
    const safeLast = lastName.trim();
    if (!safeFirst || !safeLast) return;
    setPlayerName(`${safeFirst} ${safeLast}`);
  };

  const appendLog = (entry) => {
    setLogEntries((prev) => [entry, ...prev].slice(0, 6));
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
            time: `Year ${nextYear}`,
            title: `${event.title} resolved after ${event.duration} years.`,
            icon: "✓",
          });
        });
      return updated.filter((event) => event.status !== "resolved");
    });
  };

  const triggerWorldEvent = (nextYear) => {
    if (nextYear % 3 !== 0) return;
    const template = worldEventTemplates[Math.floor(Math.random() * worldEventTemplates.length)];
    const duration = 2 + Math.floor(Math.random() * 3);
    const newEvent = {
      id: `${nextYear}-${template.title}`,
      title: template.title,
      description: template.description,
      impact: template.impact,
      startYear: nextYear,
      endYear: nextYear + duration,
      duration,
      status: "active",
    };
    setWorldEvents((prev) => [...prev, newEvent]);
    appendLog({
      time: `Year ${nextYear}`,
      title: `${template.title} begins. ${template.impact}`,
      icon: "⚡",
    });
  };

  const triggerLifeEvent = (nextAge) => {
    const pool = nextAge < 18 ? lifeEventPools.teen : lifeEventPools.adult;
    const event = pool[Math.floor(Math.random() * pool.length)];
    if (!event) return;
    if (event.cash) setCash((prev) => Math.max(0, prev + event.cash));
    if (event.happiness) setHappiness((prev) => Math.min(100, Math.max(0, prev + event.happiness)));
    if (event.grades) setGrades((prev) => Math.min(100, Math.max(0, prev + event.grades)));
    appendLog({
      time: `Age ${nextAge}`,
      title: `${event.title}: ${event.text}`,
      icon: "✦",
    });
  };

  const advanceYear = () => {
    const nextAge = age + 1;
    const nextYear = year + 1;
    setAge(nextAge);
    setYear(nextYear);
    setGrades((prev) => Math.min(100, Math.max(50, prev - 1)));
    setHealth((prev) => Math.min(100, Math.max(40, prev - 1)));
    triggerLifeEvent(nextAge);
    resolveWorldEvents(nextYear);
    triggerWorldEvent(nextYear);
    if (nextAge === 17) {
      appendLog({
        time: `Age ${nextAge}`,
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
        time: `Age ${nextAge}`,
        title: "College decisions arrive.",
        icon: "📬",
      });
    }
  };

  const handleGradeAction = (delta, label) => {
    setGrades((prev) => Math.min(100, Math.max(0, prev + delta)));
    appendLog({
      time: `Age ${age}`,
      title: `${label}. Grades ${delta > 0 ? "rise" : "dip"}.`,
      icon: delta > 0 ? "📈" : "📉",
    });
  };

  const handleApplyCollege = (college) => {
    if (collegeApps.some((item) => item.name === college.name)) return;
    setCollegeApps((prev) => [...prev, college]);
    appendLog({
      time: `Age ${age}`,
      title: `Applied to ${college.name} (${college.acceptanceRate} acceptance).`,
      icon: "🎓",
    });
  };

  const handleChooseCollege = (college) => {
    setSelectedCollege(college.name);
    setCash((prev) => Math.max(0, prev - 4000));
    appendLog({
      time: `Age ${age}`,
      title: `You commit to ${college.name}.`,
      icon: "🏫",
    });
  };

  const handleRestart = () => {
    setShowRestartConfirm(false);
    setAge(16);
    setYear(2024);
    setCash(1200);
    setGrades(78);
    setHappiness(70);
    setHealth(84);
    setWorldEvents([]);
    setCollegeApps([]);
    setCollegeDecisions([]);
    setSelectedCollege("");
    setLogEntries([
      { time: "Age 16", title: "Life begins in editing mode.", icon: "✦" },
      { time: "Age 15", title: "You joined the robotics club.", icon: "⚙" },
    ]);
  };

  const activeWorldEvents = useMemo(() => worldEvents.filter((event) => event.status === "active"), [
    worldEvents,
  ]);

  return (
    <div className="stage">
      {!hasPlayerName && (
        <div className="modal-overlay is-visible" role="dialog" aria-modal="true">
          <form className="name-card modal-card" onSubmit={handleSubmit}>
            <div className="name-title">Choose an alias</div>
            <p className="name-instructions">
              Enter a first and last name that is <strong>not</strong> your real name.
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
                <span>Last name</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="e.g. Vale"
                  required
                />
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
          </section>

          <section className="log-panel">
            <div className="panel-title">Event log</div>
            {logEntries.map((entry, index) => (
              <div key={index} className="log-entry">
                <div className="log-time">{entry.time}</div>
                <div className="log-title">{entry.title}</div>
                <div className="log-icon">{entry.icon}</div>
              </div>
            ))}
          </section>

          <button className="phone-bar" onClick={() => setPhoneOpen((prev) => !prev)}>
            <span>PHONE</span>
            <span className="phone-toggle">{phoneOpen ? "Close" : "Open"}</span>
          </button>

          {phoneOpen && (
            <section className="phone-shell">
              <div className="phone-header">
                <div>
                  <div className="phone-title">Life OS</div>
                  <div className="phone-subtitle">Apps & actions</div>
                </div>
                <div className="phone-time">{age} yrs</div>
              </div>
              <div className="phone-apps">
                {[
                  { id: "activities", label: "Activities" },
                  { id: "career", label: "Career" },
                  { id: "social", label: "Social" },
                  { id: "health", label: "Health" },
                  { id: "earth", label: "Earth" },
                ].map((app) => (
                  <button
                    key={app.id}
                    className={`app-chip ${activeApp === app.id ? "active" : ""}`}
                    onClick={() => setActiveApp(app.id)}
                  >
                    {app.label}
                  </button>
                ))}
              </div>
              <div className="phone-content">
                {activeApp === "activities" && (
                  <div className="phone-panel">
                    <h3>Activities</h3>
                    <p>Pick actions that shape your future. Each choice nudges your stats.</p>
                    <div className="action-grid">
                      <button onClick={() => handleGradeAction(3, "Studied late")}>Study late</button>
                      <button onClick={() => handleGradeAction(-2, "Skipped homework")}
                      >Skip homework</button>
                      <button
                        onClick={() => {
                          setHappiness((prev) => Math.min(100, prev + 4));
                          appendLog({ time: `Age ${age}`, title: "Went to a concert.", icon: "🎵" });
                        }}
                      >
                        Go to concert
                      </button>
                      <button
                        onClick={() => {
                          setCash((prev) => prev + 150);
                          appendLog({ time: `Age ${age}`, title: "Worked a part-time shift.", icon: "💵" });
                        }}
                      >
                        Part-time shift
                      </button>
                    </div>
                  </div>
                )}
                {activeApp === "career" && (
                  <div className="phone-panel">
                    <h3>Career</h3>
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
                        <button onClick={() => handleGradeAction(5, "Took extra tutoring")}>Tutoring</button>
                        <button onClick={() => handleGradeAction(-4, "Partied all weekend")}
                        >Party weekend</button>
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
                  <div className="phone-panel">
                    <h3>Social</h3>
                    <p>Build relationships that stick. Positive bonds unlock more events.</p>
                    <div className="action-grid">
                      <button
                        onClick={() => {
                          setHappiness((prev) => Math.min(100, prev + 3));
                          appendLog({ time: `Age ${age}`, title: "Had lunch with friends.", icon: "🫶" });
                        }}
                      >
                        Meet friends
                      </button>
                      <button
                        onClick={() => {
                          setHappiness((prev) => Math.max(0, prev - 2));
                          appendLog({ time: `Age ${age}`, title: "Argument with a sibling.", icon: "💬" });
                        }}
                      >
                        Family tension
                      </button>
                      <button
                        onClick={() => {
                          setHappiness((prev) => Math.min(100, prev + 4));
                          appendLog({ time: `Age ${age}`, title: "Volunteered in the community.", icon: "🤝" });
                        }}
                      >
                        Volunteer
                      </button>
                    </div>
                  </div>
                )}
                {activeApp === "health" && (
                  <div className="phone-panel">
                    <h3>Health</h3>
                    <p>Stay balanced to avoid long-term penalties.</p>
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
                        onClick={() => {
                          setHealth((prev) => Math.min(100, prev + 5));
                          appendLog({ time: `Age ${age}`, title: "Completed a workout streak.", icon: "💪" });
                        }}
                      >
                        Workout
                      </button>
                      <button
                        onClick={() => {
                          setHealth((prev) => Math.max(0, prev - 4));
                          appendLog({ time: `Age ${age}`, title: "Ate fast food all week.", icon: "🍔" });
                        }}
                      >
                        Eat junk
                      </button>
                      <button
                        onClick={() => {
                          setHappiness((prev) => Math.min(100, prev + 2));
                          appendLog({ time: `Age ${age}`, title: "Took a rest day.", icon: "🛌" });
                        }}
                      >
                        Rest day
                      </button>
                    </div>
                  </div>
                )}
                {activeApp === "earth" && (
                  <div className="phone-panel">
                    <h3>Earth</h3>
                    <p>Global snapshot of the richest people (Forbes-style list).</p>
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
                  </div>
                )}
              </div>
            </section>
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
