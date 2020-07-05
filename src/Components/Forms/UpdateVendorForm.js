import React from 'react';

function UpdateVendorForm(props) {
  return (
    // needto update the endpoint. onSubmit={}
    <form onSubmit={props.submit}>
      <h2>Add a New Vendor</h2>
      <p>
        Vendor Name:{' '}
        <input
          id="vendor-name"
          onChange={props.handleChange}
          value={props.state.vendorName}
        />
      </p>
      <p>
        Vendor Description:{' '}
        <input
          id="vendor-description"
          onChange={props.handleChange}
          value={props.state.vendorDescription}
        />
      </p>
      <p>
        Vendor Analysis:{' '}
        <textarea
          id="vendor-analysis"
          onChange={props.handleChange}
          value={props.state.vendorAnalysis}
        />
      </p>
      <hr />
      <p>
        <h3>Contract Inforamaiton </h3>
        <input
          type="date"
          id="contract-start"
          min="1950-01-01"
          max="2100-12-31"
          onChange={props.handleChange}
          value={props.state.vendorContractStart}
        />
        <input
          type="date"
          id="contract-end"
          min="1950-01-01"
          max="2100-12-31"
          onChange={props.handleChange}
          value={props.state.vendorContractEnd}
        />
      </p>
      <span>Contract Cancellation Lead Time in Days: </span>
      <input
        type="number"
        id="vendor-contract-leadtime"
        min="0"
        onChange={props.handleChange}
        value={props.state.vendorContractEndLeadtime}
      />
      <hr />
      <h3>Vendor Risk Assessment: </h3>
      <p>
        Strategic Risk:{' '}
        <select
          id="stratRisk"
          onChange={props.handleChange}
          value={props.state.risk.stratRisk}
        >
          <option value="null">Pick Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <p>
        Financial Risk:{' '}
        <select
          id="finRisk"
          onChange={props.handleChange}
          value={props.state.risk.finRisk}
        >
          <option value="null">Pick Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <p>
        Compliance Risk:{' '}
        <select
          id="compRisk"
          onChange={props.handleChange}
          value={props.state.risk.compRisk}
        >
          <option value="null">Pick Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <p>
        Operational Risk:
        <select
          id="operRisk"
          onChange={props.handleChange}
          value={props.state.risk.operRisk}
        >
          <option value="null">Pick Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <p>
        Legal Risk:
        <select
          id="legalRisk"
          onChange={props.handleChange}
          value={props.state.risk.legalRisk}
        >
          <option value="null">Pick Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      <p>
        {/* Reputational Risk: <input id="repRisk" onChange={props.handleChange} /> */}
        Reputational Risk:{' '}
        <select
          id="repRisk"
          onChange={props.handleChange}
          value={props.state.risk.repRisk}
        >
          <option value="null">Pick Risk</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>
      {/* <p>
        Is the Vendor Active? <br />
        <label class="switch">
        <input type="checkbox" value="true" checked />
        <span class="slider"></span>
        </label>
      </p>*/}
      <hr />
      {/* <p>
        <h3>Due Diligence Documents</h3>
        <input type="file" id="input"></input>
      </p> */}
      <button> update </button>
      <button onClick={props.openModal}> cancel </button>
    </form>
  );
}

export default UpdateVendorForm;
