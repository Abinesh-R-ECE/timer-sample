import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",  // This makes the container take full screen height
      backgroundColor: "#1a1a1a",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f3f3f3",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgb(255, 255, 255)",
        width: "200px",
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Timer: {time}s</h1>
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsActive(true)}
          >
            Start
          </button>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#dc3545",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsActive(false)}
          >
            Pause
          </button>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsActive(false);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;