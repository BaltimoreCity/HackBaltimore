var target = document.head;
var observer = new MutationObserver(function(mutations) {
    for (var i = 0; mutations[i]; ++i) { // notify when script to hack is added in HTML head
        if (mutations[i].addedNodes[0].nodeName == "SCRIPT" && mutations[i].addedNodes[0].src.match(/\/AuthenticationService.Authenticate?/g)) {
            var str = mutations[i].addedNodes[0].src.match(/[?&]callback=.*[&$]/g);
            if (str) {
                if (str[0][str[0].length - 1] == '&') {
                    str = str[0].substring(10, str[0].length - 1);
                } else {
                    str = str[0].substring(10);
                }
                var split = str.split(".");
                var object = split[0];
                var method = split[1];
                window[object][method] = null; // remove censorship message function _xdc_._jmzdv6 (AJAX callback name "_jmzdv6" differs depending on URL)
                //window[object] = {}; // when we removed the complete object _xdc_, Google Maps tiles did not load when we moved the map with the mouse (no problem with OpenStreetMap)
            }
            observer.disconnect();
        }
    }
});
var config = { attributes: true, childList: true, characterData: true }
observer.observe(target, config);

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(39.2893928, -76.6093619), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"all","stylers":[{"lightness":"29"},{"invert_lightness":true},{"hue":"#008fff"},{"saturation":"-73"}]},{"featureType":"all","elementType":"labels","stylers":[{"saturation":"-72"}]},{"featureType":"administrative","elementType":"all","stylers":[{"lightness":"32"},{"weight":"0.42"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":"-53"},{"saturation":"-66"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":"-86"},{"gamma":"1.13"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"hue":"#006dff"},{"lightness":"4"},{"gamma":"1.44"},{"saturation":"-67"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"lightness":"5"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"weight":"0.84"},{"gamma":"0.5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"weight":"0.79"},{"gamma":"0.5"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"-78"},{"saturation":"-91"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#ffffff"},{"lightness":"-69"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"5"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"10"},{"gamma":"1"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"10"},{"saturation":"-100"}]},{"featureType":"transit","elementType":"all","stylers":[{"lightness":"-35"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":"-97"},{"lightness":"-14"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker01 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2893928, -76.6093619),
        map: map,
        icon: "/hack200/images/marker01.png",
        title: "Hack Baltimore\n8 Market Place\nBaltimore, MD 21202"
    });

    var marker02 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2970765, -76.6150000),
        map: map,
        icon: "/hack200/images/marker02.png",
        title: "George Peabody Library\n17 E Mt Vernon Pl\nBaltimore, MD 21202"
    });

    var marker03 = new google.maps.Marker({
        position: new google.maps.LatLng(39.282877, -76.6188527),
        map: map,
        icon: "/hack200/images/marker03.png",
        title: "Transportation Center at Camden Yards\nBaltimore, MD 21202"
    });

    var marker04 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2921818, -76.6247766),
        map: map,
        icon: "/hack200/images/marker04.png",
        title: "Edgar Allan Poe's Grave\n515 W Fayette St\nBaltimore, MD 21202"
    });

    var marker05 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2965464, -76.5931754),
        map: map,
        icon: "/hack200/images/marker05.png",
        title: "Johns Hopkins Station\nBaltimore, MD 21202"
    });

    var marker06 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2850464, -76.5926754),
        map: map,
        icon: "/hack200/images/marker06.png",
        title: "Perkins Homes\nBaltimore, MD 21202"
    });

    var marker07 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2870464, -76.6361754),
        map: map,
        icon: "/hack200/images/marker07.png",
        title: "Perkins Homes\nBaltimore, MD 21202"
    });

    var marker08 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2914464, -76.5821754),
        map: map,
        icon: "/hack200/images/marker03.png",
        title: "Perkins Homes\nBaltimore, MD 21202"
    });

    var marker09 = new google.maps.Marker({
        position: new google.maps.LatLng(39.2795464, -76.5981754),
        map: map,
        icon: "/hack200/images/marker04.png",
        title: "Perkins Homes\nBaltimore, MD 21202"
    });
}