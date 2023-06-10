import { Category } from "./enums"

export const LandingPage = {
    fullname: "Wei-Hsuan Wong",
    subtitle: "UI Design Engineer",
    content: "Minimalism Design",
    working_projects: "Working Projects",
    personal_projects: "Personal Projects",
    about_me: "About Me",
    visaData: {
        name: "VISA",
        list: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "jQuery", "Websocket", "React.js", "Hooks", "Context API", "Angular", "Flutter", "Kotlin", "Express.js", "MongoDB", "Mongoose"],
        title: "DESIGN ENGINEER",
        date: "AUG 2021 - PRESENT",
        content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
    },
    asusData: {
        name: "ASUS",
        list: ["JavaScript", "React.js", "Hooks", "Redux", "Redux-Thunk", "SASS", "RWD"],
        title: "FRONT-END DEVELOPER",
        date: "JULY 2020 - JUNE 2021",
        content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
    },
    advantechData: {
        name: "ADVANTECH",
        list: ["AngularJS", "JavaScript", "SVG", "CSS"],
        title: "FRONT-END DEVELOPER INTERN",
        date: "JUL - AUG 2019",
        content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
    },
    creatopData: {
        name: "CREATOP",
        list: ["JavaScript", "HTML", "SASS", "RWD"],
        title: "FRONT-END DEVELOPER INTERN",
        date: "JUNE - JUL 2018",
        content: "Are you planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
    },
    personalProjects: [
        {
            name: "Taiwan Travel Guide",
            list: ["TypeScript", "Next.js", "Hooks", "Context API", "SASS", "RWD"],
            title: "The F2E 3RD - WEEK.1",
            date: "NOV 2021",
            content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
        },
        {
            name: "Taiwan Bike Guide",
            list: ["TypeScript", "Next.js", "Hooks", "Context API", "SASS", "RWD", "MapBox"],
            title: "The F2E 3RD - WEEK.2",
            date: "NOV 2021",
            content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
        },
        {
            name: "Taiwan Bus Guide",
            list: ["TypeScript", "Next.js", "Hooks", "Context API", "SASS", "RWD", "MapBox"],
            title: "The F2E 3RD - WEEK.3",
            date: "NOV 2021",
            content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
        },
        {
            name: "ENGLISH4TW",
            list: ["TypeScript", "React Native", "Hooks", "Redux", "React Query", "Reduc Saga", "SASS"],
            title: "FREELANCE PROJECT",
            date: "MAY 2021 - PRESENT",
            content: "Are you  planning  a trip to Taiwan and looking for a detailed guide?\nHere’s an app with place to eat, stay, activites and bus in each city!",
        }
    ],
    imageList: [
        {
            title: "Husan Fu - Contact Form",
            imageUrl: "/hsuanfu1.png"
        },
        {
            title: "Husan Fu - About",
            imageUrl: "/hsuanfu2.png"
        }, {
            title: "Husan Fu - World Map",
            imageUrl: "/hsuanfu3.png"
        },
        {
            title: "Husan Fu - Design",
            imageUrl: "/hsuanfu4.png"
        },
        {
            title: "Husan Fu - Living Room",
            imageUrl: "/hsuanfu5.png"
        }, {
            title: "Husan Fu - Landing Page",
            imageUrl: "/hsuanfu6.png"
        },
        {
            title: "Husan Fu - Page Slider",
            imageUrl: "/hsuanfu7.png"
        }
    ],
    experience: {
        master: [
            {
                name: "Arriving Seattle",
                list: [
                    "Had a campus tour in the Highline college",
                    "Visited downtown Seattle."
                ],
                title: "Student",
                date: "06/2017",
            },
            {
                name: "Graduting from student",
                list: [
                    "Applied over 550 applications",
                    "COVID lockdowns began in Hoboken"
                ],
                title: "Looking for job",
                date: "05/2020",
            },
        ],
        work: [
            {
                name: "CREATOP",
                list: [
                    "Utilized SCSS and Bootstrap to enhance the responsiveness of the furniture manufacturer’s website.",
                    "Partnered with a UI designer and a Back-End developer for the execution of database designs and visualization."
                ],
                title: "FRONT-END DEVELOPER INTERN",
                date: "06/2018 - 07/2018",
            },
            {
                name: "ADVANTECH",
                list: [
                    "Leveraged Grafana’s visualization platform with AngularJS and SVG.js in an Agile-Driven environment to create user-friendly panels for water treatment management dashboard.",
                    "Improved visualizing time-series data for infrastructure and application analytics.",
                    "Won Advantech’s 2019 Summer Intern Award for excellence in team leadership and process improvements."
                ],
                title: "FRONT-END DEVELOPER INTERN",
                date: "07/2019 - 08/2019",
            },
            {
                name: "ASUS",
                list: [
                    "Contributed to developing an app with millions of active users for manipulating configuration and control of all ASUS gaming gear including RGB lightinh control, wireless mode power setting and key assignment.",
                    "Worked with engineer teams to resolve issues from different countries such as adding more keyboard layouts to fulfill users' requirements by country.",
                    "Teamed up with the cross-team to release new features supporting a mechanical keyboard with a detachable numpad."
                ],
                title: "FRONT-END DEVELOPER",
                date: "07/2020 - 06/2021",
            },
            {
                name: "VISA",
                list: [
                    "Refined the VDCA and Instant App with Kotlin used for demoing to 2000+ industry clients and partners at VISA Payments Forum.",
                    "Refactored legacy Flutter codebase based on Feature-first(Tap to Pay)",
                    "Developed a dashboard for monitoring VISA servers' real-time status using React.js, Typescript, Context API, and WebSocket, and communicated with a RESTful API built with NestJS, MongoDB, and Mongoose.",
                    "Collaberated closely with different providers of terminal payment to test UI Elements and animation using HTML, CSS, and jQuery on different sizes of Linux-based POS terminals to optimize the user experience.",
                    "Joined weekly learning sessions and shared topics including React Router, Websocket, and React State Management."
                ],
                title: "UI Engineer",
                date: "08/2021 - PRESENT",
            }
        ],
        education: [
            {
                name: "HIGHLINE COLLEGE",
                list: [
                    "Refined the VDCA and Instant App with Kotlin used for demoing to 2000+ industry clients and partners at VISA Payments Forum.",
                    "Refactored legacy Flutter codebase based on Feature-first(Tap to Pay)",
                ],
                title: "Certificate in Back-End & Front-End Website Development",
                date: "06/2017 - 06/2018",
            },
            {
                name: "STEVENS INSTITUTE OF TECHNOLOGY",
                list: [
                    "Refined the VDCA and Instant App with Kotlin used for demoing to 2000+ industry clients and partners at VISA Payments Forum.",
                    "Refactored legacy Flutter codebase based on Feature-first(Tap to Pay)",
                ],
                title: "Master of Science in Computer Science",
                date: "08/2018 - 05/2020",
            }
        ],
        project: [
            {
                name: "DEVPOST - COVID-19 Global Hackathon 1.0",
                list: [
                    "Refined the VDCA and Instant App with Kotlin used for demoing to 2000+ industry clients and partners at VISA Payments Forum.",
                    "Refactored legacy Flutter codebase based on Feature-first(Tap to Pay)",
                ],
                title: "HeartTrade",
                date: "Mar 26 – 30, 2020",
            },
            {
                name: "THE F2E 3RD",
                list: [
                    "Refined the VDCA and Instant App with Kotlin used for demoing to 2000+ industry clients and partners at VISA Payments Forum.",
                    "Refactored legacy Flutter codebase based on Feature-first(Tap to Pay)",
                ],
                title: "Taiwan Travel/ Bus/ Bike Guide",
                date: "11/2021",
            }
        ]
    },
    aboutMe: [
        {
            title: "National Kaohsiung University",
            subtitle: "BS in Mathematics",
            time: "2012 - 2016",
            location: "Kaohsiung, Taiwan",
            category: "education",
            position: "right"
        },
        {
            title: "Highline College",
            subtitle: "Cert in Back-End & Front-End Web Dev",
            time: "2017 - 2018",
            location: "Des Moines, WA",
            category: "education",
            position: "right"
        },
        {
            title: "Creatop",
            subtitle: "Front-End Intern",
            time: "2018",
            location: "Taichung, Taiwan",
            category: "internship",
            position: "left",
            list: [{
                content: "Redesigned the  furniture website to improve the issue of unorganized layout and enhance website design."
            }]
        },
        {
            title: "Stevens Institute of Technology",
            subtitle: "MS in CS",
            time: "2018 - 2020",
            location: " Hoboken, NJ",
            category: "education",
            position: "right",
            list: [
                {
                    title: "Pricov",
                    content: "Set up a platform to visualize price comparison for saving users' time and money using React.js, D3.js, and Apollo."
                },
                {
                    title: "Bookstore",
                    content: "Built a responsive bookstore app with Handlebars.js and JWT authorization, and created a CRUD RESTful API with Express, MongoDB ."
                }
            ]
        },
        {
            title: "Advantech",
            subtitle: "Front-End Intern",
            time: "2019",
            location: "Taipei, Taiwan",
            category: "internship",
            position: "left",
            list: [
                {
                    content: "Leveraged Grafana’s visualization platform with AngularJS in an Agile-Driven environment to create an user-friendly panels for water treatment management dashboard"
                }
            ]
        },
        {
            title: "DEVPOST - COVID-19 Global Hackathon 1.0",
            subtitle: "Hackathon Project",
            time: "2020",
            location: "Remote",
            category: "projects",
            position: "right",
            list: [
                {
                    content: "A platform increases efficiency of trading daily necessities with users near around current location"
                }
            ]
        },
        {

            title: "ASUS",
            subtitle: "Front-End Developer",
            time: "2020 - 2021",
            location: "Taipei, Taiwan",
            category: "fulltime",
            position: "left",
            list: [
                {
                    content: "Collaborated closely with different design teams on digital payment demo projects"
                }
            ]
        },
        {
            title: "The F2E 3rd",
            subtitle: "Hackathon Projects",
            time: "2021",
            location: "Remote",
            category: "projects",
            position: "right",
            list: [
                {
                    content: "Created platforms to assist visitors to collect information about restaurants, transportation and top attractions."
                }
            ]
        },
        {
            title: "English4TW",
            subtitle: "Freelancer Project",
            time: "2021 - Present",
            location: "Remote",
            category: "projects",
            position: "right",
            list: [
                {
                    content: "Launched an English Learning Expo React Native app using TypeScript, Redux, Redux-Saga, and React Query"
                }
            ]
        },
        {

            title: "VISA",
            subtitle: "UI Design Engineer",
            time: "2021 - Present",
            location: "Austin, TX",
            category: "fulltime",
            position: "left",
            list: [
                {
                    content: "Collaborated closely with different design teams on digital payment demo projects"
                }
            ]
        }
    ]
}

export const FooterAssets = {
    title: "Contact",
    copyright: "© 2023 WEIHSUAN WONG"
}

export const GlobalAssets = {
    navList_LandingPage: ["Top", "Work Project", "Personal Project", "About Me"]
}

export enum Experience {
    MASTER,
    WORK,
    EDUCATION,
    PROJECT
}