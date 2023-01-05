import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducer";
import Info from "./Fetch_info";

function App() {
  const store = createStore(reducer, []);
  return (
    <Provider store={store}>
        <Info />
    </Provider>
  );
}

export default App;
