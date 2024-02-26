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
                <div id='quote'><b><i>„PREPARE TO FEEL THE SLEEP"</i></b></div>
                
                <div id='aboutUs'>
                    <h1>Who are we?</h1>
                    <p>We are a small company based in Czech Republic that cares for your healthy sleep and stuff around that. We are offering anything and everything involving sleeping and resting, from supplements to pillows and plushies. <br/>
                    Our courses are also thing worth a try, if you have troubles sleeping. Here you can learn a lot of different tips on how to maximize your sleeping experience. <br/>
                    In 2024 we opened our first store and from then to now we made around 10 000 people happy. We have cooperated with many medical and furniture brands to bring you the best products you can imagine. Quality of each and every product is guaranteed. <br/><br/>
                    You might ask, "but why is the sleep so important?", let us answer that. <br />Sleep is a state of reduced mental and physical activity in which consciousness is altered and certain sensory activity is inhibited. <br/>
                    During sleep, there is a marked decrease in muscle activity and interactions with the surrounding environment. 
                    While sleep differs from wakefulness in terms of the ability to react to stimuli, it still involves active brain patterns, making it more reactive than a coma or disorders of consciousness.
                    Sleep occurs in repeating periods, during which the body alternates between two distinct modes: REM and non-REM sleep. Although REM stands for "rapid eye movement", this mode of sleep has many other aspects, including virtual paralysis of the body.
                    Dreams are a succession of images, ideas, emotions, and sensations that usually occur involuntarily in the mind during certain stages of sleep. 
                    During sleep, most of the body's systems are in an anabolic state, helping to restore the immune, nervous, skeletal, and muscular systems; these are vital processes that maintain mood, memory, and cognitive function, and play a large role in the function of the endocrine and immune systems. 
                    The internal circadian clock promotes sleep daily at night. The diverse purposes and mechanisms of sleep are the subject of substantial ongoing research. Sleep is a highly conserved behavior across animal evolution, likely going back hundreds of millions of years.
                    </p>
                </div>

                <div id='video'>
                    <video width='720' height='405' controls>
                        <source src={require('./fish.mp4')} type='video/mp4' />
                        Your browser does not support the video tag
                    </video>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;