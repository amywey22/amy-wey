import React , {Component} from 'react'
import './Header.css';
import seven_sisters from '../Assets/seven_sisters.jpg'

export default class Header extends Component {
  render() {
    return (
      <div className="Header" id="header">
        <div className="ImageContainer">
          <img src={seven_sisters} alt="Seven Sisters Cliffs - Sussex"
          className="ImageFit"/>
        </div>
        <div className="Center">
          <div className="Introduction">
            <h2>Hi! I'm</h2>
            <h1>Amy Wey</h1>
          </div>
        </div>
      </div>
    );
  }
}
