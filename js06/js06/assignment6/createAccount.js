// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the table body in createAccount.html
    const tableBody = document.getElementById("table-body");
  
    // Check if there's data passed in the URL query string
    const queryString = window.location.search;
    if (queryString) {
      const params = new URLSearchParams(queryString);
  
      // Create an array of objects to represent the form data
      const formData = [
        { label: "Email", key: "email" },
        { label: "Password", key: "password" },
        { label: "Address", key: "address" },
        { label: "City", key: "city" },
        { label: "State", key: "state" },
        { label: "Zip", key: "zip" },
        { label: "Terms Agreement", key: "agree" },
        { label: "Membership", key: "membership" },
      ];
  
  
  
      // Loop through the formData array and add table rows
      formData.forEach((item) => {
        const value = params.get(item.key);
        if (value !== null) {
          const row = document.createElement("tr");
          const infoCell = document.createElement("td");
          const valueCell = document.createElement("td");
          infoCell.textContent = item.label;
          valueCell.textContent = value;
          if(item.label != "Zip" && item.label != "Terms Agreement"){
            row.appendChild(infoCell);
            row.appendChild(valueCell);
            tableBody.appendChild(row);
          }
        }
      });
    }
  });