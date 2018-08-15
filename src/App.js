import React from 'react';
import Routes from './routes/Routes';

const App = props => {
  return (
      <div className='app-wrapper'>
        <div className="app-container">
          <div className='app-header'>Would you rather?!</div>
          <Routes />
        </div>
      </div>
  );
}
export default App;
