import React, { Component } from 'react'
import Api from './Api'

class App extends Component {
  componentDidMount() {
    // Api.loadGenres().then((res) => console.log(res))
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                  <img src="images/logo.png" height="30" />
              </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="">Menu item</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>


        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png" /></h1>
                <p>Keep track of all series you have watched or want to watch in the future.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
