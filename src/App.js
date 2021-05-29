import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './screens/Home/Home'
import UnAuthenticatedApp from './UnAuthenticatedApp'
import useToken from './hooks/useAuth'


function App() {

    const [token, setToken] = useToken()

    if(token) {
        return (
            <div className="app">
                <Sidebar />
                <Home />
            </div>
        )
    } else {
       return <UnAuthenticatedApp/>
    }
}

export default App
