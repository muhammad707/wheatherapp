import "./App.css";
import logo from "./assets/mostly-sunny.svg";
import sunnyLogo from "./assets/sunny.svg";

function App() {
  return (
    <div className="main-container">
      <div className="location-and-date">
        <h1 className="location-and-date__location">London, UK</h1>
        <div>Sunday 4th August</div>
      </div>
      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img src={logo} alt="" className="current-temperature__icon" />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">21&deg;</div>
          <div className="current-temperature__summary">Mostly Sunny</div>
        </div>
      </div>
      <div className="current-stats">
        <div>
          <div className="current-stats__value">23&deg;</div>
          <div className="current-stats__label">High</div>
          <div className="current-stats__value">14&deg;</div>
          <div className="current-stats__label">Low</div>
        </div>
        <div>
          <div className="current-stats__value">7mph</div>
          <div className="current-stats__label">Wind</div>
          <div className="current-stats__value">0%</div>
          <div className="current-stats__label">Rain</div>
        </div>
        <div>
          <div className="current-stats__value">05:27</div>
          <div className="current-stats__label">Sunrise</div>
          <div className="current-stats__value">20:57</div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>
      <div className="weather-by-hour">
        <h2 className="weather-by-hour__heading">Today's weather</h2>
        <div className="weather-by-hour__container">
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">3am</div>
            <img src={logo} alt="Mostly sunny" />
            <div>14&deg;</div>
          </div>
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">6am</div>
            <img src={logo} alt="Mostly sunny" />
            <div>16&deg;</div>
          </div>
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">9am</div>
            <img src={logo} alt="Mostly sunny" />
            <div>17&deg;</div>
          </div>
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">12pm</div>
            <img src={logo} alt="Mostly sunny" />
            <div>19&deg;</div>
          </div>
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">3pm</div>
            <img src={sunnyLogo} alt="Mostly sunny" />
            <div>21&deg;</div>
          </div>
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">6pm</div>
            <img src={sunnyLogo} alt="Mostly sunny" />
            <div>20&deg;</div>
          </div>
          <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">9pm</div>
            <img src={logo} alt="Mostly sunny" />
            <div>18&deg;</div>
          </div>
        </div>
      </div>
      <div className="next-5-days">
        <h2 className="next-5-days__heading">Next 5 days</h2>
        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Tue
            <div className="next-5-days__label">30/7</div>
          </div>
          <div className="next-5-days__low">
            10&deg;
            <div className="next-5-days__label">Low</div>
          </div>
          <div className="next-5-days__high">
            21&deg;
            <div className="next-5-days__label">High</div>
          </div>
          <div className="next-5-days__icon">
            <img src={sunnyLogo} alt="Sunny" />
          </div>
          <div className="next-5-days__rain">
            0%
            <div className="next-5-days__label">Rain</div>
          </div>
          <div className="next-5-days__wind">
            12mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>
        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Wed
            <div className="next-5-days__label">31/7</div>
          </div>

          <div className="next-5-days__low">
            9&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            18&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={logo} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            3%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            7mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>
        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Wed
            <div className="next-5-days__label">31/7</div>
          </div>

          <div className="next-5-days__low">
            9&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            18&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={logo} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            3%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            7mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>
        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Wed
            <div className="next-5-days__label">31/7</div>
          </div>

          <div className="next-5-days__low">
            9&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            18&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={logo} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            3%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            7mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>
        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Wed
            <div className="next-5-days__label">31/7</div>
          </div>

          <div className="next-5-days__low">
            9&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            18&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={logo} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            3%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            7mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
