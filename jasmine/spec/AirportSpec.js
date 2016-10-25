describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  it('allows a plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('allows a plane to take off', function(){
    airport.land(plane);
    airport.takeOff();
    expect(airport.planes).toEqual([]);
  });

  it('has a default capacity (50)', function(){
    expect(airport.capacity).toEqual(50);
  });

  it('can set the capacity', function(){
    var newCapacity = 30;
    airport.setCapacity(newCapacity);
    expect(airport.capacity).toEqual(newCapacity);
  });

  it('at landing it throws an error if airport is full', function(){
    // var newCapacity = 50;
    // airport.setCapacity(newCapacity);
    for (i = 0; i < 50; i++) {
      airport.land(plane);
    }
    expect(function() {airport.land(plane);}).toThrowError('The airport is full');
  });
  it('can check the actual weather', function(){
    expect(airport.actualWeather(weather)).toEqual(airport.stormyWeather);
  });
  it('prevents take off is weather is stormy', function(){
    airport.land(plane);

    spyOn(weather, 'storm').and.returnValue(true);
    airport.actualWeather(weather);
    expect(function () {airport.takeOff();}).toThrowError('No take off due to bad weather conditions');
  });
  it('prevents take off is weather is stormy', function(){

    spyOn(weather, 'storm').and.returnValue(true);
    airport.actualWeather(weather);
    expect(function () {airport.land(plane);}).toThrowError('No landing due to bad weather conditions');
  });

});
