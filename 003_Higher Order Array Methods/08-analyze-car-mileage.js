function analyzeCarMileage(cars) {
  if (cars.length === 0) {
    return {};
  }
  let totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  //   console.log(totalMileage);

  let averageMileage = totalMileage / cars.length;
  //   console.log(averageMileage);

  let highestMileage = cars.reduce(
    (high, car) => (car.mileage > high.mileage ? car : high),
    cars[0]
  );

  let lowestMileage = cars.reduce(
    (low, car) => (car.mileage < low.mileage ? car : low),
    cars[0]
  );
  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileage,
    lowestMileage,
    totalMileage,
  };
}

const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000 },
  { make: "Cheverolet", model: "Impala", year: 2021, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];

console.log(analyzeCarMileage(cars));
