const welcomeMessage = require("./welcomeMessage.json")

function getWelcomeMessage(clientName){

if (!clientName) {
  return welcomeMessage.noNameWelcomeMessage;
} else {
  return welcomeMessage.nameWelcomeMessage.replace("$clientName", clientName);
}
};


module.exports = {
    getWelcomeMessage,
    name: "Thomas"
};