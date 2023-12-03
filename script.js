// function to change thought and choices after choosing a choice

function changeThought(thoughtToChange, choicesToChange) {

  var currentThought = document.querySelector(thoughtToChange);
  var chosenThought = Math.floor(Math.random() * thoughts.length)

  var currentChoices = document.querySelector(choicesToChange);

  currentThought.innerHTML= thoughts[chosenThought].thought;
  currentChoices.innerHTML = "";

  for (let i = 0; i < thoughts[chosenThought].choices.length; i++) {
    var newChoice = document.createElement("button");
    newChoice.innerHTML = thoughts[chosenThought].choices[i];
    newChoice.onclick = function() {changeThought(thoughtToChange, choicesToChange)};
    newChoice.classList.add("thought-container__choice");
    currentChoices.appendChild(newChoice);
  }
  
}

const thoughts = [
  {
    thought: "My friends invited me to go out with them. Should I go?",
    choices: ["Yes", "No"]
  },
  {
    thought: "I have a quiz next week. Do I study now?",
    choices: ["Yes", "No", "Definitely later"]
  },
  {
    thought: "My class starts in a few hours. Do I prepare to leave already?",
    choices: ["Yes", "No", "In a while", "I won't go"]
  },
  {
    thought: "It looks like it's going to rain. What do I do?",
    choices: ["Bring an umbrella", "Don't go to class"]
  },
  {
    thought: "My money is running out...",
    choices: ["Save it for tomorrow", "I think I'll buy one more snack"]
  },
  {
    thought: "I'm close to failing a class...",
    choices: ["I'll study more", "It's okay, one quiz left", "I should ask for help"]
  },
  {
    thought: "My day is free!",
    choices: ["I should study in advance", "I want to go out somewhere", "I'll stay at home and chill"]
  },
  {
    thought: "My notebook is broken. Do I buy a new one?",
    choices: ["Yes", "No", "Not yet, I'll keep using it"]
  },
  {
    thought: "I need to wake up early. When do I sleep?",
    choices: ["Right now. *passes out*", "*stays up to read manga*", "*stays up and spaces out*"]
  },
  {
    thought: "A friend wants me to play with them.",
    choices: ["I can play for a while", "I can't, need to study", "I should do something else"]
  },
  {
    thought: "A friend is inviting me to join them in a competition",
    choices: ["Join them", "Join them (after thinking for ages)", "I am not built for this"]
  },
  {
    thought: "A position is available for an org I'm in",
    choices: ["RUN FOR THE POSITION", "Don't run, too many responsibilities", "Don't run, too nerve-wracking"]
  },
  {
    thought: "I'm invited to a party!",
    choices: ["Join on my own", "Join with my friends", "I won't join"]
  },
  {
    thought: "There's someone I like...",
    choices: ["Talk to them!", "Give them a gift", "Invite them to a cafe"]
  },
  {
    thought: "We need a creative output for a class",
    choices: ["Make some art!", "Put on a show!", "Stick to an essay"]
  },
  {
    thought: "I have an old friend I want to reach out to",
    choices: ["Send them a text", "Invite them to an outing", "Send them a gift"]
  },
  {
    thought: "A presentation is fast approaching...",
    choices: ["Start the script early", "Albert your way through it"]
  },
  {
    thought: "I upset someone...",
    choices: ["Apologize immediately", "Wait for them to cool down"]
  },
  {
    thought: "I feel sick...",
    choices: ["Take medicine immediately", "Just rest for now", "Pretend like everything's fine :)"]
  },
  {
    thought: "There's a difficult project due next week",
    choices: ["Start it now", "Start it one day before haha...!", "Start it never"]
  },
]