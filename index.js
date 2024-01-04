// Create a class for vehicles
class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

// Create a class for cars, extending the Vehicle class
class Car extends Vehicle {
  constructor(name, manufacturer, id, carType) {
    super(name, manufacturer, id);
    this.carType = carType;
  }
}

// Create a class for airplanes, extending the Vehicle class
class Airplane extends Vehicle {
  constructor(name, manufacturer, id, airplaneType) {
    super(name, manufacturer, id);
    this.airplaneType = airplaneType;
  }
}

// Create a class for employees
class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

// Create a class for drivers, extending the Employee class
class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Create a class for pilots, extending the Employee class
class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Create a class for reservations
class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationID = reservationID;
  }
}

// Create an array to store reservations
let reservationsArray = [];

// Create three cars and two airplanes with actual data
let car1 = new Car("Toyota Camry", "Toyota", 1, "Gas");
let car2 = new Car("Tesla Model S", "Tesla", 2, "Electric");
let car3 = new Car("Honda Accord", "Honda", 3, "Gas");

let airplane1 = new Airplane("Boeing 747", "Boeing", 4, "Commercial");
let airplane2 = new Airplane("Airbus A380", "Airbus", 5, "Passenger");

// Create a function for verification and reservation
function makeReservation(employeeId, vehicleId) {
  let employee = reservationsArray.find((res) => res.employeeId === employeeId);
  if (employee && employee.vehicleId !== vehicleId) {
    console.log("Employee does not match the vehicle.");
  } else {
    let reservation = new Reservation(new Date(), employeeId, vehicleId, reservationsArray.length + 1);
    reservationsArray.push(reservation);
    console.log("Reservation created successfully.");
  }
}

// Make reservations using the function
makeReservation(1, 1); // Should print "Reservation created successfully."
makeReservation(2, 1); // Should print "Employee does not match the vehicle."

// Print the content of the array using the map function
reservationsArray.map((reservation) => console.log(reservation));
