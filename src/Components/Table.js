import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buildTableHeaders() {
    const header = this.props.header.map((header, i) => {
      return <th key={i}>{header}</th>;
    });
    return header;
  }

  buildRows() {
    if (!this.props.rows) {
      return <h1>Hello</h1>;
    }
    return this.props.rows();
  }

  render(props) {
    return (
      <table>
        <thead>
          <tr>{this.buildTableHeaders()}</tr>
        </thead>
        <tbody>{this.buildRows()}</tbody>
      </table>
    );
  }
}

//This copoenent takes two props.  1) Array of Headers 2) Function for rows.
export default Table;
