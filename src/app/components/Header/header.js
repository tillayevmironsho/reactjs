import { headers } from "next/dist/client/components/headers"
import "./header.css"

function Navbar() {
    return (
        <div className="Profile">
            <div className="imge">
                <img src="https://picsum.photos/100" alt="#" className="image" />
                <h1 className="name">Ilon Mask</h1>
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