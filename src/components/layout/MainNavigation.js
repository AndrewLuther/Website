import {Link} from 'react-router-dom'

function MainNavigation() {
    return (
        <header>
            <h1>Andrew Luther</h1>
            
            <nav>
                <ul className='nav'>
                    <li className ='list'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Code'>Programmer</Link>
                    </li>
                    <li>
                        <Link to='/Music'>Composer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation