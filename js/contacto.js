document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const requiredFields = document.querySelectorAll(".form-control");
    let valid = true;
  
    requiredFields.forEach(function (field) {
      const inputValue = field.value.trim();
  
      if (field.name === "email") {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
        if (!inputValue.match(emailRegex)) {
          field.classList.add("error");
          valid = false;
        } else {
          field.classList.remove("error");
        }
      } else if (field.name === "telefono") {
        const telefonoRegex = /^[0-9]+$/;
  
        if (!inputValue.match(telefonoRegex)) {
          field.classList.add("error");
          valid = false;
        } else {
          field.classList.remove("error");
        }
      } else if (field.name === "nombre" || field.name === "apellido" || field.name === "mensaje") {
        const lettersRegex = /^[a-zA-Z\s]*$/;
  
        if (inputValue !== "" && !inputValue.match(lettersRegex)) {
          field.classList.add("error");
          valid = false;
        } else {
          field.classList.remove("error");
        }
      } else {
        const lettersAndNumbersRegex = /^[a-zA-Z0-9\s]*$/;
  
        if (!inputValue.match(lettersAndNumbersRegex)) {
          field.classList.add("error");
          valid = false;
        } else {
          field.classList.remove("error");
        }
      }
  
      if (inputValue === "" && field.name !== "mensaje") {
        field.classList.add("error");
        valid = false;
      }
    });
  
    if (valid) {
      const submitButton = document.querySelector(".btn-submit");
      submitButton.classList.add("animate__animated", "animate__flip");
  
      setTimeout(function () {
        submitButton.classList.remove("animate__animated", "animate__flip");
      }, 500);
    }
  });
  