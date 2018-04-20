import React from 'react'

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
                    {resp.name}
                </li>
            )) }
        </ul>
    ) 
}
    
    