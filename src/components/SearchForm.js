import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';


const SearchForm = (props) => {
    const [resource, setResource] = useState([]);
    const [id, setId] = useState("");
    const [search, setSearch] = useState({resource: "people", id: ""});
    const history = useHistory();

    useEffect(() => {
        axios.get('https://swapi.dev/api/')
            .then((response) => {
                setResource(Object.keys(response.data))
            }).catch(err => {
                console.log(err);
                setSearch("")
            })
    },[])

    const onChangeHandler = (e) => {
        setSearch({...search,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${search.resource}/${search.id}`);
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="resource">Search for : </label> 
                    <select name="resource" onChange={onChangeHandler}>
                    {
                        resource.map((resource, i) =>{
                            return <option key={i} value={resource}>{resource}</option>
                        })
                    }
                    </select>
                <label htmlFor="id">ID : </label>
                <input type="number" name="id" onChange={onChangeHandler} />
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchForm;