const About = () => {
    return (  
        <div className='flex flex-col gap-4'>
            <div>
                <h2 className="text-lg">Student Software Developer @ <strong>Bell Canada</strong></h2>
                <p className="text-sm">May 2024 - August 2024</p>
            </div>
            
            <ul className="list-disc px-4">
                <li>Developed a research tool used to help find meaningful corelation within crowdsource data</li>
                <li>Made use of data science practices and Python to clean, filter and analyze large data sets and provide meaningful results.</li>
            </ul>

        </div>
    );
}
 
export default About;