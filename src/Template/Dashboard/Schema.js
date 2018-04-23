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
export const createTodo = gql`
 mutation createTodo($email: String! , $name: String!){
  createTodo(email:$email,name:$name){
     email
     name
   }
 }
`

/**
 * getTodo = buscar por ID
 */
export const getTodo = gql`
query Todo($id: ID!) {
  Todo(id: $id) {
      id
      email
      name
    }
  }
`;

/**
 * updateTodo = Atualizar clientes
 */
export const updateTodo = gql`
 mutation updateTodo($id: ID! ,$email: String! , $name: String!){
  updateTodo(id:$id, email:$email,name:$name){
     id
     email
     name
   }
 }
`

/**
 * DeleteTodo = deletar user 
 */

 export const DeleteTodo = gql`
 mutation deleteTodo($id: ID!){
   deleteTodo(id: $id){
     id
   }
 }
 `