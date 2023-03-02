import { userServices } from "../../services/user-services.js";
import { validate } from "./validations.js";

class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      /*
       * Looping through the fields array and then selecting the input with the data-type attribute that
       * matches the field.
       */
      const credentials = [];
      self.fields.forEach((field) => {
        const input = document.querySelector(`[data-type='${field}']`);
        credentials[field] = input.value;
      });

      this.authenticate(credentials);
    });
  }
  async authenticate(credentials) {
    const userList = await userServices.userList();
    let authenticated = false;

    userList.forEach((user) => {
      if (
        user.email == credentials.email &&
        user.password == credentials.password
      ) {
        localStorage.setItem("auth", 1);
        authenticated = true;
        return window.location.replace("../../products.html");
      }
    });

    if (!authenticated) {
      alert(
        "Correo y contrasena incorrectos\n\nIntente con:\n\nCorreo: admin3257@alurageek.com\nContraseña: admin3257"
      );
    }
  }
}

const form = document.querySelector("[data-loginForm]");

// Checking if the form exists and if it does it will create a new instance of the Login class.
if (form) {
  const fields = ["email", "password"];
  const validator = new Login(form, fields);
}

if (
  window.location.pathname == "/login.html" &&
  localStorage.getItem("auth") == 1
) {
  alert("Sesion ya iniciada, sera redirigido al menu administrador");
  window.location.replace("../../products.html");
}
