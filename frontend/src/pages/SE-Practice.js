import React, {Component} from 'react';
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";


class SEPractice extends Component{
    
    render(){
    return (
      
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Styles>
          <Table
            data={ this.props.articles}
            columns={tablecolumns}
          />
        </Styles>
      </div>
    )
    }
}
export default SEPractice;
