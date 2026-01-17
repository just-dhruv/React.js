import useToggle from "./hooks/useToggle";

export default function ToggleTest() {
  const [customHookValue, customHookFunction] = useToggle();
  const [value, toggle] = useToggle();

  return (
    <>
      <div>
        <button onClick={customHookFunction}>Click</button>

        {customHookValue && <p>Hello world</p>}
      </div>
      <div>
        <button onClick={toggle}>Toggle</button>

        {value && <p>Hello world i am dhruv</p>}
      </div>
    </>
  );
}
