function Weather () {

}

Weather.prototype.storm = function () {
  var stormChance = (Math.random() * 100);
  if (stormChance > 90) {
    return true;
  } else {
    return false;
  }
};
