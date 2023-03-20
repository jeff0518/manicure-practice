import Router from './routes/Router'
import { CurrentUserContextProvider } from './components/contexts/usersContext/CurrentUserContext'
import './App.scss'

function App() {
  return (
    <div className="App">
      <CurrentUserContextProvider>
        <Router />
      </CurrentUserContextProvider>
    </div>
  );
}

export default App
