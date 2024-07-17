import { useState } from "react";

export default function Nav_Bar(){
    const [active, set_active] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600){
            set_active(true);
        } else {
            set_active(false);
        }
      });

    return(
        <div className={`px-8 flex items-center bg-slate-900 justify-between xl:px-24 hidden lg:flex w-screen h-12 fixed ${active ? 'visible' : 'invisible'}`}>
            <div className="flex flex-row items-center gap-4 p-8 text-md text-white h-full ">
                <button onClick={() => window.scrollTo({top:0, behavior: 'smooth'})} className="font-bold">Ashton Franklin</button>
                <button onClick={() => window.scrollTo({top:850, behavior: 'smooth'})} className="">about me</button>
                <button onClick={() => window.scrollTo({top:1500, behavior: 'smooth'})} className="">experience</button>
                <button onClick={() => window.scrollTo({top:1500, behavior: 'smooth'})} className="">projects</button>
            </div>

            <div className="flex gap-8">
                <a href="mailto: ashtonfranklin772@gmail.com"><img src={require('../email-icon.png')}/></a>
                <a href="https://www.linkedin.com/in/ashton-franklin-5a6345288/"><img src={require('../linkedin-icon.png')}/></a>
                <a target="_blank" href="https://github.com/AshtonF04"><img src={require('../github-icon.png')}/></a>
            </div>
            
        </div>
    );
}