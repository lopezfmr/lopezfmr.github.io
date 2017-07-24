
//add contact information
$("#role").prepend(boutMe.role);
$("#name").prepend(boutMe.name);

//Contact Info 
var HTMLmobile = '<li class="flex-item"><span class="color-primary-4">mobile:</span><a href="tel:%anchor%" target="_top" class="color-primary-1">%data%</a></li>';
var anchorMobile = HTMLmobile.replace("%anchor%", boutMe.contacts.mobile);
var formattedMobile = anchorMobile.replace("%data%", boutMe.contacts.mobile);

var HTMLemail = '<li class="flex-item"><span class="color-primary-4">email:</span><a href="mailto:%anchor%" target="_top" class="color-primary-1">%data%</a></li>';
var anchorEmail = HTMLemail.replace("%anchor%", boutMe.contacts.email);
var formattedEmail = anchorEmail.replace("%data%",boutMe.contacts.email);

var HTMLlinkedin = '<li class="flex-item"><span class="color-primary-4">linkedIn:</span><a href="https://www.linkedin.com/in/%anchor%/ target="_blank" class="color-primary-1">%data%</a></li>';
var anchorLinkedIn = HTMLlinkedin.replace("%anchor%", boutMe.contacts.linkedin);
var formattedLinkedIn = anchorLinkedIn.replace("%data%", boutMe.contacts.linkedin);

var HTMLlocation = '<li class="flex-item"><span class="color-primary-4">location:</span><span class="color-primary-1">%data%</span></li>';
var formattedLocation = HTMLlocation.replace("%data%",boutMe.contacts.location);

$("#topContactInfo").append(formattedMobile + formattedEmail + formattedLinkedIn + formattedLocation)
$("#footerContactInfo").append(formattedMobile + formattedEmail + formattedLinkedIn + formattedLocation)

//bio Pic, welcome message, and kills
var HTMLbioPic = '<img src="%data%s" class="biopic">';
var formattedBioPic = HTMLbioPic.replace("%data%", boutMe.bioPic);
$("#header").append(formattedBioPic);

var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",boutMe.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="color-primary-1">%data%</span></li>';
if (boutMe.skills.length > 0 ){
    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < boutMe.skills.length; skill++) {
        var formattedSkill = HTMLskills.replace("%data%", boutMe.skills[skill]);
        $("#skills").append(formattedSkill);
    }
};

//WORK INFORMATION
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

function displayWork() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployeeTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployeeTitle);
        
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	    $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
displayWork();

//PROJECTS SECTION
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

projects.display = function(){
  for (var project = 0; project < projects.projects.length; project++){
      //console.log(projects.projects[project].title);
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", professional.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", professional.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", professional.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);
      if (professional.projects[project].images.length > 0){
          for (var image = 0; image < professional.projects[project].images.length; image++){
              var formatteProjectImage = HTMLprojectImage.replace("%data%", professional.projects[project].images[image]);
              $(".project-entry:last").append(formatteProjectImage);
          }
      }
  }  
};
projects.display();

//EDUCATION INFORMATION

//education related
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

function displaySchools(){
    for (var school=0; school < education.schools.length; school++){
        $("#education").append(HTMLschoolStart);
        
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolMajor);
    };
};
displaySchools();

//online classes
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineStart = '<div class="online-entry"></div>'
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

function displayOnlineCourses(){
    $("#education").append(HTMLonlineClasses);
    for (var course=0; course < education.onlineCourses.length; course++){
        $("#education").append(HTMLonlineStart);
        
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".online-entry:last").append(formattedOnlineDate);
    };
};
displayOnlineCourses();

/* Google Map for the website */
var googleMap = '<div id="map"></div>';
var map;
function initializeMap() {
    var locations;
    var mapOptions = {
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);
    function locationFinder() {
        var locations = [];
        locations.push(boutMe.contacts.location);
        education.schools.forEach(function(school){
            locations.push(school.location);
        });
        work.jobs.forEach(function(job){
            locations.push(job.location);
        });
        return locations;
    }
    function createMapMarker(placeData) {
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map,marker);
        });
        bounds.extend(new google.maps.LatLng(lat, lon));
        map.fitBounds(bounds);// fit the map to the new marker
        map.setCenter(bounds.getCenter());// center the map
    }
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          createMapMarker(results[0]);
        }
    }
    function pinPoster(locations) {
        var service = new google.maps.places.PlacesService(map);
        locations.forEach(function(place){
            var request = {
                query: place
            };
            service.textSearch(request, callback);
        });
    }
    window.mapBounds = new google.maps.LatLngBounds(); // Sets the boundaries of the map based on pin locations
    locations = locationFinder();
    pinPoster(locations); // creates pins on the map for each location
}
window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
    map.fitBounds(mapBounds);
});

$("#mapDiv").append(googleMap);

//add scroll spy
$('body').scrollspy({ target: '#navbar-mainTop' })
