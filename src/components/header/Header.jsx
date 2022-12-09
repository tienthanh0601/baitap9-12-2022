import './style.scss';

export function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <button className="btn-creator" >Creat New Task</button>
            </div>
            <div className="header-right">
                <input className="text" type="text" placeholder='Type something to search'></input>
                <button className="btn-search">Search</button>
            </div>
        </div>
    ) 
}