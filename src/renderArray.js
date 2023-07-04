function renderArray() {
  const names = ["Anand", "Shobha", "Akritya", "Shubham", "Durate"];

  return (
    <>
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </>
  );
}

export default renderArray;
