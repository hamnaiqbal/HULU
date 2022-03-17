
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Result from './Components/Ressult/Result';
import { useState } from 'react';
import request from './Components/Request/requests.js';

function App() {

  const [selectedOption, setSelectedOption]= useState(request.fetchTrending);
  return (
    <div className="App">
      
     

      {/* Header */}
      <Header/>

      {/* Navigation */}
      <Navigation setSelectedOption={setSelectedOption}/>

      {/* Result */}
      <Result selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
