import { SiTypescript } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import './styles.css'

const Footer = () => {
    return (
        <footer className="footer">
            made with love by &nbsp;<strong>Alejandro Contreras</strong>&nbsp; using  &nbsp; <SiTypescript /> <FaHeart className="heart" />
        </footer>
    )
}

export default Footer