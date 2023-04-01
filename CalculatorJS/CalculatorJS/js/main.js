// let resultElement = document.querySelector("#result");
// resultElement.innerHTML = "1"

// document.querySelector("#one-button")
//   .addEventListener("click", () => {
//     let resultElement = document.querySelector("#result");
//     resultElement.innerText = parseFloat(resultElement.innerText) + 1;
//   }
// )

function numberClickListener(number){
  return () => {
    const resultElement = document.querySelector("#number");
    if(resultElement.innerText === '0'){
      resultElement.innerText = number;
    }else{
      resultElement.innerText = resultElement.innerText + number;
    }
  };
}

document.querySelector("#one-button").addEventListener("click",
  numberClickListener(1));

document.querySelector("#two-button").addEventListener("click",
  numberClickListener(2));

document.querySelector("#three-button").addEventListener("click",
  numberClickListener(3));

document.querySelector("#four-button").addEventListener("click",
  numberClickListener(4));

document.querySelector("#five-button").addEventListener("click",
  numberClickListener(5));

document.querySelector("#six-button").addEventListener("click",
  numberClickListener(6));

document.querySelector("#seven-button").addEventListener("click",
  numberClickListener(7));

document.querySelector("#eight-button").addEventListener("click",
  numberClickListener(8));

document.querySelector("#nine-button").addEventListener("click",
  numberClickListener(9));

document.querySelector("#zero-button").addEventListener("click",
  numberClickListener(0));

document.querySelector("#dot-button").addEventListener("click", () => {
  const resultElement = document.querySelector("#number");
  if(resultElement.innerText.indexOf(".") === -1){
    resultElement.innerText = resultElement.innerText + ".";
  }
});
