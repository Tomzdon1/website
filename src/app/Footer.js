import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const recentsIcon = <img src='images/youtube_grey.jpg' width='30'/>
const faceboookIcom = <img src='images/facebook_grey.jpg' width='30'/>
const googleIcon = <img src='images/google.png' width='100'/>
const styles = {
  root:{
    height: 'auto',
    width: '100%',
    textAlign: 'centre',
    display: 'inline-block',
    background: 'rgb(117, 117, 117)',
    
  },
  box:{
    height: 'auto',
    width: '940px',
    textAlign: 'center',
    background: 'rgb(117, 117, 117)',
    fontSize: '13px',
    display:'inline-block',
  },
  kosikowski_paper:{
    height: 'auto',
    width: 300,
    margin: 10,
    textAlign: 'center',
    background: 'rgb(117, 117, 117)',
    color:'white',
    display: 'inline-block',
    fontSize: '13px',
    float:'left',
  },
  kosikowski_paper_social:{
    height: 'auto',
    width: 250,
    margin: 10,
    textAlign: 'center',
    background: 'rgb(117, 117, 117)',
    color:'white',
    display: 'inline-block',
    fontSize: '13px',
    float:'left',
  },
  list_header:{
    color:'white',
    textAlign:'left',
    paddingLeft:0
  },
  list_box:{
      margin:-10,
      textAlign:'left',
  }

};

const Footer = () => (
  <footer>    
 
    <Paper style={styles.root} zDepth={1} >
    <Paper style={styles.box} zDepth={0} >
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Kosikowski</Subheader>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, mauris at auctor mollis, lorem diam gravida ante, ultrices vehicula ipsum diam vel tortor</h5>
        <ul>
        <li><a href="">O nas</a> </li>
        <li><a href="">Konakt</a> </li>
        <li><a href="">Cennik</a> </li>
        <li><a href="">Warunki współpracy</a> </li>
        </ul>

    </Paper>
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Mapa Strony</Subheader>
      <ul>
        <li><a href="">Mapa miejscowości</a> </li>
        <li><a href="">Baza firm</a> </li>
        <li><a href="">Artykuły i porady</a> </li>
        <li><a href="">Mapa kategorii</a> </li>
      </ul>
    </Paper>
    <Paper style={styles.kosikowski_paper_social} zDepth={0}  >
        <Subheader style={styles.list_header}>Dołącz do nas</Subheader>
        <BottomNavigationItem style={styles.list_box} icon={recentsIcon} />
        <BottomNavigationItem style={styles.list_box} icon={faceboookIcom} /><br/><br/>
        <BottomNavigationItem style={styles.list_box} icon={googleIcon} />
        

    </Paper>
    </Paper>
    </Paper>
  </footer>
);

export default Footer;