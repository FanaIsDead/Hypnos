import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carousel from '../../components/carousel/carousel';

const Home = () => {
    return(
        <div id='wrapper'>
            <Header />
            <div id='home'>
                <Carousel />
            </div>
            <Footer />
        </div>
    );
}

export default Home;