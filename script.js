function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    userInput.value = "";

    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, "bot");
    }, 500);
}

function addMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("próximo jogo")) {
        return "O próximo jogo da FURIA é contra MIBR, dia 5 de maio às 18h.";
    } else if (message.includes("jogadores") || message.includes("time")) {
        return "Os jogadores da FURIA são: yuurih, KSCERATO, chelo, FalleN e arT.";
    } else if (message.includes("campeonato")) {
        return "A FURIA está disputando a ESL Pro League.";
    } else if (message.includes("história")) {
        return "A FURIA foi fundada em 2017 e rapidamente se tornou referência no cenário mundial.";
    } else {
        return "Desculpe, não entendi. Pergunte sobre 'próximo jogo', 'jogadores', 'campeonato' ou 'história'.";
    }
}