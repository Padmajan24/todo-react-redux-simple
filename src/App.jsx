import React from 'react';
import store from './store/store'; 
import './TodoList.css'
import './addtodoform.css'
// import './components/TodoList.css';
// import './components/addtodoform.css';
import { Provider } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <h1 className='text-center'>ToDo App</h1> */}
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;















// import './App.css'

// function App() {
  

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
