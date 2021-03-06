
import { Provider } from 'react-redux';
import Contador from './components/Contador';
import ShoppingCart from './components/ShoppingCart';
import store from "./store";


function App() {


  return (


    <Provider store={store}>

      <div>
        <ShoppingCart />
        <hr />
        <h1>Redux</h1>
        <Contador />

      </div>
    </Provider>

  );
}

export default App;
