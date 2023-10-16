  // document.addEventListener("DOMContentLoaded", () => {
//   const carList = document.getElementById('car-list');
//   const carImage = document.getElementById('car-image');
//   const carMake = document.getElementById('car-make');
//   const carModel = document.getElementById('car-model');
//   const carYear = document.getElementById('car-year');
//   const carPrice = document.getElementById('car-price');
//   const carButton = document.getElementById('buy-car-btn');

//   // Function to display car details
//   function displayCarDetails(car) {
//       carImage.src = car.image;
//       carMake.textContent = `Make: ${car.make}`;
//       carModel.textContent = `Model: ${car.model}`;
//       carYear.textContent = `Year: ${car.year}`;
//       carPrice.textContent = `Price: ${car.price}`;
//   }

// // Function to buy a car
// function buyCar() {
//   if (selectedCar) {
//     alert(`Congratulations! You've bought a ${selectedCar.make} ${selectedCar.model}. Enjoy your new ride!`);
//     // You can add additional logic here to update the car's availability or perform other actions.
//   } else {
//     alert('Please select a car before buying.');
//   }
// }

// })
//  fetch("http://localhost:10000/cars")
// .then((response) => response.json())
// .then((data) => {
//     data.cars.forEach(car => {
        // Create a list item for each car
//         const listItem = document.createElement('li');
        // listItem.innerHTML = `<img src="${car.image}" alt="${car.make} ${car.model}"><br><strong>${car.make} ${car.model}</strong>`;
//         listItem.addEventListener('click', () => displayCarDetails(car));
//         carList.appendChild(listItem);
// //     });
// })
// .catch(error => console.error('Error fetching data:', error));


// // function diplayCarDetails(){
// //   fetch("http://localhost:10000/cars")
// //   .then((res) => res.json())
// //   .then((data) => {
// //     (data)
// //     data.forEach((car) =>{
// //       const cardContainer = document.createElement('div')
// //       cardCardContainer.classList.add('carCard')
// //       cardContainer.innerHTML = `
// //       <h1>${car.make}</h1>
// //       <p>${car.model}<p/>
// //       <h2>${car.year}</h2>
// //       <h4.${car.price}</h2>
// //       <img src="${car.image}">
// //       `
// //       document.getElementById("container").append(cardContainer)
// //     })
// //   })
// //   .catch(error => console.error('Error fetching data:', error));

// functionDisplayCarDetails()




document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from db.json
  fetch('db.json')
    .then((response) => response.json())
    .then((data) => {
      // Handle the fetched data here
      const carList = data.cars; // Assuming the cars are in an array under the "cars" key
    })
  })