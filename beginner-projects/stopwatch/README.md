## ⏱️ Stopwatch

A digital stopwatch built to practice JavaScript timing events, continuous UI rendering, and state control.

---

### 🚀 Features

- ⏱️ Core Controls: Start, pause, and reset functionality to manage the clock state
- 🔢 Millisecond Precision: Tracks intervals down to the millisecond level using a recurring execution loop
- 🎨 Complete Display Format: Renders time in a full 00:00:00:000 sequence (Hours, Minutes, Seconds, Milliseconds)

---

### 🧠 Approach

- Set up an active tracking loop using setInterval configured to execute precisely every 10 milliseconds
- Increment a millisecond counter variable step-by-step on every loop cycle
- Apply conditional logic to roll the milliseconds over into seconds, seconds into minutes, and minutes into hours
- Run string padding operations to ensure double-digit layouts for standard time increments and a triple-digit layout for milliseconds

---

### 📚 What I Learned

- Implementing browser timing loops using setInterval and halting them cleanly with clearInterval
- Managing multi-tiered numerical rollovers (handling the mathematical transitions from milliseconds up to hours)
- Managing state toggles to ensure the user cannot break the tracking speed by clicking the "Start" button multiple times
- Analyzing time-accuracy constraints and rendering behaviors within the single-threaded JavaScript runtime ecosystem

---

### 🛠️ Tech Used

- HTML
- CSS
- JavaScript

---

[⬅️ Back to Beginner Projects](../)
