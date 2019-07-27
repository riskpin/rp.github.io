var add_button = $(".add-label-button");
var remove_button = $(".remove-label-button");

var wrapper = $(".input_fields_wrap");

// max number of label type fields
var max_fields = 5;

// number of label type/size input fields created so far;
var counter = 1;

// add label type fields when add button is clicked
$(add_button).click(function(e){
    e.preventDefault();

    // count number of displayed label type fields
    var displayed_labels_counter = 0;
    for(var i=0; i<wrapper[0].childNodes.length; i++){
        if(wrapper[0].childNodes[i].nodeName == "DIV"){
            displayed_labels_counter = displayed_labels_counter + 1;
        }
    }

    var selected_data_type = $('#data-type')[0].value;
    if(displayed_labels_counter < max_fields){
        $(wrapper).append(labelTypeList(selected_data_type));
    }
});

// delete label
$(wrapper).on("click",".remove-label-button", function(e){ //user click on remove button
    e.preventDefault();
    $(this).parent('div').parent('div').empty().remove();
});

function onDatatypeChange(){
    var selected_data_type = $('#data-type')[0].value;
    $(wrapper).empty();
    $(wrapper).append(labelTypeList(selected_data_type));
}

function labelTypeList(value){
    var new_label_forms_group;
    if(value.toUpperCase() == 'TEXT'){
        new_label_forms_group = $('#text-labels-form-group').clone();
    }
    else if(value.toUpperCase() == 'IMAGE'){
        new_label_forms_group = $('#image-labels-form-group').clone();
    }
    else if(value.toUpperCase() == 'VIDEO'){
        new_label_forms_group = $('#video-labels-form-group').clone();
    }
    else{
        new_label_forms_group = $('#empty-labels-form-group').clone();
    }

    counter = counter + 1;
    new_label_forms_group.find('.hidden-label-type').attr({'name':'label-type-'+counter, 'required':''});
    new_label_forms_group.find('.hidden-label-size').attr({'name':'label-size-'+counter, 'required':''});

    new_label_forms_group.find('.hidden-label-type').addClass('.displayed-label-type').removeClass('hidden-label-type');
    new_label_forms_group.find('.hidden-label-size').addClass('.displayed-label-size').removeClass('hidden-label-size');

    return new_label_forms_group[0].innerHTML;
}



// contact page pop up
document.getElementById('gform').dataset.email="sales@spb.ai";
document.getElementById('gform').dataset.subject="Quote Request #" + Math.floor(1000 + Math.random() * 9000);

function handleFormSubmit(event) { // handles form submit without any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form

  if (data.email && !validEmail(data.email)) { // if email is not valid show error
    var invalidEmail = document.getElementById("email-invalid");
    if (invalidEmail) {
      invalidEmail.style.display = "block";
      return false;
    }
  } else {
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // reset forms
    xhr.onreadystatechange = function () {
      //      document.getElementById("gform").style.display = "none"; // hide form
      //      var thankYouMessage = document.getElementById("thankyou_message");
      //      if (thankYouMessage) {
      //        thankYouMessage.style.display = "block";
      //      }
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("data-source").value = "";
      document.getElementById("data-type").value = "";
      document.getElementById("data-size").value = "";

      for(var i=0; i<=counter; i++){
        if(document.getElementsByName("label-type-"+i).length != 0){
            document.getElementsByName("label-type-"+i)[0].value = "";
        }
        if(document.getElementsByName("label-size-"+i).length != 0){
            document.getElementsByName("label-size-"+i)[0].value = "";
        }
      }
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
  var pop_up = document.getElementById("js-pop-up");

  if (pop_up) {
    pop_up.style.display = "block";
  }
};

function close_pop_up(event) {
  var pop_up = document.getElementById("js-pop-up");
  pop_up.style.display = "none";
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
