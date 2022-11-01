import './App.css';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const person = { userName: 'Yoshi', age: 30 }
  const link = 'http://www.google.com'
  return (
    <div className="App">
      <h1>{title} </h1>
      <p>Liked {likes} times</p>
      <p>{person.userName} {person.age}</p>
      <p>{"Hello, ninjas"}</p>
      <p>{[1,2,3,4,5,6,7,8]}</p>
      <p>{Math.random()*10}</p>
      <a href={link}>google</a>
    </div>
  );
}

export default App;
