let guess;
let min = 1;
let max = 20;

guess = Math.floor(Math.random()*(max - min + 1)) + min;

let running = true;
let attempts = 0;
let answer;

while (running) {
  answer = window.prompt(`Give a number between ${min} - ${max}`);
  answer = Number(answer);

  if (isNaN(answer)) {
    window.alert("Please enter a valid number");
  } else if (answer > 20 || answer < 1) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (answer > guess) {
      window.alert("Too high");
    } else if (answer < guess) {
      window.alert("Too low");
    } else {
      window.alert(
        `correct!. You got ${attempts} attempts to get the correct answer`
      );
      running = false;
    }
  }
}
