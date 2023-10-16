document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from db.json
    fetch('db.json')
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data here
        const carList = data.cars; // Assuming the cars are in an array under the "cars" key
      });
    })