import { useState, useEffect } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
      event.preventDefault();
      if(toDo === "") return;
      //toDos.push 절대 하지 않음 : state를 직접적으로 변경하지 않는다 ** 함수 사용해서 수정 
      setToDos(currentArray => [toDo, ...currentArray]) //function(currentarray) return~
      setToDo("");
    }
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value = {toDo} 
          type="text" 
          placeholder="Write your todo..">
        </input>
        <button>Add To Do</button> 
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=>( //map함수 : array의 모든 item에 함수 적용하여 react element의 array로 리턴 
          <li key={index}>{item}</li>
        ))}</ul>
    </div>
  );
}

export default App;
