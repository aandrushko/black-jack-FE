import './App.css'
import Lobby from './pages/Lobby.js'
import Table from './pages/Table/index.js'
import MainLayout from "./components/MainLayout.js";
import { Route } from 'wouter';
function App() {

  return (
        <MainLayout>
            <Route path={'/'} component={Lobby}/>
            <Route path={'/table/:tableId'} component={Table}/>
        </MainLayout>
  )
}

export default App
