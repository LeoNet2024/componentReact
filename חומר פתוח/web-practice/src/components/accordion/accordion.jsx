export default function Accordion(props) {
  console.log(props.func);
  return (
    <div>
      <button onClick={(prev) => props.func((prev) => !prev)}>
        {props.children}
      </button>
    </div>
  );
}
