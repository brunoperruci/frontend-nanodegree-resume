var bio = {
    "name": "Bruno Perruci",
    "role": "UI Designer",
    "contacts": {
        "mobile": "+55 98276-6799",
        "email": "brunoperruci@gmail.com",
        "github": "brunoperruci",
        "location": "Olinda"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "skills": ["Adobe Master Collection", "HTML5", "CSS3", "JavaScript", "JQuery", "Git"],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [{
            "name": "Faculdades Integradas Barros Melo",
            "location": "Olinda - PE",
            "degree": "Bachelors",
            "majors": ["Graphic Design"],
            "dates": "2012 - 2015",
            "url": "http://aeso.br/"
        },
        {
            "name": "SAGA - School of Art Gaming and Animation",
            "location": "Recife - PE",
            "degree": "Specialization",
            "majors": ["Start"],
            "dates": "2011 - 2012",
            "url": "https://saga.art.br/"
        }
    ],
    "onlineCourses": [{
        "title": "Front-end Development",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }]
};

var work = {
    "jobs": [{
            "employer": "Upwork",
            "title": "Graphic Designer",
            "dates": "January, 2017 - Actual",
            "location": "Bairro Novo, Olinda",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in luctus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum leo eu rutrum faucibus. Sed rhoncus ipsum varius, efficitur tortor et, tincidunt enim. Maecenas mollis et turpis vel vulputate. Duis porttitor pellentesque felis non malesuada. Mauris at purus nec nisl malesuada placerat. Sed sagittis pharetra est, eu tristique ex interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        },
        {
            "employer": "Th9",
            "title": "Creative Art Director",
            "dates": "October, 2013 - January, 2015",
            "location": "Universidade Federal Rural de Pernambuco",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in luctus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum leo eu rutrum faucibus. Sed rhoncus ipsum varius, efficitur tortor et, tincidunt enim. Maecenas mollis et turpis vel vulputate. Duis porttitor pellentesque felis non malesuada. Mauris at purus nec nisl malesuada placerat. Sed sagittis pharetra est, eu tristique ex interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        },
        {
            "employer": "3Pontos Comunicação",
            "title": "Creative Assistant",
            "dates": "January, 2012 - August, 2013",
            "location": "Praça de Casa Forte",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in luctus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum leo eu rutrum faucibus. Sed rhoncus ipsum varius, efficitur tortor et, tincidunt enim. Maecenas mollis et turpis vel vulputate. Duis porttitor pellentesque felis non malesuada. Mauris at purus nec nisl malesuada placerat. Sed sagittis pharetra est, eu tristique ex interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        }
    ]
};

var projects = {
    "projects": [{
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
                "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/905b1743973877.5803fc4906010.jpg"
            ]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedMessage);
    $("#header").append(formattedPic);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedLocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills = [];
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            formattedSkills.push(formattedSkill);
        });
        $("#skills").append(formattedSkills);
    }
};
bio.display();

work.display = work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedJobLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedJob = formattedEmployer + formattedTitle + formattedDates + formattedDescription + formattedJobLocation;
    $(".work-entry:last").append(formattedJob);
});

projects.display = projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    if (project.images.length > 0) {
        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    }
});

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolCity = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolCity);
    if (school.majors.length > 0) {
        school.majors.forEach(function(major) {
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajors);
        });
    }
  });
    if (education.onlineCourses.length > 0) {
        education.onlineCourses.forEach(function(onlineCourse) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        });
  }
};
education.display();

$("img").css("max-height", "250px");

$("#mapDiv").append(googleMap);
