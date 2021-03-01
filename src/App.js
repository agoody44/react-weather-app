import React from 'react';

import './App.css';

// API KEY AND URL
const api ={
  key: 'process.env.REACT_API_KEY',
  base: 'https://api.openweathermap.org/data/2.5/'
}
// const apiKey = process.env.REACT_API_KEY;
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

function App() {

  const dateDisplay = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
    <main>
      <div className="search-box">
        <input type="text"
          className='search-bar'
          placeholder='Search...'
        />

      </div>
      <div className="location-box">
        <div className='location'>Boston, US</div>
        <div className='date'>{dateDisplay(new Date())}</div>
      </div>
    </main>
    </div>
  );
}

export default App;
