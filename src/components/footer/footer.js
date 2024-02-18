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

            <div id="images">
                <a href='https://youtu.be/89ho2I3pLuQ?si=I4ULqyw4L3S2jnT4'>
                    <img src={require('./images/instagram.png')} alt='Instagram logo'/>
                </a>
                <a href='https://youtu.be/89ho2I3pLuQ?si=I4ULqyw4L3S2jnT4'>
                    <img src={require('./images/twitter.png')} alt='Twitter logo'/>
                </a>
                <a href='https://youtu.be/89ho2I3pLuQ?si=I4ULqyw4L3S2jnT4'>
                    <img src={require('./images/youtube.png')} alt='Youtube logo'/>
                </a>
                
            </div>
            

            <p><b>©</b> 2024 Hypnos</p>
        </div>
    );
}

export default Footer;