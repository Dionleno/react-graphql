import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/**
 * GraphQl
 */
import { graphql } from 'react-apollo';
import { AllListTodos } from './Schema';
/**
 * Components
 * @param list => array de itens
 */
import Lists from '../../components/Lists'

class TodoApp extends Component {
   constructor(props){
       super(props);
   }  
    
    render() {
        const { todos } = this.props;
         
        return (
         <div>
             
             <div class="panel panel-info">
                   <div class="panel-heading">
                         <h2 class="panel-title">Lista de clientes</h2>
                    </div>
                   <div class="panel-body">
                        <Link to='/cadastro' class="btn btn-info btn-xs pull-right">Adicionar novo</Link><br/><br/>
                        {todos.loading ? "carregando" : <Lists list={this.props.todos.allTodoes}></Lists>}
                   </div>
             </div>
              
          </div>
        )
    }
}

export default graphql(AllListTodos,{
    name: 'todos'
})(TodoApp);