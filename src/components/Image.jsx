import home from "../images/HOME.jpg"
import football from "../images/FOOTBALL.png"
import cooking from "../images/COOKING.png"
import coding from "../images/CODING.png"


function Image({imageDescriptor}){
    switch (imageDescriptor){
        case "home":
        return (<img className = "header-img" src = {home}/>)
        case "football":
        return (<img className = "header-img" src = {football}/>)
        case "cooking":
        return (<img className = "header-img" src = {cooking}/>)
        case "coding":
        return (<img className = "header-img" src = {coding}/>)
    }
    
}

export default Image