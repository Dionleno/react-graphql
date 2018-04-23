import gql from 'graphql-tag';

/**
 * AllListTodos = listar todos os clientes 
 */
export const AllListTodos = gql`
query {
  allTodoes {
    id
    email
    name
  }
}
`

/**
 * PostTodos = Criar novo usuario
 */
export const PostTodos = gql`
 mutation createTodo($email: String! , $name: String!){
  createTodo(email:$email,name:$name){
     email
     name
   }
 }
`