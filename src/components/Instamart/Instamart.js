import { useState } from "react"

const Section=({title,description})=>{
    const [visible,set_visible]=useState(false);
    return(
        <>
        <h5 className="text-3xl">{title}</h5>
        {visible?<button onClick={()=>set_visible(false)}>Hide</button>:<button onClick={()=>set_visible(true)}>Show</button>}
        {visible && <p>{description}</p>}
        </>
    )
}

const Instamart=()=>{
    return(
        <>
        <Section title={"Box1"} description={"Order food"}/>
        <Section title={"Box2"} description={"Order food 2"}/>
        <Section title={"Box3"} description={"Order food 3"}/>
        </>
    )
}
export default Instamart;