// import {FaBeer} from "react-icons/fa"
import React from 'react';
// import ReactDOM from 'react-dom';



export default function Projects({id, img, name, description}) {
    

    return(
        <>
            <div className="project-card" key={id}>
                <img src={img} alt="" className="project-img" width={100}/>
                <div className="project-desc">
                    <h4>
                        {name}
                        
                    </h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}