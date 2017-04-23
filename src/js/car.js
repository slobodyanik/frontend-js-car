module.exports = {
  color: 'white',
  dours: 4,
  passengers: [],
  seats: 4,
  maxSpeed: 100,
  defaultSpeed: 60,
  speed: 0,
  drive(speed) {
    let newSpeed = speed;
    // can't drive without a driver
    if (!this.passengers.length) {
      newSpeed = 0;
    }

    if (typeof newSpeed === 'number' && newSpeed > this.maxSpeed) {
      // limit to max speed
      this.speed = this.maxSpeed;
    } else if (typeof newSpeed === 'number') {
      // set speed
      this.speed = newSpeed;
    } else {
      // set default speed
      this.speed = this.defaultSpeed;
    }
  },
  put() {
    // can't put more passenger into a car than seats
    if (this.passengers.length === this.seats) return;
    // add one passenger to the end. Passenger is a `true` value.
    this.passengers.push(true);
  },
  land() {
    // remove one pessanger from the end
    this.passengers.pop();
    if (!this.passengers.length) {
      this.drive(0);
    }
  },
};
