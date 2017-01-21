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
    height: 175,
    width: '100%',
    textAlign: 'centre',
    display: 'inline-block',
    background: 'rgb(117, 117, 117)',
    
  },
  box:{
    height: 175,
    width: '1000px',
    textAlign: 'center',
    background: 'rgb(117, 117, 117)',
    marginLeft:75,
    fontSize: '13px'
  },
  kosikowski_paper:{
    height: 100,
    width: 250,
    margin: 20,
    textAlign: 'center',
    background: 'rgb(117, 117, 117)',
    color:'white',
    display: 'inline-block',
    fontSize: '13px',
  },
  kosikowski_paper_social:{
    height: 100,
    width: 125,
    margin: 20,
    textAlign: 'center',
    background: 'rgb(117, 117, 117)',
    color:'white',
    display: 'inline-block',
    fontSize: '13px',
    position:'absolute'
    
    
  },
  list_header:{
    color:'white',
    textAlign:'left',
    marginLeft:-10,
  },
  list_box:{
      margin:-10,
      textAlign:'left',
  }

};

const Footer = () => (
  <div>
    <Paper style={styles.root} zDepth={1} >
    <Paper style={styles.box} zDepth={0} >
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Kosikowski</Subheader>
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
  </div>
);

export default Footer;