<html>
<head>
  <title>Data Entry</title>
</head>
<body>
  <div id="data-rows">
    <div class="row">
      <input type="text" class="inputText" placeholder="Enter Text">
      <select class="dropdown1">
        <option value="Unload">Unload</option>
        <option value="Load">Load</option>
        <option value="Special">Special</option>
      </select>
      <select class="dropdown2">
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
      </select>
      <button onclick="sendData(1)">Submit Row</button>
    </div>
  </div>

  <script>
    // Your Google Apps Script Web App URL
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyyJ-7OOpHOHu3FWiOO1nKJcG5TVS_MSWoasRF8bAWXQHZAt_ftZAiviYmTecKBFun0/exec';

    function sendData(rowNumber) {
      const row = document.querySelectorAll(".row")[rowNumber - 1];

      const inputText = row.querySelector(".inputText").value;
      const dropdown1 = row.querySelector(".dropdown1").value;
      const dropdown2 = row.querySelector(".dropdown2").value;

      const data = {
        rowNumber: rowNumber,
        inputText: inputText,
        dropdown1: dropdown1,
        dropdown2: dropdown2
      };

      // Send the data to the Google Apps Script API
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  </script>
</body>
</html>
