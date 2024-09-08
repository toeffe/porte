        // Your Google Apps Script Web App URL (replace YOUR_DEPLOYED_SCRIPT_URL with the actual URL)
        const apiUrl = 'https://script.google.com/macros/s/AKfycbyyJ-7OOpHOHu3FWiOO1nKJcG5TVS_MSWoasRF8bAWXQHZAt_ftZAiviYmTecKBFun0/exec';

        function sendData(rowNumber) {
            // Select the row's input fields and dropdowns
            const row = document.querySelectorAll(".row")[rowNumber - 1];
            const inputText = row.querySelector(".inputText").value;
            const dropdown1 = row.querySelector(".dropdown1").value;
            const dropdown2 = row.querySelector(".dropdown2").value;

            // Create the data object to send to the Google Sheet
            const data = {
                rowNumber: rowNumber,
                inputText: inputText,
                dropdown1: dropdown1,
                dropdown2: dropdown2
            };

            // Send the data to the Google Apps Script API using fetch()
            fetch(apiUrl, {
              redirect: "follow",
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "text/plain;charset=utf-8",
                  },
               })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert('Row submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }