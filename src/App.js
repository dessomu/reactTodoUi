import './App.css';

function App() {
  return (
   <>
   <div className="heading-input-button-todos-container">
    <h1>My Todos</h1>
    <input type="text" placeholder='Enter Your Todos' />
    <button id='add-todo'>Add Todo</button>
    <button id='remove-todo'>Remove Todo</button>
    <ul className="todos-list">
    <li className="mycheck"><input type="checkbox" id="check"/><label >Go to gym</label></li>
    <li className="mycheck"><input type="checkbox" id="check" /><label >Buy Bread</label></li>
   </ul>
   </div>
 
   </>
  );
}

export default App;
