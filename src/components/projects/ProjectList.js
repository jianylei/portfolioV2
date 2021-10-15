const projectList = [
    {
        name: "HR Portal",
        description : `HR Portal is a full-stack HR CRUD app designed to help businesses manage their employees. The
            back-end consist of a Nodejs server using Expressjs to render handlebars views with data from
            PostgreSQL and MongoDB. The server also handles authentication, authorization, validation and
            errors.`,
        image: "/images/hr-min.jpg",
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
        name: "NY Restaurants",
        description : `“NY Restaurants” visualizes data pertaining to local New York Restaurants. The backend consist
            of a REST api which handles data from MongoDB. Front-end developed with React and Bootstrap,
            also utilizing Leaflet to generate maps.`,
        image: "/images/nyrestaurant-min.jpg",
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
        description : `MyLibrary is a front-end CRUD app aimed to help readers keep track of their reading progress.
            As it stands, MyLibrary has full CRUD functionalities integrated with localStorage along with a
            responsive UI for both desktops and mobile.`,
        image: "/images/mylibrary-min.jpg",
        live: "https://jianylei.github.io/myLibrary/",
        source: "https://github.com/jianylei/myLibrary",
        color: "black",
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
        description : `Resume Builder is a front-end app that aims to help eliminate most of the hassle that come with
            building a resume. Utilizing React states and hooks, the app will give the user a live preview
            of the resume as they input their information.`,
        image: "/images/resumebuilder-min.jpg",
        live: "https://jianylei.github.io/resume-builder/",
        source: "https://github.com/jianylei/resume-builder",
        color: "black",
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
        name: "Todo List",
        description : `Simple to-do list created as an introduction to reactJS. Items can be deleted or marked as
            completed, which can then be
            filtered through. List is automatically saved within the browser with the use of localStorage.`,
        image: "/images/todo-min.jpg",
        live: "https://jianylei.github.io/todo-list-react/",
        source: "https://github.com/jianylei/todo-list-react",
        color: "black",
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
        description : `The purpose of this term project is to put your C++ Object Oriented skills to practice by developing a simulation of an assembly line with any number of stations. Skills and concepts used in this project include but are not limited to: the four principles of
        OOP,
        the rule of three/five, STL containers and algorithms, class templates, and error handling.`,
        image: "/images/oop.png",
        source: "https://github.com/jianylei/assembly-line-oop345",
        color: "black",
        skill: [{
            name: "C++"
        }]
    }
]

export default projectList