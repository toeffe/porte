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

function newrow(number) {
            for (let i = 1; i <= number; i++) {
                document.write(`
                    <div class="row" id="row-${i}">
                        <span class="number">Port ${i}</span>
                        <input type="text" placeholder="Info" class="row-input" id="input-${i}">
                        
                        <!-- First dropdown menu (same as before) -->
                        <select class="color-select" onchange="changeColor(${i}, this.value)">
                            <option value="default"></option>
                            <option value="unload">Unload</option>
                            <option value="load">Load</option>
                            <option value="special">Special</option>
                        </select>

                        <!-- Second dropdown menu with 8 options -->
                        <select class="option-select">
                            <option value="option1"></option>
                            <option value="option2">ARDO</option>
                            <option value="option3">TCB</option>
                            <option value="option4">Flensted</option>
                            <option value="option5">TF</option>
                        </select>

                        <button onclick="clearRow(${i})">Clear row</button>
                    </div>
                `);
            } }