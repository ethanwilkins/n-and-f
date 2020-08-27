import React, { Component } from 'react';

import styles from '../styles/Navbar.module.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.state = {
      open: false
    };
  }
  
  render() {
    //const { open } = this.state;
    
    return (
      <div className={styles.navbar} ref={this.navbar}>
        Navbar
      </div>
    );
  }
}

export default Navbar;
