let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screen_value = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log('Button Text is', buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screen_value += buttonText;
      screen.value = screen_value;
    } else if (buttonText == "!") {
      buttonText = "!";
      screen_value += buttonText;
      screen.value = screen_value;
    } else if (buttonText == "=" && screen_value.includes("!")) {
      const factorial = () => {
        let array = screen_value.split("!");
        let num = array[0];
        console.log(num);
        for (let i = num - 1; i > 0; i--) {
          num = num * i;
        }
        return num;
      };
      screen.value = factorial();
    } else if (buttonText == "=") {
      screen.value = eval(screen_value);
    } else if (buttonText == "C") {
      screen_value = "";
      screen.value = screen_value;
    } else {
      screen_value += buttonText;
      screen.value = screen_value;
    }
  });
}
