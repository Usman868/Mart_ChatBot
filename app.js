var chatArea = document.getElementById("chatArea");

var typing = document.createElement("div");
typing.className = "typing-indicator";
typing.innerHTML = "<span></span><span></span><span></span>";

var mainOptions = [
  "🛍️ Shop Information",
  "🚚 Delivery Details",
  "📞 Contact Support",
];

function type() {
  chatArea.appendChild(typing);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function firstContent() {
  type();
  setTimeout(function () {
    typing.remove();
    var firstChat = document.createElement("div");
    firstChat.className = "bot-msg";
    firstChat.innerText =
      "👋 Hello! Welcome to Usman Daily Mart 🛍️\nHow can I assist you today?";
    chatArea.appendChild(firstChat);
    showOptions(mainOptions);
  }, 2000);
}
function showOptions(optionsArray) {
  var options = document.createElement("div");
  options.className = "bot-msg";
  for (var i = 0; i < optionsArray.length; i++) {
    var buttons = document.createElement("button");
    buttons.className = "option-btn";
    buttons.setAttribute("onclick", "answer(this)");
    buttons.innerText = optionsArray[i];
    options.appendChild(buttons);
  }
  chatArea.appendChild(options);
  chatArea.scrollTop = chatArea.scrollHeight;
}
firstContent();
function addBotMessage(text) {
  var botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.innerText = text;
  chatArea.appendChild(botMsg);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function answer(event) {
  var userInputValue;

  if (event) {
    // If 'event' exists (for example, a button was clicked)
    userInputValue = event.innerText;
  } else {
    // Otherwise (for example, Enter key was pressed)
    userInputValue = document.getElementById("userInput").value.trim();
  }

  if (userInputValue === "") return;

  // Show user message
  var userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = userInputValue;
  chatArea.appendChild(userMsg);
  chatArea.scrollTop = chatArea.scrollHeight;
  document.getElementById("userInput").value = "";

  // Show typing
  type();

  setTimeout(function () {
    typing.remove();

    // SHOP INFORMATION
    if (
      userInputValue.includes("Shop Information") ||
      userInputValue == 1
    ) {
      addBotMessage(
        "🏪 Welcome to Usman Daily Mart! We offer all daily essentials — sugar, daal, chawal, tea, and more — at great prices!"
      );
      setTimeout(function () {
        addBotMessage("Please choose an option below:");
        showOptions([
          "🔙 Back to Main Menu",
          "🚚 Delivery Details",
          "💳 Payment Options",
          "🛒 Place Order",
        ]);
      }, 1000);
    }

    // PLACE ORDER
    else if (userInputValue.includes("Place Order") ||
     userInputValue == 4
    ) {
      addBotMessage("Here are some available items today:");
      addBotMessage(
        "1️⃣ Sugar - Rs. 120/kg\n2️⃣ Daal Masoor - Rs. 220/kg\n3️⃣ Chawal - Rs. 180/kg\n4️⃣ Tea - Rs. 950/kg\n5️⃣ Cooking Oil - Rs. 570/L"
      );
      addBotMessage("Please type the item name you want to order.");
    }

    // ITEM SELECTION
    else if (
      userInputValue.toLowerCase().includes("sugar") ||
      userInputValue.toLowerCase().includes("daal")  ||
      userInputValue.toLowerCase().includes("chawal")||
      userInputValue.toLowerCase().includes("tea")   ||
      userInputValue.toLowerCase().includes("oil")
      )
    {
      addBotMessage(
        'How many kilograms or liters of "' +
          userInputValue.toLowerCase() +
          '" would you like to order?'
      );
    }

    // DELIVERY DETAILS
    else if (
      userInputValue.includes("Delivery Details") ||
      userInputValue == 2
    ) {
      addBotMessage("🚚 We offer same-day home delivery within the city!");
      setTimeout(function () {
        addBotMessage(
          "Delivery is free for orders above Rs. 1000. For smaller orders, Rs. 100 delivery fee applies."
        );
        showOptions([
          "🔙 Back to Main Menu",
          "💳 Payment Options",
          "🛒 Place Order",
        ]);
      }, 1000);
    }

    // CONTACT SUPPORT
    else if (
      userInputValue.includes("Contact Support") ||
      userInputValue == 3
    ) {
      addBotMessage(
        "📞 You can reach our support team between 9 AM and 10 PM."
      );
      setTimeout(function () {
        addBotMessage("Would you like to contact us via Call or WhatsApp?");
      }, 800);
    }

    // CONTACT CHOICE
    else if (userInputValue.toLowerCase().includes("whatsapp")) {
      addBotMessage(
        "💬 Great! Message us at +92-343-3484779 — we’ll reply instantly!"
      );
    } else if (userInputValue.toLowerCase().includes("call")) {
      addBotMessage(
        "📞 You can call us directly at +92-343-3484779 during business hours."
      );
    }

    // BACK TO MAIN MENU
    else if (userInputValue.includes("Back")) {
      addBotMessage("Returning to main menu 👇");
      showOptions(mainOptions);
    }

    // PAYMENT OPTION
    else if (userInputValue.includes("Payment")) {
      addBotMessage(
        "💳 You can pay via Cash on Delivery, Bank Transfer, or EasyPaisa/JazzCash."
      );
      setTimeout(function () {
        showOptions(["🔙 Back to Main Menu", "🛒 Place Order"]);
      }, 1000);
    }

    // UNKNOWN
    else {
      addBotMessage(
        "🤔 Sorry, I didn’t understand that. Please select an option below:"
      );
      showOptions(mainOptions);
    }
  }, 1500);
}

var userEnterValue = document.getElementById("userInput");
userEnterValue.addEventListener("keydown", 
function enterKeyHandler(event) {
  if (event.key === "Enter") {
    answer();
  }
}
)
