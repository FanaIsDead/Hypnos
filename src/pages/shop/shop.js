import './shop.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Shop = () => {
    return(
        <div id='wrapper'>
            <Header />
            <div id='Shop'>
                <nav id='sidebar'>
                    <ul>
                        {/*Add id to the href of the anchor tag to link it to part of the same page */}
                        <li><a href='#supplements'>Food supplements</a></li>
                        <li><a href='#courses'>Our courses</a></li>
                        <li><a href='#accessories'>Sleep accessories</a></li>
                        <li><a href='#other'>Other</a></li>
                    </ul>
                </nav>
                
                <section id='section'>
                    <h2 id='supplements'>Food supplements</h2>
                    <div class='product-list'>
                        <li class='product'>
                            <a href='/sleep1'>
                                <img src={require('./images/sleep1.png')} alt='sleep1'/>
                                <h3>Jamieson - Melatonin Chewable (Cherry)</h3>
                                <span>⭐⭐⭐⭐</span>
                                <span>21.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/sleep2'>    
                                <img src={require('./images/sleep2.png')} alt='sleep2'/>
                                <h3>Spring Valley - Sleep aid formula</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>25.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/sleep3'>
                                <img src={require('./images/sleep3.png')} alt='sleep3'/>
                                <h3>Kratox - Sleep A.H.</h3>
                                <span>⭐⭐⭐</span>
                                <span>30.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/sleep4'>
                                <img src={require('./images/sleep4.png')} alt='sleep4'/>
                                <h3>Luna - Melatonin supplement</h3>
                                <span>⭐⭐⭐⭐</span>
                                <span>25.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/sleep5'>
                                <img src={require('./images/sleep5.png')} alt='sleep5'/>
                                <h3>Titan - Sleep supplement</h3>
                                <span>⭐⭐⭐⭐</span>
                                <span>23.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/sleep6'>
                                <img src={require('./images/sleep6.png')} alt='sleep6'/>
                                <h3>Vimerson health - Melatonin sleep</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>39.99 €</span>
                            </a>
                        </li>
                    </div>
                </section>

                <section id='section'>
                    <h2 id='courses'>Our courses</h2>
                    <div class='product-list'>
                        <li class='product'>
                            <a href='/course1'>
                                <img src={require('./images/course1.jpg')} alt='course1'/>
                                <h3>Sleep course</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>59.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/course2'>
                                <img src={require('./images/course2.jpg')} alt='course2'/>
                                <h3>Sleep course plus</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>89.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/course3'>
                                <img src={require('./images/course3.jpg')} alt='course3'/>
                                <h3>Sleep course premium</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>119.99 €</span>
                            </a>
                        </li>
                    </div>
                </section>



                <section id='section'>
                    <h2 id='accessories'>Sleep accessories</h2>
                    <div class='product-list'>
                        <li class='product'>
                            <a href='/accessory1'>
                                <img src={require('./images/accessory1.png')} alt='accessory1'/>
                                <h3>Sleep mask (violet)</h3>
                                <span>⭐⭐⭐</span>
                                <span>5.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/accessory2'>    
                                <img src={require('./images/accessory2.png')} alt='accessory2'/>
                                <h3>Pillow</h3>
                                <span>⭐⭐⭐⭐</span>
                                <span>14.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/accessory3'>
                                <img src={require('./images/accessory3.png')} alt='accessory3'/>
                                <h3>Mattress</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>199.99 €</span>
                            </a>
                        </li>
                    </div>
                </section>


                <section id='section'>
                    <h2 id='other'>Other</h2>
                    <div class='product-list'>
                        
                        <li class='product'>
                            <a href='/other1'>
                                <img src={require('./images/other1.jpg')} alt='accessory3'/>
                                <h3>Pochita plushie</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>29.99 €</span>
                            </a>    
                        </li>
                        
                        <li class='product'>
                            <a href='/other2'>
                                <img src={require('./images/other2.png')} alt='accessory3'/>
                                <h3>Chicken plushie</h3>
                                <span>⭐⭐⭐⭐</span>
                                <span>29.99 €</span>
                            </a>
                        </li>
                        <li class='product'>
                            <a href='/other3'>
                                <img src={require('./images/other3.png')} alt='accessory3'/>
                                <h3>Axolotl plushie</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span>39.99 €</span>
                            </a>
                        </li>
                    </div>
                </section>
                
            </div>
            <Footer />
        </div>
    );
}

export default Shop;