import React from 'react';
import axios from 'axios';
import config from '../../utilities/config';
import './vendor.css';
import Table from '../../Components/Table';

class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      formModalStatus: 'none',
      currentSelect: null,
      modalContent: null,
    };
  }

  async componentDidMount() {
    const vendors = await (await axios.get(config.api.concat('vendor'))).data;
    this.setState({
      vendors: vendors,
    });
  }

  tableRow = () => {
    if (this.state.vendors.length === 0) {
      return <h1>Waiting...</h1>;
    }
    const row = this.state.vendors.map((vendor, i) => {
      return (
        <tr key={i}>
          <td>{vendor.id}</td>
          <td>{vendor.vendorName}</td>
          <td>{vendor.vendorAnalysis}</td>
          <td>{vendor.vendorRisk}</td>
          <td>{vendor.stratRisk}</td>
          <td>{vendor.finRisk}</td>
          <td>{vendor.compRisk}</td>
          <td>{vendor.operRisk}</td>
          <td>{vendor.legalRisk}</td>
          <td>{vendor.repRisk}</td>
        </tr>
      );
    });
    return row;
  };

  openModal = (e) => {
    this.setState({
      modalContent: e.target.id,
    });
    if (this.state.formModalStatus === 'none') {
      this.setState({ formModalStatus: 'block' });
      return;
    } else {
      this.setState({ formModalStatus: 'none' });
      return;
    }
  };

  setData = () => {
    this.setState({});
  };

  modalContent = () => {
    switch (this.state.modalContent) {
      case 'add-vendor':
        return (
          <div>
            <h2>Add a New Vendor</h2>
            <p>
              Vendor Name: <input />
            </p>
            <p>
              Vendor Analysis: <input />
            </p>
            <p>
              Strategic Risk: <input />
            </p>
            <p>
              Compliance Risk: <input />
            </p>
            <p>
              Operational Risk: <input />
            </p>
            <p>
              Legal Risk: <input />
            </p>
            <p>
              Reputational Risk: <input />
            </p>
            <button> submit </button>
            <button> cancel </button>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <nav>
          <h1>Vendor Management Simplified</h1>
        </nav>
        <hr />
        <main>
          <div className="table-container">
            <h2>Current Vendor List</h2>
            <button id="add-vendor" onClick={this.openModal}>
              Add a Vendor
            </button>
            <br />
            <br />

            <Table
              header={[
                'id',
                'Vendor Name',
                'Vendor Analysis',
                'Vendor Risk',
                'Strategic Risk',
                'Financial Risk',
                'Compliance Risk',
                'Operational Risk',
                'Legal Risk',
                'Reputational Risk',
              ]}
              rows={this.tableRow}
            />
          </div>
        </main>
        <div
          id="add-vendor-form"
          style={{ display: this.state.formModalStatus }}
        >
          <i className="material-icons" id="close" onClick={this.openModal}>
            close
          </i>
          {this.modalContent()}
        </div>
      </>
    );
  }
}

export default Vendor;
