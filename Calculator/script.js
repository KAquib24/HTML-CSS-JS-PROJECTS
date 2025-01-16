const input = document.getElementById("in");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const value = this.textContent; 

    if (value === "AC") {
      input.value = "";
    } 
    else if (value === "DEL") {
      input.value = input.value.slice(0, -1);
    } 
    else if (value === "=") {
      try {
        input.value = eval(input.value.replace("x", "*").replace(/%/g, "/100"));
      } catch (error) {
        input.value = "Error";
      }
    } else {
      input.value += value;
    }
  });
});
