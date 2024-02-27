let operator = "+";

document.addEventListener("DOMContentLoaded", (_event) => {
  /// start manipulating the DOM
  //   document.getElementById("addButton").addEventListener("click", (e) => {
  //     /// what would you do after the element is clicked
  //     alert("I got clicked");
  //   });

  //   document.getElementById("subtractButton").addEventListener("click", (e) => {
  //     /// what would you do after the element is clicked
  //     alert("I got clicked");
  //   });

  const allButtons = document.querySelectorAll(".buttons-wrapper button");
  allButtons.forEach((el) => {
    // el.addEventListener("click", function (e) {
    //   console.log(this);
    // });

    const handleButtonClick = (e) => {
      allButtons.forEach((button) => {
        // button.className = "";
        button.classList.remove("selected");
      });
      const buttonClick = e.target;
      buttonClick.classList.add("selected");

      const buttonId = buttonClick.id;
      if (buttonId === "addButton") {
        operator = "+";
      } else if (buttonId === "subtractButton") {
        operator = "-";
      } else if (buttonId === "multiButton") {
        operator = "*";
      } else if (buttonId === "divisionButton") {
        operator = "/";
      }

      document.getElementById("calculate-button").classList.remove("hide");
    };

    el.addEventListener("click", handleButtonClick);
  });

  const calculateButton = document.getElementById("calculate-button");

  const handleCalculate = (e) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*")
      result = num1 * num2;
     else if (operator === "/")
     result = num1 / num2;
     else {
      result = "Invalid operator";
    }
    document.getElementById("result").innerHTML = "Result: " + result;
  };

  calculateButton.addEventListener("click", handleCalculate);
  document.getElementById("resetButton").addEventListener("click", e => {
    document.getElementById("result").innerHTML = "Result: "+0; 

  });
});
