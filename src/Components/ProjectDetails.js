const ProjectDetails = (props) => {
    return (  
    <div className='flex flex-col justify-between gap-2 border-2 border-white rounded-md p-2'>
        <div>
            <h2 className="text-lg font-bold">{props.title}</h2>
            <p>{props.body}</p>
        </div>
        
        <a className="border-2 border-blue-400 text-blue-400 w-24 text-center mt-4" href={props.link}>Visit</a>
    </div>
    );
}
 
export default ProjectDetails;