const projectList = [
    {
        name: "HR Portal",
        description : `HR Portal is a CRUD app designed to help businesses manage their employees. The
            back-end consist of a Nodejs server using Expressjs to render handlebar views. The server also handles authentication, authorization, validation and
            errors.`,
        image: "/images/hr1.png",
        live: "https://hr-portal-myapp.herokuapp.com/",
        source: "https://github.com/jianylei/hr-portal",
        color: "white",
        skill: [{
            name: "JavaScript"
        },{
            name: "NodeJs"
        },{
            name: "ExpressJs"
        },{
            name: "PostgreSQL"
        },{
            name: "MongoDB"
        },{
            name: "Bootstrap"
        }]
    },{
        name: "myMusicApp",
        description : `Application utilizes Spotify's API for data. The back-end handles authentification and 
        authorization, created with Express.js, which also communicates with a MongoDB database for user data. 
        Front-end built with Angular + Material UI.`,
        image: "/images/myMusicApp1.png",
        live: "https://music-app-422.netlify.app",
        source: "https://github.com/jianylei/myMusicApp",
        color: "white",
        skill: [{
            name: "MongoDB"
        },{
            name: "ExpressJs"
        },{
            name: "Angular"
        },{
            name: "NodeJs"
        },{
            name: "Material UI"
        }]
    },{
        name: "NY Restaurants",
        description : `App visualizes data pertaining to local New York Restaurants. The back-end consist
            of a REST api which handles data from MongoDB. Front-end developed with React + Bootstrap,
            also utilizing Leaflet to generate maps.`,
        image: "/images/nyrestaurant1.png",
        live: "https://ny-restaurants-jyl.vercel.app/restaurants",
        source: "https://github.com/jianylei/NY_restaurants",
        color: "white",
        skill: [{
            name: "MongoDB"
        },{
            name: "ExpressJs"
        },{
            name: "React"
        },{
            name: "NodeJs"
        },{
            name: "Bootstrap"
        }]
    },{
        name: "myLibrary",
        description : `Front-end CRUD app aimed to help readers keep track of their reading progress.
            As it stands, MyLibrary has full CRUD functionalities integrated with localStorage along with a
            responsive UI for both desktops and mobile.`,
        image: "/images/mylibrary1.png",
        live: "https://jianylei.github.io/myLibrary/",
        source: "https://github.com/jianylei/myLibrary",
        color: "white",
        skill: [{
            name: "JavaScript"
        },{
            name: "HTML"
        },{
            name: "CSS"
        },{
            name: "Bootstrap"
        }]
    },{
        name: "Resume Builder",
        description : `Front-end application to help users create professional resumes. Utilizing React states and hooks, the app will give user a live preview
            of their resume as they input their information.`,
        image: "/images/resumebuilder1.png",
        live: "https://jianylei.github.io/resume-builder/",
        source: "https://github.com/jianylei/resume-builder",
        color: "white",
        skill: [{
            name: "JavaScript"
        },{
            name: "HTML"
        },{
            name: "CSS"
        },{
            name: "React"
        }]
    },{
        name: "Assembly Line",
        description : `Final term project putting C++ Object Oriented skills to practice by developing a simulation of an assembly line. 
        Project was completed by  utilizing various OOP concepts such as inheritaance, encapsulation, polymorphism, data abstraction, 
        along with STL contaioners and algorithms.`,
        image: "/images/oop1.png",
        source: "https://github.com/jianylei/assembly-line-oop345",
        color: "white",
        skill: [{
            name: "C++"
        }]
    }
]

export default projectList