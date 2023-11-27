function isValidEmail(email) {
    // Expresión regular para validar un correo electrónico básico.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    // Reglas comunes de contraseñas
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  
    // Verifica la longitud mínima y la presencia de diferentes tipos de caracteres
    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    );
  }

const validations = [
    {
      field: "firstName",
      check: (input) => input.value.length >= 2,
      message: "Debe contener al menos dos caracteres"
    },

    {
        field: "lastName",
        check: (input) => input.value.length >= 2,
        message: "Debe contener al menos dos caracteres" 
    },
    
    {
      field: "address",
      check: (input) => input.value.length >= 5,
      message: "Debe contener al menos cinco caracteres" // Ver como validar correctamente una direccion
    },
    
    {
        field: "email",
        check: (input) => isValidEmail(input.value),
        message: "Debe ser una dirección de correo electrónico válida", 
    },

    {
      field: "phone",
      check: (input) => /^\d{8,15}$/.test(input.value),
      message: "Debe tener un mínimo de ocho y un máximo de quince caracteres numéricos, sin guiones", 
    },

    {
      field: "password",
      check: (input) => isValidPassword(input.value),
      message: "Debe tener un mínimo de ocho caracteres, una mayúscula, una minúscula, un número y caracteres especiales", 
    },
  ];
  
  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
  
    function validate() {
      console.log("input.value", input.value);
      inputValidation(validation, input, inputErrorMsg);
    }
  
    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
  });
  
  const form = document.getElementById("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const validationsResult = [];
  
    validations.forEach((validation) => {
      const inputId = validation.field;
      const input = document.getElementById(inputId);
      const inputErrorMsg = document.getElementById(inputId + "Error");
      const result = inputValidation(validation, input, inputErrorMsg);
      validationsResult.push(result);
    });
  
    if (validationsResult.every((val) => val == true)) {
      form.submit();
    }
  });
  
  function inputValidation(validation, input, inputErrorMsg) {
    if (!input.value) {
      inputErrorMsg.innerText = "El campo no debe estar vacío";
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    if (!validation.check(input)) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    inputErrorMsg.innerText = "";
    inputErrorMsg.classList.remove("display");
    return true;
  }