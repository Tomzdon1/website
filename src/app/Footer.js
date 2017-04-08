import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Phone from 'material-ui/svg-icons/communication/phone';
import Email from 'material-ui/svg-icons/communication/email';
import {grey50,} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
const recentsIcon = <img src='images/youtube_grey.jpg' width='30'/>
const faceboookIcom = <img src='images/facebook_grey.jpg' width='30'/>
const googleIcon = <img src='images/google.png' width='100'/>


const phone = <Phone/>;

const styles = {
  root:{
    height: 'auto',
    width: '100%',
    textAlign: 'centre',
    display: 'inline-block',
    backgroundColor: 'rgb(117, 117, 117)',
    
  },
  box:{
    height: 'auto',
    maxWidth: '960px',
    minWidth: '940px',
    textAlign: 'center',
    backgroundColor: 'none',
    fontSize: '13px',
    display:'inline-block',
  },
  kosikowski_paper:{
    height: 'auto',
    width: 300,
    textAlign: 'center',
    backgroundColor: 'none',
    color:'white',
    display: 'inline-block',
    fontSize: '13px',
    float:'left',
    marginRight:"15px"
  },
  kosikowski_paper_social:{
    height: 'auto',
    width: 300,
    marginTop:0,
    textAlign: 'center',
    backgroundColor: 'none',
    color:'white',
    display: 'inline-block',
    fontSize: '13px',
    float:'left',
  },
  list_header:{
    color:'white',
    textAlign:'left',
    paddingLeft:0,
    fontSize:22
  },
  list_box:{
     marginTop:35,
      textAlign:'left',
      float:'left',
  },
  fbBox:{
    border:'none', 
    overflow:'hidden', 
    height:68, 
    width:'310px'
  },
  span:{
    position: 'absolute',
    marginLeft: '15px',
    color: 'white',
    fontSize: '18px'
  },
  span_app:{
    position: 'absolute',
    color: '#fff',
    fontSize: '18px',
    color:'white',
    marginTop: 10
  },
   span_news:{
    position: 'absolute',
    color: '#fff',
    marginTop:'10px',
    fontSize: '18px',
  },
  img:{
    marginTop: '25px',
    width:'190px',
    marginLeft:'-12px',

  },
  news_email:{
    marginTop:'40px',
    width:240,
    backgroundColor:' rgb(172, 171, 168)',
  },
  news_input:{
    marginLeft:'10px'
  },
  button_save:{
    float:'right',
    color:'#fff',
    position: 'absolute',
    fontSize: '18px',
    marginTop:'40px',
    backgroundColor: 'rgb(214, 223, 35)',
    minWidth:' 68px',
    height: '48px',
    marginLeft: 5
  },
  label_save:{
    paddingLeft:0,
    paddingRight:0
  }
};


const Footer = () => (
  <footer>    
    <Paper style={styles.root} zDepth={1} >
    <Paper style={styles.box} zDepth={0} >
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Kosikowski</Subheader>
        <ul>
        <li><a href="">O firmie</a> </li>
        <li><a href="">Zgłaszam ofertę</a> </li>
        <li><a href="">Poszukuję oferty</a> </li>
        <li><a href="">Kalkulator kredytowy</a> </li>
        <li><a href="">Kontakt</a> </li>
        </ul>

    </Paper>
    <Paper style={styles.kosikowski_paper} zDepth={0}  >
    <Subheader style={styles.list_header}>Masz Pytania?</Subheader>
      <ul>
      <li><Phone color={grey50}/> <span style={styles.span}>77 410 50 60</span></li>
      <li><a href="mailTo:kontakt@kosikowski.com.pl"><Email color={grey50}/> <span style={styles.span}>kontakt@kosikowski.com.pl</span></a></li>
      <li><span style={styles.span_app}>Pobierz darmową aplikację mobilną</span></li>
      <li> 
        <a href='https://play.google.com/store/apps/details?id=pl.netlinks.KosikowskiHybrid&utm_source=kosikowski.com.pl&utm_campaign=footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='pobierz z Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/pl_badge_web_generic.png'style={styles.img} width='130px'/></a>
    </li>
      </ul>
    </Paper>
    <Paper style={styles.kosikowski_paper_social} zDepth={0}  >
      <ul>
      <li><div className="fbBox">
            <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fbiuro.kosikowski&amp;width=310&amp;height=198&amp;colorscheme=dark&amp;show_faces=false&amp;header=false&amp;stream=false&amp;locale=pl_PL&amp;show_border=false&amp;appId=232720443518804" scrolling="no" frameborder="0" style={styles.fbBox} allowtransparency="true">
            </iframe>
      </div></li>
      <li><span style={styles.span_news}>Nie przegap nowych ofert</span></li>
      <li> <TextField style={styles.news_email} floatingLabelFixed={false} underlineShow={false} inputStyle={styles.news_input} hintStyle={styles.news_input}
        hintText="Adres e-mail"
  />     <FlatButton style={styles.button_save} labelStyle={styles.label_save} label="Zapisz" /></li>
    </ul>
    </Paper>
    </Paper>
    </Paper>
  </footer>
);

export default Footer;