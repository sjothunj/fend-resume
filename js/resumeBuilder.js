var bio = {
    "name": "Jon Sjothun",
    "role": "Product Manager",
    "welcomeMessage": "Knowledge is not like money. <br> Sharing it with others doesn't mean that you know any less!",
    "contacts": {
        "email": "sjothunj@gmail.com",
        "cellPhone": "(206) 227-5337",
        "workPhone": "(425) 281-3154",
        "city": "Seattle",
        "location" : "4535 91st Avenue Southeast, Mercer Island, WA",
        "github": "sjothunj",
        "linkedin": "https://www.linkedin.com/pub/jon-sjothun/0/119/430"
    },
    "picture": "http://www.sjothun.com/img/main/Jon_kayak2.jpg",
    "skills": [
        "product management",
        "project management",
        "systems analysis and design",
        "team building",
        "javascript (almost)"
    ],
    displayBio: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedContact = HTMLcontactGeneric.replace("%data%", bio.name);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cellPhone);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.city);
        var formattedPictureURL = HTMLbioPic.replace("%data%", bio.picture);
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#topMessage").append(formattedPictureURL);
        $("#topMessage").append(formattedWelcome);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        var formattedSkillset = "";
        var skillsIndex = bio.skills.length;
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        };
        for (var i = 0; i < skillsIndex; i++) {
            formattedSkillset = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkillset);
        };
    }
};

var work = {
    "jobs" : [
    {
        "employer" : "AT&T, Inc.",
        "title" : "Area Manager - Technology Development",
        "city" : "Seattle, WA USA",
        "location" : "16221 NE 72nd Way, Redmond, WA",
        "dates" : "2010 - Present",
        "description" : "Project lead for definition, implementation, certification and lifecycle/sustainment for Industrial IoT solutions. Lead for 3rd party solutions integration, certification and delivery to the Business Markets Group for numerous vertical solutions (Transportation, SFA, FFM, etc.)"
    },
    {
        "employer" : "AT&T, Inc.",
        "title" : "Lead Product Realization Manager",
        "city" : "Redmond, WA USA",
        "location" : "16221 NE 72nd Way, Redmond, WA",
        "dates" : "2005 - 2010",
        "description" : "Manager for 3rd party software development, certification and delivery for enterprise service offerings."
    },    
    {
        "employer" : "AT&T, Inc.",
        "title" : "Senior Product Realization Manager",
        "city" : "Redmond, WA USA",
        "location" : "16221 NE 72nd Way, Redmond, WA",
        "dates" : "2002 - 2005",
        "description" : "Technical Product Manager for next-generation Voice Enabled products/services and enterprise Location Based Services and Products"
    },    
    {
        "employer" : "Openwave Systems, Inc.",
        "title" : "Director, Global Solutions Group - Americas",
        "city" : "Bellevue, WA USA",
        "location" : "205 108th Ave NE, Bellevue, WA",
        "dates" : "2001 - 2002",
        "description" : "Responsible for media development and delivery of corporate product and service strategy to key customers within the Americas region"
    },    
    {
        "employer" : "Aether Systems, Inc.(RTS Wireless)",
        "title" : "Director of Product Management",
        "city" : "Seattle, WA USA",
        "location" : "Seattle, WA USA",
        "dates" : "1999 - 2001",
        "description" : "Managed team of product managers, responsible for product portfolio. Planned and executed platform technology roadmap and restructured pricing and cost centers to effectively fund R&D, software development & maintenance and support operations. Jointly developed customer support policy for products e.g. Service philosophy, maintenance programs, cost structures, etc. Created and staffed a new group of Systems Engineering/Sales Engineering to support pre and post sales and support activities and new product launches."
    },    
    {
        "employer" : "Aether Systems, Inc.(RTS Wireless)",
        "title" : "Western Regional Sales Manager",
        "city" : "Seattle, WA USA",
        "location" : "Seattle, WA USA",
        "dates" : "1998- 1999",
        "description" : "Managed numerous customer accounts, e.g. VoiceStream Wireless (T-Mobile), AirTouch Cellular (Verizon Wireless), CellularOne San Francisco (AT&T Wireless), USWest Cellular (Qwest Wireless). Grew annual regional revenues from less than $500K to just over $3.8M"
    },    
    {
        "employer" : "Logica Aldiscon Inc.",
        "title" : "Product Specialist",
        "city" : "Seattle, WA USA",
        "location" : "505 Pike Street, Seattle, Washington",
        "dates" : "1998",
        "description" : "Authored RFP responses, numerous whitepapers, technical sales support materials, sales collateral, product presentations and overview documents. Performed customer requirements capture and analysis for accounts within the Americas region"
    },
    {
        "employer" : "Logica Aldiscon Inc.",
        "title" : "Product Manager",
        "city" : "Dublin, OH USA",
        "location" : "211 Bradenton Ave, Dublin, Ohio",
        "dates" : "1997 - 1998",
        "description" : "Responsible for P&L of the Telepath SMSC and application products"
    },    
    {
        "employer" : "Logica Aldiscon Inc.",
        "title" : "Regional Sales Manager",
        "city" : "Dublin, OH USA",
        "location" : "211 Bradenton Ave, Dublin, Ohio",
        "dates" : "1995 - 1997",
        "description" : "Accounts Managed included Bell Atlantic NYNEX Mobile, BellSouth Cellular Corporation, BellSouth Personal Communications, PrimeCo Personal Communications, GTE Mobilnet, Microcell. Top account revenue in Americas Region (1995, 1996 and 1997); Third Globally (1997)"
    },
    {
        "employer" : "Logica Aldiscon Inc.",
        "title" : "Applications Product Manager",
        "city" : "Dublin, OH USA",
        "location" : "211 Bradenton Ave, Dublin, Ohio",
        "dates" : "1994 - 1995",
        "description" : "Responsible for P&L of Telepath SMSC application product family. Managed ongoing releases for application modules, supporting a variety of protocols such as SMPP, TNPP, TAP, SMTP, UCP, OCL, etc."
    },
    {
        "employer" : "Logica Aldiscon Inc.",
        "title" : "Systems Engineer",
        "city" : "Dublin, OH USA",
        "location" : "211 Bradenton Ave, Dublin, Ohio",
        "dates" : "1993 - 1994",
        "description" : "Authored and coordinated RFP responses, product and technology whitepapers, sales collateral and product  presentations; Performed product feature and customer requirements capture and analysis,  technical sales presentations, systems analysis & design"
    },
    {
        "employer" : "Aldiscon Inc.",
        "title" : "Systems Analyst",
        "city" : "Dublin, Ireland",
        "location" : "Hambledon House, Pembroke Street Lower, Dublin, Ireland",
        "dates" : "1993 - 1994",
        "description" : "Technical design and analysis for a variety of telecom client projects including ESB-IC"
    },
    {
        "employer" : "Barclays DeZoete Wedd, plc.",
        "title" : "Senior Analyst",
        "city" : "London, UK",
        "location" : "Riverbank House, 2 Swan Lane, London EC4R",
        "dates" : "1992 - 1993",
        "description" : "Analyst for stock market trade settlement system for then newly-computerized London Stock Exchange"
    },
    {
        "employer" : "British Road Services, plc.",
        "title" : "Analyst Programmer",
        "city" : "Bedford, UK",
        "location" : "The Merton Center, Bedford MK40 2UB, United Kingdom",
        "dates" : "1989 - 1992",
        "description" : "Analyst programmer for computerization of the company's various transportation/freight management divisions"
    }
    ],
    displayWork: function () {
        var soManyJobs = work.jobs.length;
        for (var jobIndex = 0; jobIndex < soManyJobs; jobIndex++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobIndex].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[jobIndex].title);
            var formattedEmployerTitle = (formattedEmployer+formattedTitle);
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%",(work.jobs[jobIndex].dates));
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[jobIndex].city);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[jobIndex].description);
            $(".work-entry:last").append(formattedDescription);
        };
    }
};

