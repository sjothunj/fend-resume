/*
These are HTML strings. JavaScript functions replace the %data% placeholder text you see in them.
 */
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="title-role">%data%</span><hr/>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
var HTMLletsConnect = '<h2 class="orange center-text"><a href="%data%">Let\'s Connect</a></h2>';
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
Here's where we generate the custom Google Map for the website.
 */
var map; // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
 */
function initializeMap() {
    // array for the location data in the JSONs
    var locations = [];

    // initial latitude and longitude where the map will center when first displayed
    var initLatLng = new google.maps.LatLng(47.669571, -122.1230768);

    // Specify the various options for the initial map display
    var mapOptions = {
      center : initLatLng,
      mapTypeID : google.maps.MapTypeId.ROADMAP,
      maxZoom : 15,
      minZoom : 2,
      zoom : 13
    };

    // Creates `map`, a new Google Map JavaScript Object, and attaches it to <div id="map">
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

/*
locationFinder() populates an array of every location string from the JSONs written for bio, education, and work.
 */
    function locationFinder() {
        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        var priorLocation;
        // iterates through school locations and appends the title and address for each location to the locations array
        for (var school in education.schools) {
            if (education.schools[school].location != priorLocation) {
                locations.push(education.schools[school].location);
                priorLocation = education.schools[school].location;
            }
        }

        // reset the prior location for the work location comparison
        priorLocation = "";

        // iterates through school locations and appends the title and address for each location to the locations array
        // The different roles at the same work location won't cause duplicate entries.
        for (var job in work.jobs) {
            if (work.jobs[job].location != priorLocation) {
                locations.push(work.jobs[job].location);
                priorLocation = work.jobs[job].location;
            }
        }
        return locations;
    }
    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
     */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var placeIndex in locations) {
            // the search request object
            var request = {
                query : locations[placeIndex]
            };

            // Search Google Maps API for location data
            // Run the callback function with the search results after each search
            service.textSearch(request, callback);
        }
    }
    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
     */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
     */
    function createMapMarker(placeData) {
        // The next lines save location data from the search result object to local variables
		// if the error 'too much recursion' crops up, check the object references for geometry to make sure they are correct. <> NaN
        var lat = placeData.geometry.location.A; // latitude from the place service
        var lon = placeData.geometry.location.F; // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window. Extended for each location as needed.

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
                map : map,
                position : placeData.geometry.location,
                title : name
            });

        // Create the infoWindow for the map pin (marker)
        var infoWindow = new google.maps.InfoWindow({
                content : name
            });

        // When the user clicks on one of the map markers...
        google.maps.event.addListener(marker, 'click', function () {
        //    infoWindow.map = marker.map;
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));

        // fit the map so that the new marker is fully visible
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();
    
    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window and adjust map bounds
window.addEventListener('resize', function (e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});