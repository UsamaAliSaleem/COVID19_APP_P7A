import React from 'react';
import { Cards, CountryPicker, Chart } from '.';
import { fetchData } from '../api';
import styles from './App.module.css';
import image from './images/image.png';
import HideAppBar from "./Appbarreact"
import {Button}from "react-bootstrap"
 import{BrowserRouter, Route}from "react-router-dom"


import About from "./About"
import Contact from "./Contact"

class Home extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>

<BrowserRouter>
   
   {/* <Navbar/> */}

   <HideAppBar/>
  <Route exat path="/Home" component={Home}/> 
 <Route path="/About" component={About}/> 
 <Route path="/Contact" component={Contact}/>  
 </BrowserRouter>
 {/* <HideAppBar/> */}
        <Button>usama</Button>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default Home;