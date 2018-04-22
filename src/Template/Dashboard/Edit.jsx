import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
/**
 * GraphQl
 */
import { graphql,Query } from 'react-apollo';
import { getTodo, updateTodo } from './Schema';


export class Edit extends Component {
  constructor(props){
      super(props);
      this.submited = this.submited.bind(this);
  }

  submited = (e) => {
    e.preventDefault();
    console.log(this.id)
    this.props.UpdatePostTodos({
        variables:{
            id: this.id.value,
            email: this.email.value,
            name: this.name.value
        }
    }).then(resp => {
       this.props.history.push("/")
    }).catch(error => {
        console.log(error)
        return false;
    })
     
  }  

  render() {
     
      const { id } = this.props.match.params;
      console.log(id)
    return (
      <div>
        <div class="panel panel-info">
              <div class="panel-heading">
                    <h3 class="panel-title">Atualizar Clientes</h3>
              </div>
              <div class="panel-body">
             
              <form onSubmit={this.submited} role="form">
                     <Query query={getTodo} variables={{id: id}}>
                {({ loading, error, data }) => {
                     console.log(data);
                if (loading) return null;
                if (error) return `Error!: ${error}`;
                   
                    
                return (
                    <div>
                        <div class="form-group">
                            <label for="">ID</label>
                            <input type="text" disabled class="form-control" value={data.Todo.id}  ref={input => (this.id = input)} placeholder="Input field" />
                        </div>
                        <div class="form-group">
                            <label for="">Nome</label>
                            <input type="text" class="form-control" value={data.Todo.name} ref={input => (this.name = input)} placeholder="Input field" />
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="text" class="form-control" value={data.Todo.email} ref={input => (this.email = input)} placeholder="Input field" />
                        </div>
                        
                    </div>
                  );  
                 
                }}
            </Query>
                    
                    <button type="submit" class="btn btn-success pull-right">Salvar</button>
                    <Link to='/' class="btn btn-info pull-left">Voltar</Link>
                </form> 
              </div>
        </div>
        
      </div>
    )
  }
}


export default graphql(updateTodo,{
    name: 'UpdatePostTodos'
})(Edit);

