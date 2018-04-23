import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
/**
 * GraphQl
 */
import { graphql } from 'react-apollo';
import { createTodo , AllListTodos } from './Schema';


export class Create extends Component {
  constructor(props){
      super(props);
      this.submited = this.submited.bind(this);
  }

  submited = (e) => {
    e.preventDefault();
    this.props.CreatePostTodos({
        variables:{
            email: this.email.value,
            name: this.name.value
        },
         refetchQueries: [ { query: AllListTodos }]
    }).then(resp => {
       this.props.history.push("/")
    }).catch(error => false)
     
  }  

  render() {
    return (
      <div>
        <div class="panel panel-info">
              <div class="panel-heading">
                    <h3 class="panel-title">Cadastrar Clientes</h3>
              </div>
              <div class="panel-body">
              <form onSubmit={this.submited} role="form">
                   
                    <div class="form-group">
                        <label for="">Nome</label>
                        <input type="text" class="form-control" ref={input => (this.name = input)} placeholder="Nome" />
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" class="form-control" ref={input => (this.email = input)} placeholder="Email" />
                    </div>
                    
                    <button type="submit" class="btn btn-success pull-right">Salvar</button>
                    <Link to='/' class="btn btn-info pull-left">Voltar</Link>
                </form> 
              </div>
        </div>
        
      </div>
    )
  }
}


export default graphql(createTodo,{
    name: 'CreatePostTodos'
})(Create);

