import '../header/header.css';
import SearchBar from '../searchBar/searchBar';

const Header = () => {
    return(
        <div id='header'>
            <a href='/'>
                <img id='logo' src={require('./logo.png')} alt='Logo'/>
            </a>
            <SearchBar />
            <div id='navbar'>
                <a href='/404'>
                    <img id='user' src={require('./user.png')} alt='User' />
                </a>
                <a href='/404'>
                    <img id='cart' src={require('./shopping-bag.png')} alt='Shopping cart' />
                </a>
                
                
            </div>
            
        </div>
    );
}

export default Header;