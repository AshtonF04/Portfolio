import ProjectDetails from "./ProjectDetails";

const Projects = () => {
    return (  
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <ProjectDetails title='Etch-a-Sketch' link='https://ashtonf04.github.io/pixel-draw/' body='A web based pixel art editor developed using HTML, CSS, and JavaScript.'/>
            <ProjectDetails title='Workout Buddy' link='https://github.com/AshtonF04/workout-buddy' body='A full stack web application that allows user to track workouts and information. Built using React, NodeJS, and MongoDB'/>
            <ProjectDetails title='Micro Blog' link='https://github.com/AshtonF04/micro-blog' body='A front end web application allowing users to create and upload blogs. Built using React'/>
        </div>
    );
}
 
export default Projects;