import './notfound.css';

const NotFound = () => {
    return(
        <div id='NotFound'>
            <h1>Error 404 - page not found</h1>
            <img src={require('./sad.png')} alt='Sad face'/>
            <a href='/'><h2>Return to homepage</h2></a>
        </div>
    );
}

export default NotFound;