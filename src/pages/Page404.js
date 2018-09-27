import React from 'react';

class Page404 extends React.Component {

  render() {
    return (
      <div className="main-container">
        <div className="content-404">
          <div ><img src="/images/sorry.jpg" alt="sorry!" width="400" height="300" /></div>
          <div>404 - Sorry! The page you requested doesn't exist.</div>
        </div>
      </div>
    );
  }

}

export default Page404;
