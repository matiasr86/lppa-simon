var nameVar;
var mail;
var message;

// Validar el nombre
var inputName = document.getElementById("nombre");
var divName = inputName.parentNode.parentNode;
inputName.addEventListener("blur", validName);
inputName.addEventListener("focus", limpiarMensaje);

function validName(e) {
  var textIn = e.target.value;
  if (textIn != "") {
    if (textIn.length < 7 || textIn.indexOf(" ") == -1) {
      var spanNameNo = document.createElement(`span`);
      spanNameNo.textContent = "❌Debe completar Nombre y Apellido";
      spanNameNo.style.color = `red`;
      spanNameNo.style.fontSize = `11px`;
      spanNameNo.style.display = `block`;
      divName.appendChild(spanNameNo);
      nameVar = false;
    } else {
      var spanNameOk = document.createElement(`span`);
      spanNameOk.textContent = `✅Ok`;
      spanNameOk.style.color = `green`;
      spanNameOk.style.fontSize = `12px`;
      spanNameOk.style.display = `block`;
      divName.appendChild(spanNameOk);
      nameVar = true;
    }
  } else {
    nameVar = false;
  }
}

// Validar el mail
var inputMail = document.getElementById(`email`);
var divMail = inputMail.parentNode.parentNode;
inputMail.addEventListener("blur", validarMail);
inputMail.addEventListener("focus", limpiarMensaje);

function validarMail(e) {
  var textoIngresado = e.target.value;
  if (textoIngresado != "") {
    var regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEx.test(textoIngresado)) {
      var spanMailOk = document.createElement(`span`);
      spanMailOk.textContent = `✅Ok`;
      spanMailOk.style.color = `green`;
      spanMailOk.style.fontSize = `12px`;
      spanMailOk.style.display = `block`;
      divMail.appendChild(spanMailOk);
      mail = true;
    } else {
      var spanMailNo = document.createElement(`span`);
      spanMailNo.textContent = "❌El formato no es válido";
      spanMailNo.style.color = `red`;
      spanMailNo.style.fontSize = `11px`;
      spanMailNo.style.display = `block`;
      divMail.appendChild(spanMailNo);
      mail = false;
    }
  } else {
    mail = false;
  }
}

// Validar el mensaje
var inputMessage = document.getElementById("message");
var divMessage = inputMessage.parentNode.parentNode;
inputMessage.addEventListener("blur", validarMessage);
inputMessage.addEventListener("focus", limpiarMensaje);

function validarMessage(e) {
  var textIn = e.target.value;
  if (textIn != "") {
    if (textIn.length < 5) {
      var spanMessageNo = document.createElement(`span`);
      spanMessageNo.textContent =
        "❌El mensaje debe ser de mas de 5 caracteres";
      spanMessageNo.style.color = `red`;
      spanMessageNo.style.fontSize = `11px`;
      spanMessageNo.style.display = `block`;
      divMessage.appendChild(spanMessageNo);
      message = false;
    } else {
      var spanMessageOk = document.createElement(`span`);
      spanMessageOk.textContent = `✅Ok`;
      spanMessageOk.style.color = `green`;
      spanMessageOk.style.fontSize = `12px`;
      spanMessageOk.style.display = `block`;
      divMessage.appendChild(spanMessageOk);
      message = true;
    }
  } else {
    message = false;
  }
}

// Funcion para limpiar todos los mensajes de validación una vez el usuario vuelve a editar el input

function limpiarMensaje(e) {
  var elementEvent = e.target;
  var divParenElement = elementEvent.parentNode.parentNode;
  var span = divParenElement.lastElementChild;
  if (span.tagName === `SPAN`) {
    divParenElement.removeChild(span);
  }
}
