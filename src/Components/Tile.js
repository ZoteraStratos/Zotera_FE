import './tile.css'
export const Tile = (props) => {
    return <div style={props.style}>
        <img width={props.style.width} height={props.style.height} src={props.src} />
        </div>
}