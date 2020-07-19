import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../utilities/config';
import './vendor.css';
import Table from '../../../Components/Table/Table';
import AddVendorForm from '../../../Components/Forms/AddVendorForm';
import { Link } from 'react-router-dom';
import UpdateVendorForm from '../../../Components/Forms/UpdateVendorForm';
import DueDiligenceReport from '../../../Components/Forms/DueDiligenceForm';
class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      formModalStatus: 'none',
      currentSelect: null,
      modalContent: null,
      risk: {},
      vendorDescription: null,
      vendorContractStart: null,
      vendorContractEnd: null,
      vendorContractEndLeadtime: null,
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
      return (
        <tr>
          <td colSpan="3">
            <h3>NO VENDORS, LETS ADD SOME</h3>
          </td>
        </tr>
      );
    }
    const row = this.state.vendors.map((vendor, i) => {
      return (
        <tr key={i} id={vendor.id}>
          <td>
            <Link
              id={i}
              data-index="selected-vendor"
              onClick={this.selectRow}
              to="#"
            >
              {vendor.vendorName}
            </Link>
          </td>
          <td>{vendor.vendorAnalysis}</td>
          <td>{vendor.vendorRisk}</td>
        </tr>
      );
    });
    return row;
  };

  openModal = (e) => {
    if (this.state.formModalStatus === 'none') {
      this.setState({
        modalContent: e.target.dataset.index,
      });
      this.setState({ formModalStatus: 'block' });
      return;
    } else {
      this.setState({ formModalStatus: 'none' });
      return;
    }
  };

  modalContent = () => {
    switch (this.state.modalContent) {
      case 'add-vendor':
        return (
          <AddVendorForm
            handleChange={this.handleChange}
            submitForm={this.submitForm}
            openModal={this.openModal}
          />
        );
      case 'selected-vendor':
        return (
          <>
            <div style={{ width: 600 }}>
              <h1>Vendor Information</h1>
              <i
                id={this.state.currentSelect.id}
                className="material-icons"
                onClick={this.deleteRow}
              >
                delete
              </i>
              <i
                className="material-icons"
                id="update-vendor"
                onClick={this.updateVendor}
                openModal={this.openModal}
              >
                edit
              </i>
              <button
                id="due-diligence"
                className="material-icons"
                onClick={(e) => {
                  this.setState({ modalContent: e.target.id });
                }}
              >
                VDD
              </button>
            </div>
            <DueDiligenceReport data={this.state.currentSelect} />
          </>
        );
      case 'update-vendor':
        // return <AddVendorForm currentSelect={this.currentSelect} />;
        return (
          <UpdateVendorForm
            submit={this.sumbitUpdateForm}
            currentSelect={this.state.currentSelect}
            handleChange={this.handleChange}
            state={{ ...this.state }}
          />
        );
      case 'due-diligence':
        return <h1>meep meep</h1>;
      default:
        return null;
    }
  };

  deleteRow = async (e) => {
    const areYouSure = window.confirm('Are You Sure?');
    if (!areYouSure) {
      return window.alert('not deleted');
    }
    const deleteResp = await axios.delete(
      config.api.concat(`vendor/${e.target.id}`)
    );
    if (deleteResp.status === 200) {
      const vendorList = await axios.get(config.api.concat('vendor'));
      this.setState({ vendors: vendorList.data });
      return;
    }
    return window.alert('there was an error, please try again.');
  };

  selectRow = (e) => {
    this.openModal(e);
    this.setState({
      currentSelect: this.state.vendors[e.target.id],
    });
  };

  updateVendor = (e) => {
    this.setState({
      vendorName: this.state.currentSelect.vendorName,
      vendorDescription: this.state.currentSelect.vendorDescription,
      vendorAnalysis: this.state.currentSelect.vendorAnalysis,
      vendorContractStart: this.state.currentSelect.vendorContractStart,
      vendorContractEnd: this.state.currentSelect.vendorContractEnd,
      vendorContractEndLeadtime: this.state.currentSelect
        .vendorContractCancelLeadTime,
      risk: {
        stratRisk: this.state.currentSelect.stratRisk,
        finRisk: this.state.currentSelect.finRisk,
        compRisk: this.state.currentSelect.compRisk,
        operRisk: this.state.currentSelect.operRisk,
        legalRisk: this.state.currentSelect.legalRisk,
        repRisk: this.state.currentSelect.repRisk,
      },
      vendorActive: true,
      modalContent: 'update-vendor',
    });
  };

  handleChange = (e) => {
    let currentRisk = this.state.risk;
    switch (e.target.id) {
      case 'vendor-name':
        this.setState({
          vendorName: e.target.value,
        });
        return;
      case 'vendor-description':
        this.setState({
          vendorDescription: e.target.value,
        });
        return;
      case 'vendor-analysis':
        this.setState({
          vendorAnalysis: e.target.value,
        });
        return;
      case 'contract-start':
        this.setState({
          vendorContractStart: e.target.value,
        });
        return;
      case 'contract-end':
        this.setState({
          vendorContractEnd: e.target.value,
        });
        return;
      case 'vendor-contract-leadtime':
        this.setState({
          vendorContractEndLeadtime: e.target.value,
        });
        return;
      case 'stratRisk':
        currentRisk = this.state.risk;
        currentRisk[e.target.id] = e.target.value;
        this.setState({
          risk: currentRisk,
        });
        return;
      case 'finRisk':
        currentRisk = this.state.risk;
        currentRisk[e.target.id] = e.target.value;
        this.setState({
          risk: currentRisk,
        });
        return;
      case 'compRisk':
        currentRisk = this.state.risk;
        currentRisk[e.target.id] = e.target.value;
        this.setState({
          risk: currentRisk,
        });
        return;
      case 'operRisk':
        currentRisk = this.state.risk;
        currentRisk[e.target.id] = e.target.value;
        this.setState({
          risk: currentRisk,
        });
        return;
      case 'legalRisk':
        currentRisk = this.state.risk;
        currentRisk[e.target.id] = e.target.value;
        this.setState({
          risk: currentRisk,
        });
        return;
      case 'repRisk':
        currentRisk = this.state.risk;
        currentRisk[e.target.id] = e.target.value;
        this.setState({
          risk: currentRisk,
        });
        return;
      default:
        return null;
    }
  };

  sumbitUpdateForm = async (e) => {
    e.preventDefault();
    const resp = await axios.put(
      config.api.concat(`vendor/${this.state.currentSelect.id}`),
      {
        risk: this.state.risk,
        vendorContractStart: this.state.vendorContractStart,
        vendorContractEnd: this.state.vendorContractEnd,
        vendorContractEndLeadtime: this.state.vendorContractEndLeadtime,
        vendorName: this.state.vendorName,
        vendorAnalysis: this.state.vendorAnalysis,
        vendorDescription: this.state.vendorDescription,
      }
    );
    if (resp.status === 200) {
      const vendors = await axios.get(config.api.concat(`vendor`));
      console.log(vendors);
      this.setState({
        vendors: vendors.data,
        risk: {},
        vendorContractStart: null,
        vendorContractEnd: null,
        vendorContractEndLeadtime: null,
        vendorName: ' ',
        vendorAnalysis: ' ',
        vendorDescription: ' ',
      });
    }
    this.openModal(e);
  };

  submitForm = async (e) => {
    e.preventDefault();
    const url = config.api.concat('vendor');
    const resp = await axios.post(url, {
      risk: this.state.risk,
      vendorContractStart: this.state.vendorContractStart,
      vendorContractEnd: this.state.vendorContractEnd,
      vendorContractEndLeadtime: this.state.vendorContractEndLeadtime,
      vendorName: this.state.vendorName,
      vendorAnalysis: this.state.vendorAnalysis,
      vendorDescription: this.state.vendorDescription,
    });
    const currentVendorList = this.state.vendors;
    currentVendorList.push(resp.data);
    this.setState({
      vendors: currentVendorList,
      risk: {},
      vendorContractStart: null,
      vendorContractEnd: null,
      vendorContractEndLeadtime: null,
      vendorName: null,
      vendorAnalysis: null,
      vendorDescription: null,
    });
    this.openModal(e);
  };

  render() {
    return (
      <>
        <main>
          <h2>Vendor Management Strategy</h2>
          <ol>
            <li>Step 1: Have a Vendor Management Policy</li>
            <li>Step 2: Risk assess your vendors</li>
            <li>Step 3: Perform Due Diligence Review on your vendor</li>
            <li>Step 4: Montior issues for your vendor</li>
          </ol>
          <hr />
          <div className="table-container">
            <h2>Current Vendor List</h2>
            <button
              id="add-vendor"
              data-index="add-vendor"
              onClick={this.openModal}
            >
              Add a Vendor
            </button>
            <br />
            <br />

            <Table
              header={['Vendor Name', 'Vendor Analysis', 'Vendor Risk']}
              rows={this.tableRow}
            />
          </div>
        </main>

        {/* modal here: */}

        <div id="modal" style={{ display: this.state.formModalStatus }}>
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
