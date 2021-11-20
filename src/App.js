import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { GameDetail } from './pages/gamedetail'
import { GameNews } from './pages/news/gamenews'
import { GameInfo } from './pages/gameinfo/gameinfo'
import {ContextProvider} from './context'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameDetail} />
          <Route exact path="/news" component={GameNews} />
          <Route path="/:id" component={GameInfo} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
