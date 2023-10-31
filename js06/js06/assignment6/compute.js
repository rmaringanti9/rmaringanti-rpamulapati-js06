window.addEventListener("load", function(){   
    // Retrieve the field/value pairs from the URL
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g," ");
    formData = decodeURIComponent(formData);
    let formFields = formData.split(/[&=]/g);

    // Write the field values to the account table
    let myTable = document.getElementById('table-body');
    let row = myTable.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = formFields[1]+ " " + "+" + " " + formFields[3];
    cell2.innerHTML = parseInt(formFields[1]) + parseInt(formFields[3]);

    row = myTable.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);

    cell1.innerHTML = formFields[1]+ " " + "-" + " " + formFields[3];
    cell2.innerHTML = parseInt(formFields[1]) - parseInt(formFields[3]);

    row = myTable.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);

    cell1.innerHTML = formFields[1]+ " " + "*" + " " + formFields[3];
    cell2.innerHTML = parseInt(formFields[1]) * parseInt(formFields[3]);

    row = myTable.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);

    cell1.innerHTML = formFields[1]+ " " + "/" + " " + formFields[3];
    cell2.innerHTML = parseInt(formFields[1]) / parseInt(formFields[3]);
             
 } );  