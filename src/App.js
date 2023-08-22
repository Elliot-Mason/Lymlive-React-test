import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch('./data.json')
      .then(response => response.text()) // Read the file content as text
      .then(text => {
        // Remove the "var clientData =" prefix
        const jsonDataText = text.replace('var clientData =', '');

        try {
          // Parse the JSON data
          const parsedData = JSON.parse(jsonDataText);

          // Display the JSON data in the console
          console.log(parsedData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <div>hi</div>
      {jsonData !== null && (
        <pre id="disjson">{JSON.stringify(jsonData, null, 2)}</pre>
      )}
      </header>
    </div>
  );
}

export default App;
