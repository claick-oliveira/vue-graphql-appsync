import gql from 'graphql-tag'

export default gql`
  mutation createTask($name: String!, $completed: Boolean!) {
    createTask(
      input: {
         name: $name, completed: $completed
      }
    ) {
      id
      name
      completed
    }
  }
`
