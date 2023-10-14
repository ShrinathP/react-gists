import useToggle from "../hooks/02_UseToggle";

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <>
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>make true</button>
      <button onClick={() => toggleValue(false)}>make false</button>
    </div>
    </>
  );
}

export default ToggleComponent;
