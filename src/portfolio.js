/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Balaji Betadur",
	logo_name: "BalajiBetadur",
	nickname: "",// nickname
	subTitle:
		"A result-oriented and passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://drive.google.com/file/d/1orD3d3S6oAz9rdY4CILmscao5hHBEnaD/view?usp=sharing",
	portfolio_repository: "https://github.com/balajibetadur",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/balajibetadur",
	linkedin: "https://www.linkedin.com/in/balaji-betadur",
	gmail: "balajibetadur@gmail.com",
	// gitlab: "https://gitlab.com/ashutoshhathidara98",
	// facebook: "https://www.facebook.com/laymanbrother.19/",
	// twitter: "https://twitter.com/ashutosh_1919",
	// instagram: "https://www.instagram.com/layman_brother/"
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website for deploying Machine Learning algorithms",
        "⚡ Building end-to-end projects",
        "⚡ Creating simple UI using flask, bootstrap, javascript"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699"
        //   }
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB"
        //   }
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB"
        //   }
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399"
        //   }
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B"
        //   }
        // }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
		  // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
		  "⚡ Deploying deep learning models on cloud",
		  "⚡ Training Deep Learning model with AutoML",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900"
        //   }
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6"
        //   }
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28"
        //   }
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791"
        //   }
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000"
          }
        }
      ]
    }
  ]
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/balajibetadur"
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638"
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919"
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB"
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother"
    // },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.github.com/balajibetadur"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/balajibetadur"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "KLS Gogte Institute of Technology",
      subtitle: "B.E. in Computer Science and Engineering",
      logo_path: "git.png",
      alt_name: "KLS GIT Belgaum",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Technology and Web Development.",
        "⚡ I won VTU state level 1st prize in collage event. I am co-ordinator and core team member of groups like Technical     Paper Presentation, Fine Arts, Design Thinking.	"
      ],
      website_link: "http://www.git.edu"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "IBM Data Science and AI Professional Certificate",
			subtitle: "- Alex Aklson",
			logo_path: "AI-DS.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/ZX3NLQJX57BA",
			alt_name: "IBM",
			color_code: "#8C151599"
		},
		{
			title: "Deep Learning Specialization",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://coursera.org/share/4e36afe7f029dba24065030beb85c328",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Advance Machine Learning with Tensorflow on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://coursera.org/share/16c02a6379c7fd65b9d5580e710a7cb3",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Tensorflow in Practise",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
			alt_name: "deeplearning.ai",
			color_code: "#1F70C199"
		},
		// {
		// 	title: "Big Data",
		// 	subtitle: "- Kim Akers",
		// 	logo_path: "microsoft_logo.png",
		// 	certificate_link:
		// 		"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
		// 	alt_name: "Microsoft",
		// 	color_code: "#D83B0199"
		// },
		{
			title: "Advanced Machine Learning",
			subtitle: "- Andrei Zimovnov",
			logo_path: "hse.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/XG7Z34SZZA5Z",
			alt_name: "HSE",
			color_code: "#1F70C199"
		},
		// {
		// 	title: "Advanced ML",
		// 	subtitle: "- GCP Training",
		// 	logo_path: "google_logo.png",
		// 	certificate_link:
		// 		"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
		// 	alt_name: "Google",
		// 	color_code: "#0C9D5899"
		// },
		{
			title: "Applied Data Science and AI Capstone Project",
			subtitle: "- Alex Aklson",
			logo_path: "cap.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/EVUR7EDZT3RR",
			alt_name: "IBM",
			color_code: "#00000099"
		},
		{
			title: "Fullstack Development",
			subtitle: "- Jogesh Muppala",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/T8VJGP44JGF6",
			alt_name: "Coursera",
			color_code: "#2A73CC"
		},
		// {
		// 	title: "Kuberenetes on GCP",
		// 	subtitle: "- Qwiklabs",
		// 	logo_path: "gcp_logo.png",
		// 	certificate_link:
		// 		"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
		// 	alt_name: "GCP",
		// 	color_code: "#4285F499"
		// },
		{
			title: "Tableau",
			subtitle: "- Govind Acharya",
			logo_path: "ucd.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/8AJ7N42LWZLD",
			alt_name: "UC Davis",
			color_code: "#FFBB0099"
		},
		{
			title: "Cloud Architecture",
			subtitle: "- Google Training",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/9EDL3NMDEYDY",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Research, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I love Teaching, Mentoring and organising events and that is why I am also involved with many mentoring volunteerships.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Research",
			experiences: [
				{
					title: "Deep Learning Research Intern",
					company: "Indian Institute of Technology, Guwahati",
					company_url: "http://www.iitg.ac.in/",
					logo_path: "iitg.png",
					duration: "June 2020 - PRESENT",
					location: "Guwahati",
					description:
						"I am working as a Deep Learning Research Intern at __ Labs, IIT Guwahati. We are focusing on Natural Language Processing and Computer Vision. Working on Automating Evaluation of Q&A system which includes various features like creativity, subjectivity and many other in data",
					color: "#0879bf",
				},
				{
					title: "Machine Learning Research Intern",
					company: "Gogte Institute of Technology, Belgaum",
					company_url: "https://www.git.edu",
					logo_path: "git.png",
					duration: "May 2018 - Oct 2018",
					location: "Belgaum, Karnataka",
					description:
					"I am working on development of Efficient Human-Machine Interaction system. It is added with auto webscraper for updating data periodically.",
					color: "#9b1578",
				},
				{
					title: "Deep Learning Research Intern",
					company: "Gogte Institute of Technology, Belgaum",
					company_url: "https://www.git.edu",
					logo_path: "git.png",
					duration: "Nov 2017 - Dec 2017",
					location: "Belgaum, Karnataka",
					description:
						"We are developing a Interactive agent for farmers to get their queries resolved with the help of Natural Language Processing. Not only providing the solution but also giving them the detailed analysis of the solution with considering different features from question using Recurrent Neural Networks",
					color: "#fc1f20",
				},
			],
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Computer Vision Intern",
					company: "Naaniz Pvt. Ltd.",
					company_url: "https://naaniz.com/",
					logo_path: "naaniz.jpg",
					duration: "May 2019 - Sept 2019",
					location: "Work From Home",
					description:
						"Naaniz is a company which allows users to sell the food online but with many advance options. I am working on image classification and object detection. We tried different algorithms and pre-trained models like ResNet50, Google AutoML vision, MobileNet, InceptionV3,EfficientNet, Yolo v4 v5, EfficientDet, Detectron and others for both classification and object detection tasks. I learnt about Docker, AutoML, GCP while working on ddeveloping models and deploying them. It was a good exposure in computer vision.",
					color: "#ee3c26",
				},
				{
					title: "Machine Learning and Python Internship",
					company: "Uniq Technologies",
					company_url:
						"https://www.uniqtechnologies.co.in/internship/bangalore/",
					logo_path: "uniq.png",
					duration: "Nov 2018 - Dec 2018",
					location: "Banglore",
					description:
						"It is a startup and my first Internship. I developed both Technical and soft skills in this Internship including Machine Learning, Flask for web development, SQL and communication skills. In this internship I was Leading a team of 5 students and at the end of the internship I was appreciated for my Leaderrship and Time management skills",
					color: "#0071C5",
				},
				{
					title: "AI - ML Internship",
					company: "IDK",
					company_url:
						"https://www.conscript.net/",
					logo_path: "cons.png",
					duration: "Nov 2018 - Dec 2018",
					location: "Work From Home",
					description:
						"The client had a requirement of a job portal. The portal takes inputs from you like location, role etc and gives you the best matching jobs. While referring a job it also includes the profile of the user and the filters he mention. It also provides the courses based on the job description. I scraped other job portals like Linkedin, Timesnow, monster.com etc",
					color: "#0071C5",
				}
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Google Developers Student Club Member",
					company: "Google",
					company_url: "https://about.google/",
					logo_path: "google_logo.png",
					duration: "May 2020 - Present",
					location: "Belgaum, Karnataka",
					description:
						"I am a part of Google developers club at GIT. We are looking forward to many initiative. I am interested in Machine Learning Facilitator role in the team.",
					color: "#4285F4",
				}				,
				{
					title: "Computer Vision Student mentor",
					company: "Girlscript Technologies",
					company_url:
						"https://www.girlscript.tech/home",
					logo_path: "gs.png",
					duration: "June 2020 - Present",
					location: "Work From Home",
					description:
						"I am working as a student mentor at girlscript. I teach computer vision to students who enroll for courses and specializations in many domains. We decide the curriculum based on students inputs and trending",
					color: "#0071C5",
				},
				{
					title: "Uplift Project Mentor",
					company: "Girlscript Foundation",
					company_url: "https://www.girlscript.tech/home",
					logo_path: "up.png",
					duration: "May 2020 - Present",
					location: "Work from home",
					description:
						"I am mentoring more than 200 students in different projects in Data Science and AI domain. The students will be working on the projects we assign we will be guiding them in the process. It is a wonderfull experience to get to know many other people and develop our network along with learning.",
					color: "#D83B01",
				},
				{
					title: "Campus Hero @ KLS GIT belgaum",
					company: "Girlscript Foundation",
					company_url: "https://www.girlscript.tech/home/",
					logo_path: "ch.png",
					duration: "May 2020 - Present",
					location: "Belgaum, Karnataka",
					description:
						"My responsibility for this program was to create awareness among students. We also conduct sessions and workshops whihc includes students from different colleges together learning",
					color: "#000000",
				},
				{
					title: "Co-ordinator and Core Team Member",
					company: "KLS Gogte Institute of Technology",
					company_url:
						"https://www.git.edu",
					logo_path: "git.png",
					duration: "Jan 2020 - Present",
					location: "Belgaum, Karnataka",
					description:
						"I am co-ordinator and Core Team member for Groups namely technical paper presentation, design Thinking, Fine arts and NSS. I also won VTU state level 1st price in collage event.",
					color: "#0C9D58",
				},
				{
					title: "Internshala Student Partner",
					company: "Internshala",
					company_url:
						"https://internshala.com/student/dashboard",
					logo_path: "is.png",
					duration: "Jan 2020 - Present",
					location: "Belgaum, Karnataka",
					description:
						"I am working as  astudent partner at internshala. We try to reach as many students as possible to share more than 25000+ internship opportunity. There is also availibility of courses in internshala in many domains.",
					color: "#0C9D58",
				}
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "circle-cropped.png",
		description:
			"I am available on almost every social media. You can message me, I will reply within 24 hours. I would love to work and help regarding ML, AI and DS.",
	},
	// blogSection: {
	// 	title: "Blogs",
	// 	subtitle:
	// 		"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
	// 	link: "https://ashutoshhathidara.wordpress.com",
	// 	avatar_image_path: "blogs_image.svg",
	// },
	addressSection: {
		title: "Address",
		subtitle:
			"Lila Nivas Kalmeshwar colony, near Mango Meadews Udyambag, Belgaum 590008",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/6sTRfASXioj9GyfC9",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 8892011406",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
