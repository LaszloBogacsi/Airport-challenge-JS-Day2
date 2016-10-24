describe("Airport", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('can accept a plane to land', function(){
    airport.acceptPlane(plane);
    expect(airport.planes[0]).toEqual(plane);
  });
  it('can depart a plane', function(){
    airport.acceptPlane(plane);
    airport.planeDeparts(plane);
    expect(airport.planes).toEqual([]);
  });

  it('can confirm if a plane is present', function(){
    var say = function (something) {

      console.log("hello again");
      return something;
    };
    var planeCheck = airport.isPlanePresent;

    expect(airport.isPlanePresent(plane)).toBe(false);
    airport.acceptPlane(plane);
    expect(airport.isPlanePresent(plane)).toBe(true);
  });
});
