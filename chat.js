const input = document.getElementById("userInput");
const chatBody = document.getElementById("chat-body");

input.addEventListener("keypress", async function(e) {
  if (e.key === "Enter") {
    let userText = input.value;

    chatBody.innerHTML += `<p>You: ${userText}</p>`;

    let response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: userText})
    });

    let data = await response.json();
    chatBody.innerHTML += `<p>Bot: ${data.reply}</p>`;

    input.value = "";
  }
});