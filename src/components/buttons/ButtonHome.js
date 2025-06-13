import "./ButtonHome.css";

function ButtonHome({ text, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="button-home">
            {text}
        </a>
    );
}

export default ButtonHome;
