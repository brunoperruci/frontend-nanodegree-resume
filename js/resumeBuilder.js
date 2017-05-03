 var bio = {
   "name": "Bruno Perruci",
   "role": "UI Designer",
   "contact": {
     "mobile": "+55 98276-6799",
     "email": "brunoperruci@gmail.com",
     "github": "brunoperruci",
     "location": "Olinda"
   },
   "welcomeMessage": "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   "skills": ["Adobe Master Collection", "HTML5", "CSS3", "JavaScript", "JQuery", "Git"],
   "picture": "images/fry.jpg"
 }

 var education = {
   "schools": [
     {
       "name": "Faculdades Integradas Barros Melo",
       "city": "Olinda - PE",
       "degree": "Bachelors",
       "majors": "Graphic Design",
       "dates": 2012
     },
     {
       "name": "SAGA - School of Art Gaming and Animation",
       "city": "Recife - PE",
       "degree": "Specialization",
       "majors": "Start",
       "dates": 2011
     }
   ],
   "onlineCourses": [
     {
       "title": "Front-end Development",
       "school": "Udacity",
       "dates": 2017,
       "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
     }
   ]
 }

 var work = {
   "jobs": [
     {
       "employer": "Upwork",
       "title": "Graphic Designer",
       "dates": "January, 2017 - Actual",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in luctus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum leo eu rutrum faucibus. Sed rhoncus ipsum varius, efficitur tortor et, tincidunt enim. Maecenas mollis et turpis vel vulputate. Duis porttitor pellentesque felis non malesuada. Mauris at purus nec nisl malesuada placerat. Sed sagittis pharetra est, eu tristique ex interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus."
     },
     {
       "employer": "Th9",
       "title": "Creative Art Director",
       "dates": "October, 2013 - January, 2015",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in luctus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum leo eu rutrum faucibus. Sed rhoncus ipsum varius, efficitur tortor et, tincidunt enim. Maecenas mollis et turpis vel vulputate. Duis porttitor pellentesque felis non malesuada. Mauris at purus nec nisl malesuada placerat. Sed sagittis pharetra est, eu tristique ex interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus."
     },
     {
       "employer": "3Pontos Comunicação",
       "title": "Creative Assistant",
       "dates": "January, 2012 - August, 2013",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in luctus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum leo eu rutrum faucibus. Sed rhoncus ipsum varius, efficitur tortor et, tincidunt enim. Maecenas mollis et turpis vel vulputate. Duis porttitor pellentesque felis non malesuada. Mauris at purus nec nisl malesuada placerat. Sed sagittis pharetra est, eu tristique ex interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus."
     }
   ]
 }

 var projects = {
   "projects": [
     {
       "title": "Branding @ Release",
       "dates": "2014",
       "description": "Branding for Release application. Release is an RSS reader application, which aims to integrate all subjects and classify them according to user preference.",
       "images": [
         "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ca3c1243966179.5803b7d4a8a9e.jpg",
         "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/84994f43966179.5803b7d538ec4.jpg",
         "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/f1a96943966179.5803b7d661bc7.jpg"
       ]
     },
     {
       "title": "Branding @ Diligento",
       "dates": "2014",
       "description": "Diligento is a mobile app which finds remote legal partners.",
       "images": [
         "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/73de7043973877.5803fc48cbe5d.jpg",
         "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ccb43d43973877.5803fc4905290.gif",
         "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ab18e243973877.5803fc49058f1.jpg",
         "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/905b1743973877.5803fc4906010.jpg"
       ]
     }
   ]
 }

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  // var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
  // var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
  var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
  // var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  // var formattedSkills = HTMLskills.replace("%data%", bio.skills);
  //
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  // $("#header").append(formattedEmail);
  // $("#header").append(formattedMobile);
  $("#header").append(formattedPic);
  // $("#header").append(formattedWelcome);
  // $("#header").append(HTMLskillsStart);
  // $("#header").append(formattedSkills);


  if(bio.skills.length > 0) { //skills display
      $("#header").append(HTMLskillsStart);
      $("#skills").append(function() {
        var formattedSkill = [];
        for (var i = 0; i <= bio.skills.length - 1; i++) {
            var skill = HTMLskills.replace("%data%", bio.skills[i]);
            formattedSkill.push(skill);
        } return formattedSkill;
      });
  }

function displayWork() {
  for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedJob = formattedEmployer + formattedTitle + formattedDate + formattedDescription;
      $(".work-entry:last").append(formattedJob);
  }
} //work display //work display
displayWork();

$(document).click(function(loc) {
   // your code goes here
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
 });

/* InternationalizeButton \*
 $("#main").append(internationalizeButton);
 function inName() {
   var internationalName = bio.name.split(" ");
   var firstName = internationalName[0][0].toUpperCase() + internationalName[0].slice(1).toLowerCase();
   var secondName = internationalName[1].toUpperCase();
   return firstName + " " + secondName;
}
*/
// teacher code (not working)
// projects.display = function() {
//   for (project in projects.projects) {
//     $("#projects").append(HTMLprojectStart);
//     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
//     $(".project-entry:last").append(formattedTitle);
//     var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
//     $(".project-entry:last").append(formattedDates);
//     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
//     $(".project-entry:last").append(formattedDescription);
//   }
// }

projects.display = function() {
  for (i = 0; i <= projects.projects.length - 1; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedProjectDescription);
    if (projects.projects[i].images.length > 0) {
      for (x = 0; x <= projects.projects[i].images.length - 1; x++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();
