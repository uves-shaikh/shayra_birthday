import './App.css';
import cakegif from './cakegif.gif'
// import IMG1 from './img1.png'
// import IMG2 from './img2.png'
// import IMG3 from './img3.png'
import IMG1 from './img1.jpg'
import IMG2 from './img2.jpg'
import IMG3 from './img3.jpg'

function App() {
  return (
    <div className="App">
     <div class="container">
        <div class="card">
            <div class="outside">
                <h1>Happy Birthday</h1>
                <h3>Dear Shayra,may god bless you with abundant joy on your birthday and always!
                    Thank you for always being by my side and having my back.</h3>
            </div>
            <div class="inside">
                <img src={cakegif} alt="cakephptp" />
                <h3>Sending you an infinite amount of love, joy, and happiness on your birthday!
                </h3>
            </div>
        </div>

        <div class="block">
            <div class="frames frame1">
                <img src={IMG1} alt="" />
                <p>Keep smiling,Keep shining</p>
            </div>
            <div class="frames frame2">
                <img src={IMG2} alt="" />
                <p>On this occasion bring you lot of happiness and success
                </p>
            </div>
            <div class="frames frame3">
                <img src={IMG3} alt="" />
                <p>May God bless you on your birthday, and always</p>
            </div>
        </div>

    </div>
    </div>
  );
}

export default App;
