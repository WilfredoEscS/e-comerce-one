const inputs = document.querySelectorAll("input, textarea");

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const errorMessages = {
  name: {
    valueMissing: "El campo de nombre no puede estar vacío",
    patternMismatch: "El nombre no debe exceder los 40 caracteres",
  },
  message: {
    valueMissing: "El mensaje no puede estar vacío",
    customError: "El mensaje no debe exceder los 120 caracteres",
  },
};

inputs.forEach((input) => {
  // Adding an event listener to the input element.
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

const validators = {
  message: (input) => validateMessage(input),
};

const validate = (input) => {
  const inputType = input.dataset.type;
  const label = input.parentElement.querySelector(".form__label");
  const boxMessage = input.parentElement.querySelector(".form__errorMessage");

  if (validators[inputType]) {
    validators[inputType](input);
  }

  // Getting the data-type attribute from the input element.

  // Checking if the input is valid or not.
  if (input.validity.valid) {
    //If it is valid, it will remove the error message.

    boxMessage.classList.remove("form__errorMessage--active");
    input.classList.remove("form__input--invalid");
    label.classList.remove("form__label--invalid");

    boxMessage.innerHTML = "";
  } else {
    //If it is not valid, it will show the error message.

    boxMessage.classList.add("form__errorMessage--active");
    input.classList.add("form__input--invalid");
    label.classList.add("form__label--invalid");

    boxMessage.innerHTML = showErrorMessage(inputType, input);
  }
};

const showErrorMessage = (inputType, input) => {
  let message = "";

  /*
   * Iterating over the array of errorTypes and checking if the input has any of those errors. If it
   * does, it will return the error message.
   */
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[inputType][error];
      console.log(message);
    }
  });
  return message;
};

const validateMessage = (input) => {
  const lengthMessage = input.value.length;
  let message = "";
  if (lengthMessage > 120) {
    message = "El mensaje no debe exceder los 120 caracteres";
  }
  input.setCustomValidity(message);
};
