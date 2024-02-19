import "./Header.css"

function Header(){

    return(
        <header>
            <div className="container">
                <div className="flex-container">
                    <div className="logo">
                        <h2>Basic 88</h2>
                        <p>Free HTML<sub>5</sub> Website Temlate</p>
                    </div>
                    <nav className="_nav">
                        <ul>
                            <li>TEXTLINK</li>
                            <li>TEXTLINK</li>
                            <li>TEXTLINK</li>
                            <li>TEXTLINK</li>
                            <li>TEXTLINK</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;