// Function To Get Random Lower Case Letter
function getLowerLetter() {
  const min = 97;
  const max = 122;
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

// Function To Get Random Capital Case Letter
function getCapitalLetter() {
  const min = 65;
  const max = 90;
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

// Function To Get Random Number
function getRandomNumber() {
  const min = 0;
  const max = 9;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get Random Id
function getRandomId() {
  let id = "";
  for (let i = 0; i < 5; i++) {
    const choice = Math.ceil(Math.random() * 3);
    if (choice == 1) id += getLowerLetter();
    else if (choice == 2) id += getCapitalLetter();
    else if (choice == 3) id += getRandomNumber();
  }
  id += "-";
  for (let i = 0; i < 5; i++) {
    const choice = Math.ceil(Math.random() * 3);
    if (choice == 1) id += getLowerLetter();
    else if (choice == 2) id += getCapitalLetter();
    else if (choice == 3) id += getRandomNumber();
  }
  id += "-";
  for (let i = 0; i < 5; i++) {
    const choice = Math.ceil(Math.random() * 3);
    if (choice == 1) id += getLowerLetter();
    else if (choice == 2) id += getCapitalLetter();
    else if (choice == 3) id += getRandomNumber();
  }
  return id;
}

export { getRandomId };
