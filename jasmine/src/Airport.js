var DEFAULT_CAPACITY = 50;

function Airport () {
  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
  this.stormyWeather = false;
}

Airport.prototype.land = function (plane) {
  if (this.stormyWeather === true) {
    throw new Error('No landing due to bad weather conditions');
  }
  if (this.planes.length >= this.capacity) {
    throw new Error('The airport is full');
  }
  this.planes.push(plane);
};

Airport.prototype.takeOff = function() {
  if (this.stormyWeather === true) {
    throw new Error('No take off due to bad weather conditions');
  }
  this.planes.pop();
};

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity;
};

Airport.prototype.actualWeather = function(weather) {
  return this.stormyWeather = weather.storm();
};
