import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  );
}

export default App;



/*import React from 'react';

class App extends React.Component {
  state = {resource: 'posts'};

  render(){
    return (
      <div className="App">
        <div>
          <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
          <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
*/