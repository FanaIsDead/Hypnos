import './footer.css';


const Footer = () => {
    return(
        <div id="footer">
            <div id="links">
                <a href='/' title='Home'>Home</a>
                |
                <a href='/shop' title='Shop'>Shop</a>
                |
                <a href='/contact' title='Contact'>Contact</a>
            </div>

            <table id="images">
                <tr>
                    <td>
                        <a href='https://www.instagram.com/accounts/login/'>
                            <img src={require('./images/instagram.png')} alt='Instagram logo'/>
                        </a>
                    </td>
                    <td>
                        <a href='https://twitter.com/i/flow/login'>
                            <img src={require('./images/twitter.png')} alt='Twitter logo'/>
                        </a>
                    </td>
                    <td>
                        <a href='https://www.youtube.com/'>
                            <img src={require('./images/youtube.png')} alt='Youtube logo'/>
                        </a>
                    </td>
                </tr>
            </table>
            

            <p><b>©</b> 2024 Hypnos</p>
        </div>
    );
}

export default Footer;