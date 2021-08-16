import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import articles from "../dummydata/articles";
require("dotenv").config();

const SubmissionForm =()=>{
    
    const {register, handleSubmit} = useForm();
    const{result, setResult} = useState("");
    let onSubmit = (data) => {
    
      console.log("author = " + data.authors);

      const articleData = {
        _id: "" + (articles.length + 1),
        cat: document.getElementById("sePractice").value,
        title: data.title,
        authors: data.authors,
        source: data.source,
        pubyear: data.pubyear,
        doi: data.doi,
        claim: data.claim,
        evidence: data.evidence,
      };
      console.log(JSON.stringify(articleData));
     
      axios
        .post('http://localhost:5000/api/articles', articleData)
        .then((res) => {
          console.log("article posted");
          articles.concat([articleData]);
        })
        .catch((err) => {
          console.log("Error submitting!");
          console.log(err);
          
        });

    }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Title" />
        <p>
          <input {...register("authors")} placeholder="Authors" />
        </p>
        <p>
          <input {...register("source")} placeholder="Source" />
        </p>
        <p>
          <input {...register("pubyear")} placeholder="Publication Year" />
        </p>
        <p>
          <input {...register("doi")} placeholder="DOI" />
        </p>
        <select id = "sePractice" {...register("sepractice")}>
            <option value="">Select SE practice...</option>
            <option value="TDD"> TDD</option>
            <option value="Mob Programming"> Mob Programming</option>
        </select>
        <p>{result}</p>
        <input type="submit"/>

      </form>
    );










}
export default SubmissionForm;
