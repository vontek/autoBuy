import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Component() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://auto-buy-opal.vercel.app/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <strong>{car.brand}</strong> - {car.model} ({car.year})
            <ul>
              <li>User: {car.user}</li>
              <li>Category: {car.category}</li>
              <li>
                Location: {car.location.city}, {car.location.state}, {car.location.country}
              </li>
              <li>Mileage: {car.mileage}</li>
              <li>Condition: {car.condition}</li>
              <li>Color: {car.color}</li>
              <li>Price: {car.price}</li>
              <li>Description: {car.description}</li>
              <li>
                Car Images:
                <ul>
                  {car.carImages.map((image, imageIndex) => (
                    <li key={imageIndex}>
                      <img src={image.url} alt={`Car ${index + 1} Image ${imageIndex + 1}`} />
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
