"use strict";
// task 1

const checkButton = document.querySelector("#check-button");
const field1Value = document.querySelector("#field1");
const field2Value = document.querySelector("#field2");

checkButton.addEventListener("click", () => {
  if (field1Value.value && field2Value.value) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
});
// task 2
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const checkSumButton = document.querySelector("#check-sum-button");

checkSumButton.addEventListener("click", () => {
  const fieldValue1 = parseInt(number1.value);
  const fieldValue2 = parseInt(number2.value);

  if (fieldValue1 + fieldValue2 > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
});
// task 3
const textField = document.querySelector("#textField");
const checkTextButton = document.querySelector("#check-text-button");
checkTextButton.addEventListener("click", () => {
  const textValue = textField.value;

  if (textValue.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
});

// task 4
const numberField = document.querySelector("#numberField");
const checkRangeButton = document.querySelector("#check-range-button");

checkRangeButton.addEventListener("click", () => {
  const fieldValue = parseInt(numberField.value);

  if (fieldValue > 9 && fieldValue < 21) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
});

// task 5
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const validateButton = document.querySelector("#validate-button");

validateButton.addEventListener("click", () => {
  const name = nameField.value;
  const email = emailField.value;
  const password = passwordField.value;

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
});
