import './Header.css';

function Header(){

    return(

    <header className="header">
        
        <nav className='nav'>
            <ul className='nav-list'>
                <li><a href="/">Schedule</a></li>
                <li><a href="/Profiles">Profiles</a></li>
                <li><a href="/Dishes">Dishes</a></li>
                
            </ul>
        </nav>
        
    </header>


    );

}

export default Header;