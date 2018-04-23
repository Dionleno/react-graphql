import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
/**
 * GraphQl
 */
import { graphql,Query } from 'react-apollo';
import { getTodo , DeleteTodo , AllListTodos } from './Schema';


export class Delete extends Component {
  constructor(props){
      super(props);
      this.submited = this.submited.bind(this);
  }

  submited = (e) => {
    e.preventDefault();
    this.props.DeletePostTodos({
        variables:{
            id: this.id,
         },
         refetchQueries: [ { query: AllListTodos }]
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
                    <h3 class="panel-title">Deletar Clientes</h3>
              </div>
              <div class="panel-body">
             
              <form onSubmit={this.submited} role="form">
                <Query query={getTodo} variables={{id: id}}>
                    {({ loading, error, data }) => {
                        console.log(data);
                    if (loading) return null;
                    if (error) return `Error!: ${error}`;
                    
                    //get id
                    this.id = data.Todo.id;   

                    return (
                        <div> 
                            <div class="form-group">
                                <label for="">Nome: </label>
                                {data.Todo.name}
                            </div>

                            <div class="form-group">
                                <label for="">Email: </label>
                                {data.Todo.email}
                            </div>
                            
                        </div>
                    );  
                    
                    }}
                </Query>
                    <Link to='/' class="btn btn-info ">Voltar</Link>&nbsp;
                    <button type="submit" class="btn btn-danger">Deletar</button>
                   
                </form> 
              </div>
        </div>
        
      </div>
    )
  }
}


export default graphql(DeleteTodo,{
    name: 'DeletePostTodos'
})(Delete);

