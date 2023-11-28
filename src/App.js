import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
