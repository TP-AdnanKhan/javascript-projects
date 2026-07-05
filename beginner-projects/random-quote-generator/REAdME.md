## 💬 Random Quote Generator

A dynamic web application that automatically serves inspirational quotes from an external API, complete with proper citation formatting.

---

### 🚀 Features

- 🔄 Auto-Load: Automatically fetches and displays a random quote right when the page loads
- 🎲 On-Demand Generation: A dedicated button to seamlessly fetch and cycle to a new quote instantly
- 📋 Clean Typography: Elegant presentation featuring quotes wrapped in "" marks with the author's name displayed directly below

---

### 🧠 Approach

- Trigger an initial asynchronous API request immediately on page load to eliminate empty UI states
- Listen for user clicks on the "New Quote" button to trigger subsequent data requests
- Fetch a randomized quote payload using the fetch() API and async/await syntax
- Target specific JSON properties to isolate the quote body text and the author's credentials
- Update the text nodes dynamically, inserting quotation marks around the body content and rendering the author name cleanly underneath

---

### 📚 What I Learned

- Handling window loading workflows to execute JavaScript actions immediately upon page entry
- Asynchronous JavaScript execution using async/await and handling external API payloads
- Targeting and extracting specific deeply nested properties from a parsed JSON data object
- Deep-dive text string manipulation to combine static styling elements (like quotation marks) with dynamic variable data strings

---

### 🛠️ Tech Used

- HTML
- CSS
- JavaScript

---

[⬅️ Back to Beginner Projects](../)
