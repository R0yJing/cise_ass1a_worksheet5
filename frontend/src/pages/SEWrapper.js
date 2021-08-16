import React, { Component } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from 'axios';
import articles from '../dummydata/articles';

class SEWrapper extends Component {
  state = {
    allItems:[],
    currentItems: []
  };
  
  componentDidMount(){
    console.log("Num articles = " + articles.length);

    // articles.forEach((article) => axios.post("http://localhost:5000/api/articles", article)
    // .then((res) =>{
    //   console.log("article posted ");

    // }).catch(err => console.log("Error posting dummy articles")));
    // axios
    //   .post(`http://localhost:${process.env.PORT}/api/articles`, articles[4])
    //   .then((res) => console.log("posted last one"))
    //   .catch((err) => console.log("error posting last"));

    axios.get(`http://localhost:5000/api/articles`)
    .then((res) => {
      this.setState({
        allItems: res.data,
      });
      console.log("num data retrieved" + this.state.allItems.length);

      console.log("retrieving data");
      
    })
    .catch(err => {
      console.log("Error getting books from db");

    });

  }
  handleChange = (e) => {
    let selectedKey = e.target.value;
    console.log("Selected = " + selectedKey);
    this.setState(
        {
          currentItems: this.state.allItems.filter(
          item => item.cat === selectedKey)
        }
    );
    
    return;
  };
  render() {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown handleChange={this.handleChange} />

        <Styles>
          <Table data={this.state.currentItems} columns={tablecolumns} />
        </Styles>
      </div>
    );
  }
}

export default SEWrapper;
