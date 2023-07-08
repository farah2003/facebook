
import './App.css';
import profile from './assets/profile.jpg';
import photo from './assets/photo.png';
import video from './assets/viedo.png';
import feeling from './assets/feeling.png'
import { Header, LeftAside, RightAside, Stories, Posts } from './components';

function App() {
    return (
        <div className="app">
            <Header />
            <section>
                <LeftAside />
                <RightAside />
                <section className='main-page'>
                    <Stories />
                    <div className='input-section'>
                        <div className='header'>
                            <img src={profile} alt="" className='avater' />
                            <input type="text" placeholder="What's in mind?" />
                        </div>

                        <div className="input-footer">
                            <div>
                                <img src={video} alt="viedo" />
                                <p>Like</p>
                            </div>

                            <div>
                                <img src={photo} alt="photo" />
                                <p>Photo/viedo</p>
                            </div>
                            <div>
                                <img src={feeling} alt="feeling" />
                                <p>Feeling/activity</p>
                            </div>
                        </div>
                    </div>

                    <Posts />
                </section>

            </section>
        </div >
    );
}

export default App;
