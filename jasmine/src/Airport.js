function Airport() {
this.planes = [];
}

Airport.prototype.acceptPlane = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.planeDeparts = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

Airport.prototype.isPlanePresent = function (plane) {
  var index = this.planes.indexOf(plane);
  if (index >= 0) {
    return true;
  } else {
    return false;
  }

};
