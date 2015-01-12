var name = "Jon Sjothun";
var role = "Product Manager";
var firstName = "Jon";
var age = 48;
var email = "sjothunj@gmail.com";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);