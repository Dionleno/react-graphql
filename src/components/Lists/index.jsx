import React from 'react'
import { Link, Redirect } from 'react-router-dom'
export default props => {

    if(!props.list || props.list.length === 0){
        return;
    }
 
    return (
        <ul class="list-group">
            { props.list.map(resp => (
                <li class="list-group-item" key={resp.id}>
                    <span class="pull-right">Edite</span>
                    <span class="pull-right">delete</span>
                    
                    <Link to={`/edit/${resp.id}`}>{resp.name}</Link>
                </li>
            )) }
        </ul>
    ) 
}
    
    