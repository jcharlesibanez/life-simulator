const App = () => {
  const { useState, useEffect } = React;

  const squareConfigs = [
    { size: 12, left: "6%", top: "14%", duration: 18, delay: 0, moveX: 26, moveY: -32, opacity: 0.18 },
    { size: 10, left: "24%", top: "22%", duration: 16, delay: -4, moveX: -18, moveY: 28, opacity: 0.12 },
    { size: 14, left: "42%", top: "18%", duration: 20, delay: -2, moveX: 32, moveY: -24, opacity: 0.16 },
    { size: 9, left: "68%", top: "12%", duration: 17, delay: -6, moveX: -24, moveY: 22, opacity: 0.1 },
    { size: 11, left: "82%", top: "26%", duration: 21, delay: -8, moveX: 20, moveY: -20, opacity: 0.14 },
    { size: 8, left: "14%", top: "40%", duration: 15, delay: -10, moveX: -16, moveY: 24, opacity: 0.1 },
    { size: 12, left: "34%", top: "46%", duration: 19, delay: -3, moveX: 22, moveY: -28, opacity: 0.14 },
    { size: 10, left: "58%", top: "44%", duration: 16, delay: -7, moveX: -20, moveY: 26, opacity: 0.12 },
    { size: 13, left: "76%", top: "42%", duration: 18, delay: -1, moveX: 24, moveY: -22, opacity: 0.16 },
    { size: 9, left: "90%", top: "38%", duration: 17, delay: -9, moveX: -18, moveY: 20, opacity: 0.1 },
    { size: 8, left: "10%", top: "64%", duration: 16, delay: -2, moveX: 18, moveY: -22, opacity: 0.08 },
    { size: 12, left: "28%", top: "66%", duration: 21, delay: -5, moveX: -22, moveY: 30, opacity: 0.14 },
    { size: 9, left: "46%", top: "68%", duration: 15, delay: -7, moveX: 20, moveY: -24, opacity: 0.1 },
    { size: 11, left: "62%", top: "62%", duration: 19, delay: -4, moveX: -24, moveY: 26, opacity: 0.12 },
    { size: 10, left: "80%", top: "64%", duration: 18, delay: -6, moveX: 24, moveY: -20, opacity: 0.12 },
    { size: 9, left: "20%", top: "82%", duration: 17, delay: -8, moveX: -20, moveY: 24, opacity: 0.1 },
    { size: 12, left: "50%", top: "84%", duration: 20, delay: -3, moveX: 22, moveY: -26, opacity: 0.14 },
    { size: 8, left: "72%", top: "86%", duration: 16, delay: -5, moveX: -18, moveY: 22, opacity: 0.08 },
  ];

  const logEntries = [
    { time: "8:00 PM", title: "Edwin Mccartney invited you to a party", icon: "0" },
    { time: "7:00 PM", title: "Jeronimo Hubertine called you", icon: "" },
    { time: "6:00 PM", title: "Hang out with Jeronimo Hubertine", icon: "" },
    { time: "5:00 PM", title: "Intellectual Conversation", icon: "*" },
    { time: "4:00 PM", title: "Ran one mile", icon: "" },
  ];

  const initialName = () => localStorage.getItem("lifeSimAlias") || "";
  const storedAlias = initialName();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [playerName, setPlayerName] = useState(storedAlias);
  const [hasPlayerName, setHasPlayerName] = useState(Boolean(storedAlias));

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

  const stats = {
    cash: "$0",
    date: "06-10-2093",
    developedBy: "DEVELOPED BY JONATHAN CHARLES IBANEZ",
    age: 86,
    name: playerName || "Awaiting Alias",
    iq: 106,
    health: 76,
    happiness: 80,
    looks: "9/10",
  };

  return (
    <div className="stage">
      {!hasPlayerName && (
        <div className="name-overlay" role="dialog" aria-modal="true">
          <form className="name-card" onSubmit={handleSubmit}>
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
            <div className="status-label">EDITING MODE</div>
            <div className="status-value">STATS</div>
          </section>

          <section className="log-panel">
            {logEntries.map((entry, index) => (
              <div key={index} className="log-entry">
                <div className="log-time">{entry.time}</div>
                <div className="log-title">{entry.title}</div>
                <div className="log-icon">{entry.icon}</div>
              </div>
            ))}
          </section>

          <section className="summary-grid">
            <div className="card relationships">Relationships</div>
            <div className="card age">
              <div className="label">YOU ARE</div>
              <div className="value">{stats.age}</div>
              <div className="label">YEARS OLD</div>
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
          </section>
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
