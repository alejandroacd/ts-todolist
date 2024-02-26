import { SiTypescript } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import './styles.css'

const Footer = () => {
    return (
        <footer className="footer">
            Made it with love by  &nbsp; <span className="footer_span"> Alejandro Contreras</span>  &nbsp; using  &nbsp; <SiTypescript size={20} /> <FaHeart className="heart" size={20} />
        </footer>
    )
}

export default Footer