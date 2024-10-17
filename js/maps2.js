$(document).on("ready", function () {
  var newYorkLatLng = new google.maps.LatLng(40.7222, -74.0009);
  var nairobiLatLng = new google.maps.LatLng(-1.258, 36.8219);

  var options = {
    zoom: 12,
    center: new google.maps.LatLng(-1.258, 36.8219),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(document.getElementById("map_div"), options);

  var image = new google.maps.MarkerImage(
    "images/marker1.png",
    new google.maps.Size(100, 100),
    new google.maps.Point(0, 0),
    new google.maps.Point(18, 42)
  );

  var markerNewYork = new google.maps.Marker({
    position: newYorkLatLng,
    map: map,
    title: "Hodhi Inc, New York",
    icon: image,
  });

  var markerNairobi = new google.maps.Marker({
    position: nairobiLatLng,
    map: map,
    title: "Hodhi Inc, Nairobi",
    icon: image,
  });
});
