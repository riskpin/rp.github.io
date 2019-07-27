function open_data_contact(event) {
  message = "Options Selected:";
  if (document.getElementById("data_source_option1").checked) {
    message += "\n- Already have the data";
  }
  else if (document.getElementById("data_source_option2").checked) {
    message += "\n- Need data collection";
  }

  if (document.getElementById("data_type_option1").checked) {
    message += "\n- General data";
  }
  else if (document.getElementById("data_type_option2").checked) {
    message += "\n- Private/Technical data";
  }

  if (document.getElementById("data_exchange_option1").checked) {
    message += "\n- Cloud/API";
  }
  else if (document.getElementById("data_exchange_option2").checked) {
    message += "\n- On-site Custom Server";
  }

  if (document.getElementById("worker_option1").checked) {
    message += "\n- Superb AI's Editors";
  }
  else if (document.getElementById("worker_option2").checked) {
    message += "\n- Your Employees";
  }

  document.getElementsByName("message")[0].value = message;

  var pop_up = document.getElementById("js-pop-up");
  if (pop_up) {
    pop_up.style.display = "block";
  }
};

function handleFormSubmit(event) { // handles form submit without any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form

  if (validateHuman(data.spbHuman)) {  //if form is filled, form will not be submitted
    return false;
  }

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
      document.getElementById("gform").style.display = "none"; // hide form
      var pop_up = document.getElementById("js-pop-up");
      if (pop_up) {
        pop_up.style.display = "none";
      }
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
}

//  function loaded() {
//    console.log("Contact form submission handler loaded successfully.");
//    // bind to the submit event of our form
//    var form = document.getElementById("gform");
//    form.addEventListener("submit", handleFormSubmit, false);
//  };
//  document.addEventListener("DOMContentLoaded", loaded, false);