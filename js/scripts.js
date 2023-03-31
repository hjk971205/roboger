//Business Logic
function beep(inputNumber, inputName) {
  if (inputNumber < 1) {
      const paragraph = document.createElement("p");
      paragraph.append("Please enter a number > 0");
      document.body.append(paragraph);
  } else {
      let numberArray = [];
      for (let i = 0; i <= inputNumber; i++) {
        if (i.toString().indexOf("2") !== -1) {
          numberArray.push(" Boop!");  
        } else if (i.toString().indexOf("1") !== -1) {
              numberArray.push(" Beep!");
          } else {
              numberArray.push(i);
          }
      }

      return numberArray;
  }
}

//UI Logic
