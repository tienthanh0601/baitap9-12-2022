import './style.scss';
export function TodoItem(props) {
    return (
        <div className="todo-item">
            <p className="title">Title: {props.title}</p>
            <p className="creator">Creator:{props.creator}</p>
            <p className="status">Status: {props.status}</p>
            <p className="description">Description: {props.description}</p>
            
        </div>
    );
}
