import { headers } from "next/dist/client/components/headers"
import "./header.css"

function Navbar() {
    return (
        <div className="Profile">
            <div className="imge">
                <img src="https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg" alt="#" className="image" />
                <h1 className="name">Elon Mask</h1>
            </div>
            <ul className="list">
                <li className="listitem">Date of birth and age</li>
                <li className="listitem">Money</li>
                <li className="listitem">Place of residence</li>
            </ul>
        </div>
    )
}


export default Navbar