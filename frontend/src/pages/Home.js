import React, {Component} from "react";
import articles from "../dummydata/articles";
import axios from "axios";
import SEWrapper from "./SEWrapper";

class Home extends Component {
  componentDidMount() {
    console.log("Num articles = " + articles.length);

    // articles.forEach((article) => axios.post("http://localhost:5000/api/articles", article)
    // .then((res) =>{
    //   console.log("article posted ");

    // }).catch(err => console.log("Error posting dummy articles")));
    
  }
  render() {
    return (
      <div>
        <h2> How to use SEPER</h2>
        <p>I am not sure what to put on the home page</p>
        <p>A nice logo? Instructions?</p>
      </div>
    );
  }
}
export default Home;
