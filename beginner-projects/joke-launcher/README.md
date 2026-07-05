## 🚀 Joke Launcher

A fun, highly interactive web application that fetches random jokes from a public API based on user-selected categories.

---

### 🚀 Features

- 🎯 Category Filters: Launch jokes by specific themes including All, Pun, Programming, Christmas, and Spooky
- 🤫 Hidden Punchlines: The punchline is hidden inside a "Hover to Reveal" box to prevent spoilers
- 🌐 Live asynchronous API integration
- 📱 Clean typography designed for quick reading

---

### 🧠 Approach

- Listen for a category selection or button click from the user
- Construct a dynamic API URL based on the selected joke type
- Fetch the joke payload asynchronously using async/await
- Parse the response and separate the joke setup from the delivery/punchline
- Render the setup instantly and inject the punchline securely inside the hover-sensitive UI box

---

### 📚 What I Learned

- Managing external API data requests with query parameters to filter specific joke categories
- Asynchronous JavaScript execution using async/await and the fetch() API
- Using CSS :hover states and transitions to cleanly mask and reveal dynamic content
- Handling API data edge cases (such as single-part jokes vs. two-part setup/punchline jokes)

---

### 🛠️ Tech Used

- HTML
- CSS
- JavaScript

---

[⬅️ Back to Beginner Projects](../)
