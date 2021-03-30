import React, { Component } from 'react';
import Advertise from '../Components/Advertise';
import Card from '../Components/Card';
import MainPresent from '../Components/MainPresent';
import MenuList from '../Components/MenuList';
import Pagination from '../Components/Pagination';
import '../Style/containers/main.css'
import Delivery from './Delivery';
import Payment from './Payment';
import Support from './Support';

class Main extends Component {
  state = {
    allItems: ['Все товары', 'Все товары категории']
  }
  render() {
    const { allItems } = this.state;
    return (
      <div>
        <MainPresent />
        <MenuList />
        <h1>{allItems[0]}</h1>
        <section className='cards'>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </section>
        <section className='pagination'>
          <Pagination />
        </section>

        <Advertise />
        <Delivery />
        <Payment />
        <Support />
      </div>
    );
  }
}

export default Main;
