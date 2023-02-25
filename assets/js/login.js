class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.ValidateOnSubmit();
  }

  ValidateOnSubmit() {
    let self = this;
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      /*
       * Looping through the fields array and then selecting the input with the data-type attribute that
       * matches the field.
       */
      self.fields.forEach((field) => {
        const input = document.querySelector(`[data-type='${field}']`);
      });
    });
  }
}

const form = document.querySelector("[data-loginForm]");

// Checking if the form exists and if it does it will create a new instance of the Login class.
if (form) {
  const fields = ["email", "password"];
  const validator = new Login(form, fields);
}
