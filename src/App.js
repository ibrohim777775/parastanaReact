import './Fonts/TTNormsPro/stylesheet.css';
import './Fonts/TTHoves-Regular/style.css';
import './Style/App.css';

import React, { Component } from 'react';
import Header from './Components/Header';
import UserAuth from './Components/UserAuth';
import NewUserReg from './Components/NewUserReg';
import Footer from './Components/Footer';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import Routes from './Routes/Routes';
import MainPresent from './Components/MainPresent';
import Main from './Containers/Main';
import Delivery from './Containers/Delivery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeaderMenuItems: ['Меню', 'Доставка', 'Оплата', 'Бронь стола'],
      authDisplay: 'none',
      newUserDisp: 'none',
      circleStyle: ' '
    }

  }
  showAuth = () => {
    this.state.authDisplay === 'none' ? this.setState({ authDisplay: 'flex' }) : this.setState({ authDisplay: 'none' })
  };
  showNewUser = () => {
    this.setState({ authDisplay: 'none' });
    this.state.newUserDisp === 'none' ? this.setState({ newUserDisp: 'flex' }) : this.setState({ newUserDisp: 'none' })
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header showAuth={this.showAuth} headerItems={this.state.HeaderMenuItems} />
          <UserAuth showAuth={this.showAuth} authDisplay={this.state.authDisplay} showNewUser={this.showNewUser} />
          <NewUserReg newUserDisp={this.state.newUserDisp} showNewUser={this.showNewUser} />
          {/* {Routes.map(item => (<Route exact={item.exact} path={item.path} component={item.component} />))} */}
          <main>
            <div className='container'>
              <Main />

            </div>
            <section className='main__video'>
              <iframe width="100%" height="950px" src="https://www.youtube.com/embed/MtcVETXsqLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>

          </main>

          <Redirect to='/main' />
          <Footer showAuth={this.showAuth} authDisplay={this.state.authDisplay} showNewUser={this.showNewUser} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
