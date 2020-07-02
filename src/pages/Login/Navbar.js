import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: 'none',
    };
  }

  openNav = () => {
    if (this.state.modalStatus === 'none') {
      this.setState({ modalStatus: 'block' });
      return;
    } else {
      this.setState({ modalStatus: 'none' });
      return;
    }
  };

  render() {
    return (
      <>
        <i className="material-icons" onClick={this.openNav}>
          menu
        </i>
        <div
          className="nav-container"
          style={{ display: this.state.modalStatus }}
        >
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/policy">Policy</Link>
          </p>
          <p>
            <Link to="/vendor">Vendor</Link>
          </p>
        </div>
      </>
    );
  }
}

export default Navbar;
