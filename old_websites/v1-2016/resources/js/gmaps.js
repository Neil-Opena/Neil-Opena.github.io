
// GMAPS.JS
function initMap(){
  var centerMap = {lat: 32, lng: 15};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:2,
    center: centerMap
  });

  var markerA = new google.maps.Marker({
    position: {lat:16.4023, lng: 120.5960},
    map:map,
    title:'Baguio City, Philippines',
    animation: google.maps.Animation.DROP,
    label:'A'
  });


  var markerB = new google.maps.Marker({
    position: {lat:40.5884, lng: -73.6579},
    map:map,
    title:'Long Beach, New York',
    animation: google.maps.Animation.DROP,
    label:'B'
  });


}
