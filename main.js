//bài 1

function resutlBai1(n) {
  const resultEl1 = document.getElementById("showNumber1");
  resultEl1.style.display = "block";
  resultEl1.innerHTML = `số nguyên dương nhỏ nhất ${n}`;
}
document.getElementById("btn1").onclick = function () {
  let n = 0;
  let number1 = 0;
  while (number1 < 10000) {
    n++;
    number1 = number1 + n;
  }
  resutlBai1(n);
};

//bài 2

function resutlBai2(tong) {
  const resultEl2 = document.getElementById("showNumber2");
  resultEl2.style.display = "block";
  resultEl2.innerHTML = `số nguyên dương nhỏ nhất ${tong}`;
}
document.getElementById("btn2").onclick = function () {
  const number1 = document.getElementById("inputBai2").value;
  const number2 = document.getElementById("inputBai22").value;
  let tong = 0;
  let x = 1;
  for (let i = 1; i <= number2; i++) {
    x = x * number1;
    tong = tong + x;
  }
  resutlBai2(tong);
};

//bài 3
function resutlBai3(giaithua) {
  const resultEl3 = document.getElementById("showNumber3");
  resultEl3.style.display = "block";
  resultEl3.innerHTML = `kết quả là${giaithua}`;
}
document.getElementById("btn3").onclick = function () {
  const inputBai3 = document.getElementById("inputBai3").value;
  let giaithua = 1;
  for (let i = 1; i <= inputBai3; i++) {
    giaithua *= i;
  }
  resutlBai3(giaithua);
};

//bài 4

document.getElementById("btn4").onclick = function () {
  for (i = 0; i <= 10; i++) {
    const parentDiv = document.createElement("div");
    document.getElementById("parent").appendChild(parentDiv);
  }
  const childDiv = document
    .getElementById("parent")
    .getElementsByTagName("div");
  for (var i = 1; i < childDiv.length; i++) {
    if ((i + 1) % 2 == 0) {
      childDiv[i].innerHTML = `Div chẵn ${i}`;
      childDiv[i].style.background = "blue";

    } else {
      childDiv[i].innerHTML = `Div lẻ ${i}`;
      childDiv[i].style.background = "red";
    }
  }
};
