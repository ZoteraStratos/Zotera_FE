import "../../style/style.css";

const Loader = (props) => (
    <span>
        <div className="spinner" />
        <span className="spinner-text">{props.children}</span>
    </span>
);

export default Loader;