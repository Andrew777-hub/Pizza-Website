document.addEventListener("DOMContentLoaded", function () {
  let myInput = document.getElementById("psw");
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let length = document.getElementById("length");
  let showPasswordButton = document.getElementById("showPassword");
  let message = document.getElementById("message");
  

  // За замовчуванням ховаємо повідомлення
  message.style.opacity = "0";

  function setValidityClass(element, isValid) {
      if (isValid) {
          element.classList.remove("invalid");
          element.classList.add("valid");
      } else {
          element.classList.remove("valid");
          element.classList.add("invalid");
      }
  }

  myInput.onfocus = function () {
      message.style.display = "block";
      setTimeout(function () {
          message.style.opacity = "1";
      }, 10);
  }

  myInput.onblur = function () {
      if (!showPasswordButton.dataset.showingPassword) {
          message.style.opacity = "0";
          setTimeout(function () {
              message.style.display = "none";
          }, 300);
      }
  }

  myInput.onkeyup = function () {
      let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

      if (passwordPattern.test(myInput.value)) {
          setValidityClass(letter, true);
      } else {
          setValidityClass(letter, false);
      }

      let upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
          setValidityClass(capital, true);
      } else {
          setValidityClass(capital, false);
      }

      let numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
          setValidityClass(number, true);
      } else {
          setValidityClass(number, false);
      }

      if (myInput.value.length >= 8) {
          setValidityClass(length, true);
      } else {
          setValidityClass(length, false);
      }
  }

  showPasswordButton.onclick = function () {
      if (myInput.type === "password") {
          myInput.type = "text";
      } else {
          myInput.type = "password";
      }

      showPasswordButton.dataset.showingPassword = myInput.type === "text";
  }
});
