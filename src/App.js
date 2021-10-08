import TallerContainer from "./containers/TallerContainer"
import { Provider } from "react-redux"
import "./App.css"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <div className='App-link'>
            <TallerContainer />
          </div>
        </header>
      </div>
    </Provider>
  )
}

export default App
