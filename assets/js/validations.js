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
};

inputs.forEach((input) => {
  // Adding an event listener to the input element.
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

export const validate = (input) => {
  // Getting the data-type attribute from the input element.

  const inputType = input.dataset.type;

  // Checking if the input is valid or not.
  if (input.validity.valid) {
    //If it is valid, it will remove the error message.
    const boxMessage = input.parentElement.querySelector(".form__errorMessage");
    boxMessage.classList.remove("form__errorMessage--active");
    boxMessage.innerHTML = "";
  } else {
    //If it is not valid, it will show the error message.
    const boxMessage = input.parentElement.querySelector(".form__errorMessage");

    boxMessage.classList.add("form__errorMessage--active");
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
    }
  });
  return message;
};
