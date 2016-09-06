import React from 'react'
import { Provider } from 'react-redux'
import App from './container/app.js'
import Store from './store'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//pages
import Index from './container/indexpage'
import Says from './container/sayspage'
import My from './container/mypage'
import About from './container/aboutpage'
import Mall from './container/mallpage'
import Checkin from './container/checkin'

//let store = createStore(todoApp);

ReactDOM.render(
    <Provider store = { Store } >
        <Router history = { browserHistory } >
            <Route path = '/' component = {App} >
                <IndexRoute component = { Index } />
                <Route path = "says" component = { Says } />
                <Route path = "my" component = { My } />
                <Route path = "about" component = { About } />
                <Route path = "mall" component = { Mall } />
                <Route path = "checkin" component = {Checkin }/>
            </Route>
        </Router>
    </Provider>, document.getElementById("root")
)