var proj = {
    "projects" : [
    {
    "title" : "Udacity - Front-End Web Developer Nanodegree (in progress)",
    "description" : "Online HTML and Javascript course for developing responsive web-based solutions",
    "image" : "images/Udacity_logo_vert_orange_464x500.png",
    "dates" : [
        2015
        ]
    }],
    displayProjects:function () {
        for (projects in proj.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",proj.projects[projects].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",(proj.projects[projects].dates));
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",proj.projects[projects].description);
            $(".project-entry:last").append(formattedProjectDescription);
            var formattedProjectImage = HTMLprojectImage.replace("%data%",proj.projects[projects].image);
            $(".project-entry:last").append(formattedProjectImage);
        };
    }
};

var education = {
    "schools": [
        {
            "name": "Galway/Mayo Institute of Technology",
            "city": "Galway, Ireland",
            "location": "GMIT, Dublin Road, Galway, Ireland",
            "degree": "National Diploma in Computer Science",
            "major": [
                "Systems Analysis & Design"
            ],
            "dates": [1988]
        },
        {
            "name": "Galway/Mayo Institute of Technology",
            "city": "Galway, Ireland",
            "location": "GMIT, Dublin Road, Galway, Ireland",
            "degree": "National Certificate in Computer Science",
            "major": [
                "Computer Programming"
            ],
            "dates": [1987]
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": [2015],
            "url": "http://www.udacity.com/course/ud304"
        },
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": [2015],
            "url": "http://www.udacity.com/course/ud804"
        }
    ],
    displayEducation:function () {
        for (schools in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("%data%",education.schools[schools].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
            var formattedSchoolDegree = (formattedSchool+formattedDegree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedDates = HTMLschoolDates.replace("%data%",(education.schools[schools].dates));
            $(".education-entry:last").append(formattedDates);
            var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[schools].city);
            $(".education-entry:last").append(formattedCity);
            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[schools].major);
            $(".education-entry:last").append(formattedMajor);
        };
        $(".education-entry:last").append(HTMLonlineClasses);
        for (onlineCourses in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourses].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourses].school);
            var formattedOnlineTitleSchool = (formattedOnlineTitle+formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",(education.onlineCourses[onlineCourses].dates));
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourses].url);
            $(".education-entry:last").append(formattedOnlineURL);
        };
    }
};

var connection = {
    "linkedin": "https://www.linkedin.com/pub/jon-sjothun/0/119/430",
    displayConnection: function () {
        var formattedConnect = HTMLletsConnect.replace("%data%",connection.linkedin);
        $("#letsConnect").append(formattedConnect);
    }
};

bio.displayBio();
work.displayWork();
proj.displayProjects();
education.displayEducation();
connection.displayConnection();

$("#mapDiv").append(googleMap);