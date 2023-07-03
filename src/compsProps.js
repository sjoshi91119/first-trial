function compsProps() {
  return (
    <>
      <User name="Shubham" age="21" email="sjoshi9119@gmail.com" />
      <User name="akritya" age="20" email="akjoshi@gmail.com" />
      <User name="Sburi" age="201" email="buriburi@gmail.com" />
    </>
  );
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

export default compsProps;
