## ✊ Rock, Paper, Scissors 🖐️ (Best of 5)

An intermediate-level implementation of the classic game, upgraded to track match states and display history.

---

### 🚀 Features

- 🏆 Match State Tracking: Plays until a player or computer wins the "Best of 5" rounds
- 📜 Decoupled Tie Logic: Ties are displayed in the current round result but excluded from the match history log to keep data clean
- 🤖 Automated AI computer opponent decisions

---

### 🧠 Approach

- Listen for the player's choice selection
- Generate a randomized computer selection
- Compare inputs to determine the winner of the individual round
- Tie Handler: If it's a tie, update the current round display but bypass the history log
- Decision Handler: If there is a winner, push the result to the history array and increment the score
- Track overall match points and trigger a final win/loss state at 3 points

---

### 📚 What I Learned

- Managing conditional logic to filter out specific game states (ties) from being saved to arrays
- Managing complex application state across multiple independent rounds
- Deep-dive DOM manipulation to render a dynamic list UI without page refreshes

---

### 🛠️ Tech Used

- HTML
- CSS
- JavaScript

---
[⬅️ Back to Intermediate Projects](../)
