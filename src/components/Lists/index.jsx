import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './style.css'


export default props => {

    if(!props.list || props.list.length === 0){
        return;
    }
 
    return (
        <ul class="list-group">
            { props.list.map(resp => (
                <li class="list-group-item" key={resp.id}>
                    <Link class="btn btn-danger btn-xs pull-right spacing_button" to={`/delete/${resp.id}`}>Delete</Link>
                    <Link class="btn btn-success btn-xs pull-right spacing_button" to={`/edit/${resp.id}`}>Edite</Link>
                    
                    <Link to={`/edit/${resp.id}`}>{resp.name}</Link>
                </li>
            )) }
        </ul>
    ) 
}
    
    