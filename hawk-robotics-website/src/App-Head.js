import './App-Head.css';

function AppHead() {
    return (
        <div id="template_menu">

            <h1 className="dm_h1">Hawk Robotics-The Ryken Force</h1>
            <h2 className="drop_menu_h dm_h2">FIRST FTC Team #19460, Westwood, MA</h2>
            <h3 className="drop_menu_h dm_h3">Xaverian Brothers High School</h3>

            <ul className="menu_bar">
                <li className="dropdown">Home</li>
                <li className="dropdown">About</li>
                <li className="dropdown">News</li>
                <li className="dropdown">Coming Events</li>
                <li className="dropdown">Contact Us</li>
            </ul>
        </div>
    );
}

export default AppHead;