import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2> This App will meet your vendor management needs: </h2>
        <ul>
          <li>
            <h2>Vendor Management Policy</h2>
          </li>
          <li>
            <h2>Vendor Management Risk Assessment</h2>
          </li>
          <li>
            <h2>Vendor Management Due Diligence Templates</h2>
          </li>
          <li>
            <h2>Vendor Management Task Tracker</h2>
          </li>
        </ul>
      </>
    );
  }
}

export default Home;
