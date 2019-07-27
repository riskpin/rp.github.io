// set send-to e-mail address and subject line
document.getElementById('gform').dataset.email="contact@spb.ai";
document.getElementById('gform').dataset.subject="Contact Request";

// contact page pop up
function handleFormSubmit(event) { // handles form submit withtout any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form

//  if (validateHuman(data.spbHuman)) {  //if form is filled, form will not be submitted
//    return false;
//  }

  if (data.email && !validEmail(data.email)) { // if email is not valid show error
    var invalidEmail = document.getElementById("email-invalid");
    if (invalidEmail) {
      invalidEmail.style.display = "block";
      return false;
    }
  } else {
    var url = event.target.action; //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      //      document.getElementById("gform").style.display = "none"; // hide form
      //      var thankYouMessage = document.getElementById("thankyou_message");
      //      if (thankYouMessage) {
      //        thankYouMessage.style.display = "block";
      //      }
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("affiliation").value = "";
      document.getElementById("email").value = "";
      document.getElementById("country").value = "";
      document.getElementById("message").value = "";
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);

    // alert("Thank you. Your message has been sent!");
    open_pop_up();
  }
}

function open_pop_up(event) {
  var contact_pop_up = document.getElementById("js-pop-up");

  if (contact_pop_up) {
    contact_pop_up.style.display = "block";
  }
};

function close_pop_up(event) {
  var contact_pop_up = document.getElementById("js-pop-up");
  contact_pop_up.style.display = "none";
}


function loaded() {
  // console.log("Contact form submission handler loaded successfully.");
  // bind to the submit event of our form
  var form = document.getElementById("gform");
  form.addEventListener("submit", handleFormSubmit, false);
};

// -------
// these doesn't work
// document.addEventListener("DOMContentLoaded", loaded, false);
//$(document).ready(loaded);s

// use this
loaded();
