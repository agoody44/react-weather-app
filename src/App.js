import './App.css';

import Header from './components/Header';
import Footer from './components/Footer'

import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div className='App'>
      <Header />
      <WeatherCard />
      <Footer />
    </div>
  )
}

export default App;