import React, {Component} from 'react';
import { Row } from "./Row";

class Table extends Component{
  state ={
    order: 0,
    column: 'firstName'
  };

  onSort = (event) => {
    if(event.target.name) {
      this.setState({
        column: event.target.name,
      });
    }
  };

  render(){
    const rows = [...this.props.testers].sort((a, b) => {
      if (a[this.state.column] > b[this.state.column]) {
        return 1;
      }
      if (a[this.state.column] < b[this.state.column]) {
        return -1;
      }

      return 0;
    });
    if (this.state.order > 0){
      rows.reverse();
    }

    return(
      <table className='testers-table'>
        <thead onClick={this.onSort}>
        <tr>
          <th><a href='#' name="firstName">First name</a></th>
          <th><a href='#' name="lastName">Last Name</a></th>
          <th><a href='#' name="country">Country</a></th>
          <th>Bugs</th>
        </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => <Row {...row } key={idx}/>)}
        </tbody>
      </table>
    );
  }
}

export { Table };