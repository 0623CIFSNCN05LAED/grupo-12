const validations = [
    {
      field: "firstName",
      check: (input) => input.value.length >= 3,
      message: "Debe contener al menos tres caracteres", 
    },

    {
        field: "lastName",
        check: (input) => input.value.length >= 3,
        message: "Debe contener al menos tres caracteres", 
    },
    
    {
      field: "address",
      check: (input) => input.value > 0,
      message: "Debe ser un valor númerico mayor a 0", //Tambien deberia ser un valor numerico y expresado en pesos argentinos
    },
    
    {
      field: "email",
      check: (input) => input.value > 0,
      message: "Debe tener minimo 20 caracteres", 
    },

    {
      field: "phone",
      check: (input) => input.value > 0,
      message: "Debe tener minimo 20 caracteres", 
    },

    {
      field: "password",
      check: (input) => input.value.length > 20,
      message: "Debe tener minimo 20 caracteres", 
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