## 🔢 Number Guessing Game

An interactive game where the player tries to guess a randomly generated number between 1 and 100 with dynamic hot/cold feedback.

---

### 🚀 Features

- 🎯 Smart Range: Generates a completely random target number from 1 to 100 every game
- 📢 Live Feedback: Displays instant messages telling the player if their guess is "Too High" or "Too Low"
- 📊 Performance Tracking: Keeps a real-time count of total attempts taken
- 🎉 Win Condition: Displays a final success message along with your total attempt count once the correct number is guessed

---

### 🧠 Approach

- Generate a random integer between 1 and 100 when the game starts and initialize the attempt counter to 0
- Capture the user's numeric input upon submission and increment the attempt counter by 1
- Compare the player's guess to the target number using conditional logic:
  - If the guess is lower, display a "Too Low!" message
  - If the guess is higher, display a "Too High!" message
  - If the guess is correct, display the final success message along with the total number of attempts

---

### 📚 What I Learned

- Generating random integers within a specific range using Math.random() and Math.floor()
- Working with conditional logic (if / else if / else blocks) to control game flow based on numeric comparisons
- Managing and updating a numeric state counter (attempts) across multiple user actions
- Converting input string values into numbers to ensure precise mathematical evaluation

---

### 🛠️ Tech Used

- HTML
- CSS
- JavaScript

---

[⬅️ Back to Beginner Projects](../)
