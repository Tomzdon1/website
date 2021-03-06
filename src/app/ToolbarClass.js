import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IkonyToolbar from './IkonyToolbar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ShoppingBasket from 'material-ui/svg-icons/action/event';
import FavoriteToolbar from 'material-ui/svg-icons/action/grade';
import AccountToolbar from 'material-ui/svg-icons/action/account-box';
import Badge from 'material-ui/Badge';

const logoToolbar = <img className="toolbar_logo" src="logo.png"  />;
const pasekToolbar = <img src="pasek2.png"/>;
const shopTravel = <ShoppingBasket/>;
const favoriteToolbar = <FavoriteToolbar/>
const accountToolbar = <AccountToolbar/>

const styles = {
    buttonInput:{
     
    },
    buttonIcons:{
      minWidth : 0,
      padding:10,
      paddingRight:10,
      paddingLeft:10,
    },
    toolbar_fix:{
      width:'100%',
      backgroundColor:'white',
      height:100
      
    },
    toolbar_separator:{
      height:'80px',
      margin: '0 10px',
      marginLeft:0,
    },
    buttonIconsBadge:{
       minWidth : 0,
      padding:10,
      paddingRight:10,
      paddingLeft:10,
    }

}

export default class ToolbarClass extends React.Component {

  render() {
    return (
      <nav>
      <Toolbar className="toolbar_position" style={styles.toolbar_fix}>
        <ToolbarGroup className="toolbar_box_logo" firstChild={true} >
         <a href=""><img className="toolbar_logo" src="logo.png"  /></a>
        </ToolbarGroup>
           <ToolbarGroup className="toolbar_box" >
              <a className="toolbar_navigation toolbar_box_link" href=""  style={styles.buttonInput}>O firmie</a>
              <a className="toolbar_navigation toolbar_box_link" href=""  style={styles.buttonInput}>Zgłaszam ofertę</a>
              <a className="toolbar_navigation toolbar_box_link" href=""  style={styles.buttonInput}>Poszukuję oferty</a>
              <a className="toolbar_navigation toolbar_box_link" href=""  style={styles.buttonInput}>Kalkulator kredytowy</a>
              <a className="toolbar_navigation toolbar_box_link" href=""  style={styles.buttonInput}>Kontakt</a>
              <a className="toolbar_navigation toolbar_box_link" href=""  style={styles.buttonInput}>Oferty nieruchomości</a>
          <ToolbarSeparator className="toolbar_separator" style={styles.toolbar_separator} />
          <BottomNavigationItem style={styles.buttonIcons}
            icon={shopTravel}
            disableTouchRipple={true}
          />
          <Badge
            badgeContent={2}
            primary={true}
            style={styles.buttonIconsBadge}
            className="badge"
            badgeStyle = {{backgroundColor:'rgb(214, 223, 35)'}}

          >
             <BottomNavigationItem style={styles.buttonIcons}
            icon={favoriteToolbar}
            disableTouchRipple={true}
          />
            </Badge>
          <BottomNavigationItem style={styles.buttonIcons}
            icon={accountToolbar}
            disableTouchRipple={true}
          />
        </ToolbarGroup>
      
      </Toolbar>
      </nav>
    );
  }
}