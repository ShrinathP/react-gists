import useBoolean from "../hooks/03_UseBoolean_01";

function BooleanComponent() {
  const [value, setValue] = useBoolean(false);
  return (
    <>
    <div>
      <h2>useBoolean Example</h2>
      <div>{value.toString()}</div>
      <button onClick={setValue.toggler}>Toggle value</button>
      <button onClick={() => setValue.on()}>make true</button>
      <button onClick={() => setValue.off()}>make false</button>
    </div>
    </>
  );
}

export default BooleanComponent;
