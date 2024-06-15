"use strict";
// task 1
function checkTextFields() {
  const field1Value = document.getElementById("field1").value;
  const field2Value = document.getElementById("field2").value;

  if (field1Value && field2Value) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}
// task 2
function checkNumberFields() {
  const fieldValue1 = parseInt(document.getElementById("number1").value);
  const fieldValue2 = parseInt(document.getElementById("number2").value);

  if (fieldValue1 + fieldValue2 > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}
// task 3
function checkForJavaScript() {
  const textValue = document.getElementById("textField").value;

  if (textValue.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}
// task 4
function checkNumberRange() {
  const fieldValue = parseInt(document.getElementById("numberField").value);

  if (fieldValue > 9 && fieldValue < 21) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}
// task 5
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (
    name.length >= 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 6
  ) {
    window.location.href = "other.html";
  } else {
    alert("Помилка! Перевірте правильність введених даних.");
  }
}
