// Fetch data from the server
fetch('  http://localhost:8000/cars')
    .then(response => response.json())
    .then(data => {
        const carList = document.getElementById('car-list');

        data.cars.forEach(car => {
            // Create a list item for each car
            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${car.image}" alt="${car.make} ${car.model}"><br><strong>${car.make} ${car.model}</strong>`;
            listItem.addEventListener('click', () => displayCarDetails(car));
            carList.appendChild(listItem);
        });

        // Function to display car details
        function displayCarDetails(car) {
            const carImage = document.getElementById('car-image');
            const carMake = document.getElementById('car-make');
            const carModel = document.getElementById('car-model');
            const carYear = document.getElementById('car-year');
            const carPrice = document.getElementById('car-price');

            carImage.src = car.image;
            carMake.textContent = car.make;
            carModel.textContent = car.model;
            carYear.textContent = car.year;
            carPrice.textContent = car.price;
        }
    })
    .catch(error => console.error('Error fetching data:', error));
