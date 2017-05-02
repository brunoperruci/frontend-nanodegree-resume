/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   name: "Bruno Perruci",
   role: "UI Designer",
   contact: {
     email: "brunoperruci@gmail.com",
     linkedin: "brunoperruci",
   },
   picture: "images/me.jpg",
   welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   skills: ["Adobe Master Collection", "HTML5", "CSS3", "JavaScript", "JQuery", "Git"]
 }

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedContact = HTMLemail.replace("%data%", bio.contact.email);
  var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").prepend(formattedPic);
$("#header").append(formattedContact);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcome);
