import useProductCounter from "./useProductCounter.js";
import "./styles.css";

export default function App() {
  const { count, increment, decrement } = useProductCounter();

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
