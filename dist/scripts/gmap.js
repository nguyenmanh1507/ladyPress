"use strict";function initMap(){var e=[{featureType:"administrative",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#0066ff"},{saturation:74},{lightness:100}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"off"},{weight:.6},{saturation:-85},{lightness:61}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{color:"#5f94ff"},{lightness:26},{gamma:5.86}]}],i={lat:20.850277,lng:106.69105},l="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Lollipop-48.png",t=new google.maps.Map(document.getElementById("mapCanvas"),{center:i,scrollwheel:!1,zoom:14,styles:e});new google.maps.Marker({map:t,position:i,title:"LaddyPress Magazine HQ",icon:l})}