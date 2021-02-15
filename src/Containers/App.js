import '../Fonts/TTNormsPro/stylesheet.css'
import '../Style/App.css';

import React, { Component } from 'react';
import Header from './Header';
import UserAuth from '../Components/UserAuth';
import NewUserReg from '../Components/NewUserReg';

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
  circleHandler = (e) => {
    console.log(e);
    let style = `background-color: '#00AC4E'`;
    // this.state.circleStyle === '' ? this.setState({ circleStyle: style }) : this.setState({ circleStyle: '' });
    this.setState({ circleStyle: style })
  }

  render() {
    return (
      <div>
        <Header showAuth={this.showAuth} headerItems={this.state.HeaderMenuItems} />
        <UserAuth showAuth={this.showAuth} authDisplay={this.state.authDisplay} showNewUser={this.showNewUser} />
        <NewUserReg circleHandler={this.circleHandler} circleStyle={this.state.circleStyle} newUserDisp={this.state.newUserDisp} showNewUser={this.showNewUser} />
      </div>
    );
  }
}

export default App;
