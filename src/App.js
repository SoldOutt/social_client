import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Home from './pages/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContext'
import ProtectedRoute from './routing/ProtectedRoute'
function App() {
    return (
        <AuthContextProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/login" component={Login}></Route>
                    </Switch>
                    <Switch>
                        <Route
                            exact
                            path="/profile"
                            component={Profile}
                        ></Route>
                    </Switch>
                    <Switch>
                        <ProtectedRoute exact path="/" component={Home} />
                        {/* <Route exact path="/" component={Home}></Route> */}
                    </Switch>
                </div>
            </Router>
        </AuthContextProvider>
    )
}

export default App
