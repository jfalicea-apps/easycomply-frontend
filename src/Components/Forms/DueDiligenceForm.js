import React, { Component } from 'react';
import Table from '../Table/Table';
import './DueDiligenceForm.css';

class DueDiligenceReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rowSOC = () => {
    return (
      <>
        <tr>
          <td>Date of Review</td>
          <td>12/10/2020</td>
          <td>none</td>
        </tr>
        <tr>
          <td>SOC1 or SOC2 Audit Report</td>
          <td>SOC 2</td>
          <td>none</td>
        </tr>
        <tr>
          <td>Type I or Type II Audit?</td>
          <td>Type II</td>
          <td>none</td>
        </tr>
        <tr>
          <td>If Type II: What was the Audit Date?</td>
          <td>12/31/2019</td>
          <td>none</td>
        </tr>
        <tr>
          <td>Scope of the audit?</td>
          <td>ABC XYZ SaaS Product</td>
          <td>blah blah blah</td>
        </tr>
        <tr>
          <td>Does the Audit have an opinion?</td>
          <td>Unqualified</td>
          <td>none</td>
        </tr>
        <tr>
          <td>Did the Audit have any Exceptions?</td>
          <td>Yes. see below</td>
          <td>none</td>
        </tr>
        <tr>
          <td>Is the vendor financially sound?</td>
          <td>Yes, reviewed their CPA audited financials.</td>
          <td>Financial Appear to be Ok, debt increased. Yikes?</td>
        </tr>
        <tr>
          <td>Does the vendor have current Insurance</td>
          <td>12/10/2020</td>
          <td>"Insert Analsyis of Insurance."</td>
        </tr>
        <tr>
          <td>
            Does the vendor have a current BCP/DR Plan? If yes: has it been
            tested recently?
          </td>
          <td>Yes. </td>
          <td>The plan looks ok.</td>
        </tr>
        <tr>
          <td>Have you tested your BC/DR Plan with your vendor?</td>
          <td>N/A</td>
          <td>We prefer not to do this. We accept the risk.</td>
        </tr>
      </>
    );
  };

  rowException = () => {
    return (
      <>
        <tr>
          <td>Does the vendor have current Insurance</td>
          <td>12/10/2020</td>
          <td>"Insert Analsyis of Insurance."</td>
        </tr>
        <tr>
          <td>
            Does the vendor have a current BCP/DR Plan? If yes: has it been
            tested recently?
          </td>
          <td>Yes. </td>
          <td>The plan looks ok.</td>
        </tr>
        <tr>
          <td>Have you tested your BC/DR Plan with your vendor?</td>
          <td>N/A</td>
          <td>We prefer not to do this. We accept the risk.</td>
        </tr>
      </>
    );
  };

  rowUserControlConsiderations = () => {
    return (
      <>
        <tr>
          <td>Does the vendor have current Insurance</td>
          <td>12/10/2020</td>
        </tr>
        <tr>
          <td>
            Does the vendor have a current BCP/DR Plan? If yes: has it been
            tested recently?
          </td>
          <td>Yes. </td>
        </tr>
        <tr>
          <td>Have you tested your BC/DR Plan with your vendor?</td>
          <td>N/A</td>
        </tr>
      </>
    );
  };

  render() {
    console.log(this.props.data);
    return (
      <>
        <div className="container">
          <div className="report-header">
            <h1>Vendor Report</h1>
            <h3 className="field">Vendor Name: </h3>
            <span> {this.props.data.vendorName}</span>
            <br />
            <h3 className="field">Vendor Description: </h3>
            <span> {this.props.data.vendorDescription}</span>
          </div>
          <hr className="section-splitter" />
          <h2>Contract</h2>
          <h3 className="field">Start Date:</h3>
          <span>{this.props.data.vendorContractStart}</span>
          <br />
          <h3 className="field">End Date:</h3>
          <span>{this.props.data.vendorContractEnd}</span>
          <br />
          <h3 className="field">Contract Notice Lead Time:</h3>
          <span>{this.props.data.vendorContractCancelLeadTime}</span>
          <br />
          <h3 className="field">Contract Notice Due Date:</h3>
          <span>NEED TO CALC THIS</span>
          <hr className="section-splitter" />
          <h2>Risk Analysis</h2>
          <div className="risk-container"></div>
          <h3 className="field">Overall Risk: </h3>
          <span>{this.props.data.vendorRisk}</span>
          <br />
          <h3 className="field">Strategic Risk: </h3>
          <span>{this.props.data.stratRisk}</span>
          <br />
          <h3 className="field">Operational Risk: </h3>
          <span>{this.props.data.operRisk}</span>
          <br />
          <h3 className="field">Financial Risk: </h3>
          <span>{this.props.data.finRisk}</span>
          <br />
          <h3 className="field">Compliance Risk: </h3>
          <span>{this.props.data.compRisk}</span>
          <br />
          <h3 className="field">Legal Risk: </h3>
          <span>{this.props.data.legalRisk}</span>
          <br />
          <h3 className="field">Reputational Risk: </h3>
          <span>{this.props.data.repRisk}</span>
          <hr className="section-splitter" />
          <h2>Vendor Due Diligence Analysis</h2>
          <Table header={['Question', 'Answer', 'Notes']} rows={this.rowSOC} />
          <h2>Audit Exceptions</h2>
          <Table
            header={['Exception Listed', "Vendor's Response", 'Notes']}
            rows={this.rowException}
          />
          <h2>User Control Considerations</h2>
          <Table
            header={['User Control Consideration', 'Control Implemented']}
            rows={this.rowUserControlConsiderations}
          />
        </div>
      </>
    );
  }
}

export default DueDiligenceReport;
