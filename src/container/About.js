import React, {Component} from 'react';
import styles from './About.css'
import withStyle from '../withStyle'
console.log('------');
console.log(styles._getCss());
console.log(styles.title);

console.log('------');

 function About (props) {
    
    return <h1 className={styles.title}>About</h1>
}

export default withStyle(About, styles)
