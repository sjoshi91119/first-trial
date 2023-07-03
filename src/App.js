import "./App.css";

function App() {
  return <></>;
}

// using props to easily add new component

const User = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </>
  );
};

export default App;
