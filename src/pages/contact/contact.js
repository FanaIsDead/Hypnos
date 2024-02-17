import './contact.css';
import Footer from '../../components/footer/footer'

const Contact = () => {
    return(
        <div id='contact'>
            <h3>Where can you find us</h3>
            <p>
                <span>Hypnos a.s.</span>
                <br/>
                <span>Zelný trh 314</span>
                <br/>
                <span>602 00 Brno-střed</span>
                <br/>
                <span>Monday - Friday: 11:00 - 18:00</span>
                <br/>
                <span>Saturday: 13:00 - 16:00</span>
            </p>

            <h3>Contact us here</h3>
            <p>
                <span>email: <a href='mailto:info@support.hypnos.cz'>info@support.hypnos.cz</a></span>
                <br/>
                <span>phone: <a href='tel:0153582911'>+420 153 582 911</a></span>
                <br/><br/><br/>
            </p>

            <h3>More about us</h3>
            <p>
                <a href='/'>hypnos.com</a>
            </p>

            <Footer />
        </div>
    );
}

export default Contact;