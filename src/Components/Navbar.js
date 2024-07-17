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
        <div class={`px-8 xl:px-24 hidden lg:block w-screen h-10 fixed ${active ? 'visible' : 'invisible'}`}>
            <div className="flex flex-row items-center gap-4 p-8 text-md text-white h-full bg-slate-900">
                <a rel="noopener" href="#About" class="font-bold transition ease-in-out hover:text-slate-400 underline-effect">Ashton Franklin</a>
                <a rel="noopener" href="#About" class="transition ease-in-out hover:text-slate-400 underline-effect">About</a>
                <a rel="noopener" href="#About" class="transition ease-in-out hover:text-slate-400 underline-effect">Experience</a>
                <a rel="noopener" href="#About" class="transition ease-in-out hover:text-slate-400 underline-effect">Projects</a>
            </div>
            
        </div>
    );
}