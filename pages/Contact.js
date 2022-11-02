import {motion as mo} from "framer-motion"
import {container, element} from "../animate.js"


export default function Contact () {
    return (
        <mo.main initial = {{y: "100%"}} animate = {{y : 0}} 
        transition = {{duration: 0.75, ease: "easeOut"}} exit = {{opaicty: 1}} className = " text-gray-900 absolute top-0 left-0 w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 lg:px-30 px-10">
            
            <div className="my-96 p-1 overflow-hidden">
                <mo.h1 
                initial = {{y:"100%"}} 
                animate = {{y: 0}} 
                transition = {{delay: 0.5, duration: 0.5, ease: "easeOut"}} 
                className='p-1 text-5xl text-center lg:text-right lg:text-7xl'>Let's connect!</mo.h1>
            </div>

            <div className="flex gap-40">

                <div className="lg:text-2xl text-base">
                    <h4>Find us: </h4>
                </div>
                <div className="lg:text-4xl text-2xl underline py-4">
                    <mo.ul variants = {container} initial = "hidden" animate = "animated" >
                        
                        <div className="overflow-hidden">
                            <mo.li variants={element} className="pb-4">LinkedIn</mo.li>
                        </div>

                        <div className="overflow-hidden">
                            <mo.li variants={element} className="pb-4">Twitter</mo.li>
                        </div>

                        <div className="overflow-hidden">
                            <mo.li variants={element} className="pb-4">Instagram</mo.li>
                        </div>

                        <div className="overflow-hidden">
                            <mo.li variants={element} className="pb-4">Youtube</mo.li>
                        </div>
                        
                    </mo.ul>
                </div>

            </div>

        </mo.main>
    );
}