import { useDispatch, useSelector } from "react-redux";
import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions";

const Contador = () => {

  const state = useSelector(state => state);

  const dispatch = useDispatch()
  return (
    <div>
      <h1>Contador Redux</h1>
      <nav>
        <button onClick={() => dispatch(sumar())}>+</button>
        <button onClick={() => dispatch(restar())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(sumar5())}>5+</button>
        <button onClick={() => dispatch(restar5())}>5-</button>
        <h3>{state.contador}</h3>
      </nav>
    </div>
  )
}


export default Contador;