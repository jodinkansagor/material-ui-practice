import React, { useState } from 'react';
import Header from './ui/Header'
import Contact from './ui/Contact'
import theme from './ui/Theme'
import LandingPage from '../components/LandingPage'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './ui/Footer'


function App() {

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header value={value} setValue={setValue} selectedIndext={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route exact path='/customsoftware' component={() => <div>Custom Software</div>} />
          <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>} />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route exact path='/revolution' component={() => <div>The Revolution</div>} />
          <Route exact path='/about' component={() => <div>About Us</div>} />
          <Route exact path='/contact' render={props => (
            <Contact
              {...props}
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )} />
          <Route exact path='/estimate' component={() => <div>Free Estmates</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndext={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
