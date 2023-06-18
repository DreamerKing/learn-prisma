const typeDefs = `
  type Todo {
    id: Int
    name: String
    finished: Boolean
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(name: String): Todo
  }
`;

export default typeDefs;
