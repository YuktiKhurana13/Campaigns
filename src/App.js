import React from 'react';
import './App.css';
import Header from './Header';
import Title from './Title';
import DisplayedCampaigns from './DisplayedCampaigns';

function App() {
  return (
    <div className="App">
      <Header />
     
     <div className="App-campaign">
    
        <Title />
        <DisplayedCampaigns />
      
        </div>
    </div>
  );
}

export default App;
