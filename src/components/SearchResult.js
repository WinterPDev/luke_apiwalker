import React, { useState, useEffect } from 'react';
import {BrowserRouter, Link, Switch, Route, useHistory} from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';


const SearchResult = (props) => {
    const [searchResult, setSearchResult] = useState([{}]);
    const {resource,id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response) => {
                setSearchResult(response.data)
            }).catch(err => {
                console.log(err);
                setSearchResult("")
            })
    },[resource, id])

    return(
        <>
        {searchResult.length <= 0 ?
            <div>
                <h1>These aren't the droids you are looking for. 4 0 4</h1>
                <img src="https://i.gifer.com/72uG.gif"/>
            </div>
        : 
        <div>
        
            <h1>Droids found!</h1>
            <h1>{Object.keys(searchResult)[0]} : {Object.values(searchResult)[0]}</h1>
            <h1>{Object.keys(searchResult)[1]} : {Object.values(searchResult)[1]}</h1>
            <h1>{Object.keys(searchResult)[2]} : {Object.values(searchResult)[2]}</h1>
            <h1>{Object.keys(searchResult)[3]} : {Object.values(searchResult)[3]}</h1>
            <h1>{Object.keys(searchResult)[4]} : {Object.values(searchResult)[4]}</h1>

        </div>
    }
        
        </>
    )
}

export default SearchResult;