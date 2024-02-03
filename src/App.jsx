// App.jsx
import React, { useState } from 'react';
import './App.css';
import { fetchingData } from './Config/api';
import Search from './Component/Search/search';
import ButtonComponent from './Component/button/button';
import weatherlogo from './assets/weatherlogo.png';
import Weather from './Component/Weahther/Weather';
import Clouds from './assets/simpleCloud.png'

function App() {
  const [countryName, setCountryName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);

  const updateSearchHistory = (query) => {
    if (query.trim() !== '') {
      const updatedHistory = [query, ...searchHistory.slice(0, 4)]; // Keep up to 5 recent searches
      setSearchHistory(updatedHistory);
    }
  };

  const GetData = async () => {
    try {
      const data = await fetchingData(countryName);
      setWeatherData(data);
      setErrorMsg(data.message);
      updateSearchHistory(countryName);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearching = () => {
    GetData();
    setCountryName('');
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      GetData();
      setCountryName('');
    }
  };

  const handleInputChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleHistoryClick = (historyItem) => {
    setCountryName(historyItem);
    GetData();
    setShowSearchHistory(false);
  };

  const toggleSearchHistory = () => {
    setShowSearchHistory(!showSearchHistory);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          
          {/* <div className="cloudContainer">
            <img src={Clouds} alt="" />

          </div> */}

          <div className="heading">
            <h3>Weather App</h3>
            <img className='logo' src={weatherlogo} alt="" width='50px' />
          </div>
          <div className='btnCenter'>
            <Search
              onChange={handleInputChange}
              value={countryName}
              onKeyPress={handleEnterKeyPress}
            />
            <ButtonComponent
              handleSearching={handleSearching}
            />
          </div>
        </div>
        <div className="historyBtn">
        <button onClick={toggleSearchHistory}>{showSearchHistory? 'weather': 'History'}</button>
        </div>
        <div className="flex">
          {showSearchHistory && (
            <div className="history-container">
              <h2>Search History:</h2>
              <ul>
                {searchHistory.map((history, index) => (
                  <li style={{width: 100}} key={index} onClick={() => handleHistoryClick(history)}>
                    <button>
                    {history}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!showSearchHistory && (
            <>
              {errorMsg ? (
                <h2>{errorMsg}</h2>
              ) : (
                <div>
                  {weatherData ? (
                    <Weather weatherData={weatherData} />
                  ) : (
                    <div className='flex'>
                      <h2>Search Weather of any place</h2>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
