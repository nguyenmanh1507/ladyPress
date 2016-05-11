/* global google:true */
/* eslint-disable strict, no-unused-vars, no-multi-spaces */
function initMap() {
  // Specify features and elements to define styles.
  /* eslint-disable quotes, key-spacing, comma-spacing */
  const styleArray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}];
  /* eslint-enable */

  const latLng = {lat: 20.850277, lng: 106.691050},
        image  = 'https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Lollipop-48.png'
  ;

  // Create a map object and specify the DOM element for display.
  const map = new google.maps.Map(document.getElementById('mapCanvas'), {
    center: latLng,
    scrollwheel: false,
    zoom: 14,
    styles: styleArray
  });

  // Create a maker and set its position.
  const marker = new google.maps.Marker({
    map: map,
    position: latLng,
    title: 'LaddyPress Magazine HQ',
    icon: image
  });

}
/* eslint-enable */
