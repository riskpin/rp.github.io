function validate_email(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function send_email(email, name) {

    var url = "https://script.google.com/a/spb.ai/macros/s/AKfycbz-tZrOf5BjhE3gcAtqcmZI0_vvOlB9Uh1tyi1Q/exec";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      return;
    };

    // fake a form element data for sending email
    data = {};

    data.formDataNameOrder = JSON.stringify(["name","email"]);
    data.formGoogleSheetName = "mailing_list"; // default sheet name
    data.formGoogleSendEmail = "contact@spb.ai"; // no email by default
    data.formGoogleSubject = "Mailing List Sign-up"; // no subject by default

    data.name = name;
    data.email = email;

    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);

}


// pop-up sweet alert box to collect e-mail and name
function signup_form(){
    var prefilled_email = document.getElementById('email_field').value;

//[Two-step pop-up]
//    Swal.mixin({
//      confirmButtonText: 'Next &rarr;',
//      showCancelButton: false,
//      progressSteps: ['1', '2']
//    }).queue([
//      {
//        title: 'Your e-mail address',
//        inputValue: prefilled_email,
//        input: 'email',
//      },
//      {
//        title: 'Your full name',
//        input: 'text',
//      }
//    ]).then((result) => {
//      if (result.value) {
//        Swal.fire({
//          title: 'All done!',
//          text: 'We will be in touch shortly!',
//          confirmButtonText: 'Lovely!'
//        })
//      }
//    })

    if (validate_email(prefilled_email)) {
      //[One-step Pop-up]
      Swal.fire({
        title: 'What is your name?',
        text: "e-mail: " + prefilled_email,
        type: 'question',
        showCancelButton: false,
        confirmButtonColor: '#ff625a',
        confirmButtonText: 'Submit',
        input: 'text',
        inputPlaceholder: 'Your name here',
        inputValidator: (value) => {
          return !value && 'Your name is required';
        },
      }).then((result) => {
          if (result.value) {
              Swal.fire({
                type: 'success',
                title: 'Thank you, ' + result.value + '! ',
                text: 'We will be in touch with you shortly.',
                confirmButtonText: 'Lovely!',
                confirmButtonColor: '#ff625a'
              });

              // send e-mail to contact@spb.ai
              send_email(prefilled_email, result.value);
            }
        });
     }

    else {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid e-mail!',
        type: 'error',
        confirmButtonText: 'Dismiss',
        confirmButtonColor: '#ff625a'
      });
    }

}

function show_error(type, count = 0){
      if (type == 'required'){
        message = 'Please fill out all required fields.';
      }
      else if (type == 'valid_email'){
        message = 'Please enter a valid e-mail.';
      }
      else if (type == 'invalid_password'){
        message = 'Please enter a valid password.';
      }
      else if (type == 'wrong_password'){
        message = 'Wrong password! ' + count + ' of out 5 attempts remaining.';
      }
      else if (type == 'account_locked'){
        message = 'Your account has been locked. Contact us to unlock it.';
      }
      else if (type == 'activate_account'){
        message = 'Please activate your account.';
      }
      else if (type == 'wrong_email'){
        message = 'E-mail is not registered.';
      }
      else if (type == 'duplicate_email'){
        message = 'That e-mail is already registered!';
      }
      else if (type == 'valid_project'){
        message = 'Project is not valid.';
      }
      else if (type == 'password_mismatch'){
        message = 'Your new password and confirm password do not match.';
      }
      else if (type == 'page_expired'){
        message = 'Sorry, this page has expired.';
      }
      else if (type == 'maintenance'){
        message = 'Sorry, we are temporarily down under construction for maintenance. Contact us at support@superb-ai.com for urgent matters.';
      }
      else if (type == 'wrong_current_password') {
        message = 'Current password is incorrect.';
      }

      Swal.fire({
        title: 'Error!',
        text: message,
        type: 'error',
        confirmButtonText: 'Dismiss',
        confirmButtonColor: '#ff625a'
      });
}

function login_timeout() {
  Swal.fire({
    title: 'Error!',
    text: 'Your session has expired. Please log in again',
    type: 'error',
    confirmButtonText: 'Dismiss',
    confirmButtonColor: '#ff625a'
  }).then(() => {
    window.location.reload();
  });;

}

function show_success(type){
  if (type == 'email_sent'){
    message = 'An e-mail has been sent. Please check your inbox.';
    Swal.fire({
      title: 'Great!',
      text: message,
      type: 'success',
      confirmButtonText: 'Okay!',
      confirmButtonColor: '#ff625a'
    }).then(() => {
            window.location.href = '/login';
          });
  }

  else if (type == 'reset_password'){
    message = 'Please log-in with your new password.';
    Swal.fire({
      title: 'Great!',
      text: message,
      type: 'success',
      confirmButtonText: 'Okay!',
      confirmButtonColor: '#ff625a'
    }).then(() => {
            window.location.href = '/login';
          });
  }

  else if (type == 'change_password'){
    message = 'Your password has been successfully changed.';
    Swal.fire({
      title: 'Great!',
      text: message,
      type: 'success',
      confirmButtonText: 'Okay!',
      confirmButtonColor: '#ff625a'
    }).then(() => {
            window.location.href = '/login';
          });
  }

  else if (type == 'register'){
    message = 'Register Success!';
    Swal.fire({
      title: 'Great!',
      text: message,
      type: 'success',
      confirmButtonText: 'Okay!',
      confirmButtonColor: '#ff625a'
    }).then(() => {
      window.location.reload();
    });
  }
}

function show_info(type){
  if (type == 'check_inbox'){
    title = 'Hmm...';
    message = 'Did you get our e-mail? Please check your inbox!';
  }

  Swal.fire({
    title: title,
    text: message,
    type: 'info',
    confirmButtonText: 'Okay!',
    confirmButtonColor: '#ff625a'
  });
}

function show_register_info() {
  Swal.fire({
    title: 'Contact us!',
    html: '<p>Our Dashboard is currently open to our clients. Public access is coming soon.</p><br><a style="color: #ff625a" href="/contact">Contact our sales team.</a>',
    type: 'info',
    confirmButtonText: 'Okay!',
    confirmButtonColor: '#ff625a'
  });
}

// 아직 안쓰고 있는 pop-up
function show_login_success(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  Toast.fire({
    type: 'success',
    title: 'Signed in successfully.'
  });
}
