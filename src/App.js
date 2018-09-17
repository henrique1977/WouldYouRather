import React from 'react';
import Routes from './routes/Routes';

const App = props => {
  return (
    <div className="main-container">
      <div className='app-wrapper'>
        <div className="app-container">
          <Routes />
        </div>
      </div>
    </div>
  );
}
export default App;
