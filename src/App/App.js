import React, {Component} from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Interest /> */}
        <Footer />
      </div>
    )
  }
}
export default App;
