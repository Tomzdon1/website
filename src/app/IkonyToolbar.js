import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/forum';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Chat from 'material-ui/svg-icons/communication/chat';


const recentsIcon = <Chat />;
const favoritesIcon = <ContactMail/>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
const styles = {
  container: {
       backgroundColor: 'rgb(232,232,232)',
       boxShadow : 'none',
  }
};
class IkonyToolbar extends Component {
constructor(props, context) {
    super(props, context);
    this.state = {
     selectedIndex: 0,
    };
  }
  select(index) {
      this.setState({selectedIndex: index});
  }
  render() {
    return (
    <div >
      <Paper style={styles.container} >
        <BottomNavigation  style={styles.container}  selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
      </div>
    );
  }
}

export default IkonyToolbar;