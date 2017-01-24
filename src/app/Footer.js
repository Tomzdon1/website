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
    marginTop:0,
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
     marginTop:25,
      textAlign:'left',
      float:'left',
  },
  fbBox:{
    border:'none', 
    overflow:'hidden', 
    height:68, 
    width:'auto'
  },
};

const Footer = () => (
  <footer>    
    <Paper style={styles.root} zDepth={1} >
    <Paper style={styles.box} zDepth={0} >
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Kosikowski</Subheader>
     <div><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, mauris at auctor mollis, lorem diam gravida ante, ultrices vehicula ipsum diam vel tortor</h5></div>
        <ul>
        <li><a href="">O firmie</a> </li>
        <li><a href="">Zgłaszam ofertę</a> </li>
        <li><a href="">Poszukuję oferty</a> </li>
        <li><a href="">Kalkulator kredytowy</a> </li>
        <li><a href="">Kontakt</a> </li>
        </ul>

    </Paper>
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Inne informacje</Subheader>
    <div><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, mauris at auctor mollis, lorem diam gravida ante, ultrices vehicula ipsum diam vel tortor</h5></div>
      <ul>
        <li><a href="">Konto klienta</a> </li>
        <li><a href="">Obserwowane oferty</a> </li>
        <li><a href="">Umów prezentacje</a> </li>
        <li><a href="">Program MDM</a> </li>
        <li><a href="">Mapa witryny</a> </li>
        <li><a href="">Serwis używa cookies</a> </li>
      </ul>
    </Paper>
    <Paper style={styles.kosikowski_paper_social} zDepth={0}  >
      <div class="fbBox">
            <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fbiuro.kosikowski&amp;width&amp;height=198&amp;colorscheme=dark&amp;show_faces=false&amp;header=false&amp;stream=false&amp;locale=pl_PL&amp;show_border=false&amp;appId=232720443518804" scrolling="no" frameborder="0" style={styles.fbBox} allowtransparency="true">
            </iframe>
      </div>
    <a href="https://play.google.com/store/apps/details?id=pl.netlinks.KosikowskiHybrid" style={styles.list_box}  title="Kosikowski. Serwis Nieruchomości - Google Play" ><img src='images/google.png' width='100'/></a>

    </Paper>
    </Paper>
    </Paper>
  </footer>
);

export default Footer;