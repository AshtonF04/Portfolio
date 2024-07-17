const About = () => {
    return (  
        <div className='flex flex-col md:flex-row p-4 gap-12 items-center'>
            <img className='rounded-xl' src={require('../profile-image.jpg')}></img>
            <div className='flex flex-col gap-4'>
                <p>I am currently a third year student at <strong>The University of Western Ontario</strong> studying <strong>Computer Science</strong>. My main interests in the field are <strong>Web Development</strong> & <strong>Mobile App Development</strong>.</p>
                <p>I am also a <strong>Student Software Developer</strong> at <strong>Bell Canada</strong>. In this position I work alongside a team to manage propagation modelling, my daily work primarily involves working with the Python Pandas library for data analysis of models and other data, as well as using C# for certain processing tasks. </p>
                <p>Outside work and academics, I enjoy golfing in the spring and summer seasons, watching the Premier League and anime, and working on side projects I find interesting or fun to develop!</p>
            </div>
        </div>
    );
}
 
export default About;