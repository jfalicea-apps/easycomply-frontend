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
      return <h3>Nothing to see here!</h3>;
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

//This component takes two props.  1) Array of Headers 2) Function for rows.
export default Table;
