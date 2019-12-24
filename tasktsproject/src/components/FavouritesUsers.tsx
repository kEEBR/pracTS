import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

interface Props {
  name: string;
  login: string;
}

class FavouritesUsers extends React.Component<Props, any> {
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <h2 className='faveText'>Избранные пользователи</h2>
        <BootstrapTable className='Table'>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='value'>Value</TableHeaderColumn>
        </BootstrapTable>
      </React.Fragment>
    );
  }
}

export default FavouritesUsers;
