function validEmail(email) { // see:
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validateHuman(spbHuman) {
    if (spbHuman) {
        return true;
    } else {}
}

// get all data in form and return object
function getFormData() {
    var form = document.getElementById("gform");
    var elements = form.elements; // all form elements
    var fields = Object.keys(elements).filter(function (k) {
        return (elements[k].name !== "spbHuman");
    }).map(function (k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function (k) {
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
        // it to be appended to for each item in the loop
        if (elements[k].type === "checkbox") { // special case for Edge's html collection
            str = str + elements[k].checked + ", "; // take the string and append
            // the current checked value to
            // the end of it, along with
            // a comma and a space
            data[k] = str.slice(0, -2); // remove the last comma and space
            // from the  string to make the output
            // prettier in the spreadsheet
        } else if (elements[k].length) {
            for (var i = 0; i < elements[k].length; i++) {
                if (elements[k].item(i).checked) {
                    str = str + elements[k].item(i).value + ", "; // same as above
                    data[k] = str.slice(0, -2);
                }
            }
        }
    });

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    data.formGoogleSendEmail = form.dataset.email || ""; // no email by default
    data.formGoogleSubject = form.dataset.subject || ""; // no subject by default

    // console.log(data);
    return data;
}
