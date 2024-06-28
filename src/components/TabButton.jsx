export default function TabButton(props) {
    return (
       <li>
        <button onClick={props.onSelect} className={props.isActive ? "active" : null}>
            {props.children}
        </button>
       </li> 
    );
}