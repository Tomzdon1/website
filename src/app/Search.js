import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectOne from './SelectOne';
import SelectTwo from './SelectTwo';
import Map from 'material-ui/svg-icons/maps/map';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const recentsIcon = <img src='images/mape.png' />;
const styles = {
  container: {
    width: '940px',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    border: 'solid 1px rgb(117, 117, 117)',
    padding: '20px 10px',
    backgroundColor: 'rgb(117, 115, 112)',
    color: 'white',
  },
  input_search: {
    width:440
  },
  search: {
    border: 'solid 1px',
  },
  button_search: {
    height: 48,
    float:'left',
    width:110
    
  },
  select_one: {
    float: 'left',
  },
  text_possition: {
    marginLeft: 25,
    marginRight: 5,
    width: 440,
    backgroundColor: 'white',
    float:'left'
  },
  icon_maps: {
    width: 50,
    padding:'0 ,0 ,0,0'
  },
  text_in_area: {
    paddingLeft:10,
    color: 'black', //nie ten kolor
    fontSize: '15px',
    width:440
  }

};

const state = {
    dataSource: ['Namysłów', 'Oleśnica', 'Syców'],
  };

const Search = () => (
  <div>
    <Paper style={styles.container} zDepth={1}>
      <SelectOne style={styles.select_one} />
      <SelectTwo />
      <AutoComplete style={styles.text_possition}
        hintText="Miejscowość"
        dataSource={state.dataSource}
        underlineShow={false}
        textFieldStyle= {styles.text_in_area}
        menuStyle={styles.input_search}
        anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:'440px'}}
        />
      < RaisedButton label="Szukaj" labelColor="#757370" backgroundColor="#d6df23" style={styles.button_search} />
        <FontIcon className="material-icons"  color={red500}>{recentsIcon}</FontIcon>
    </Paper>

  </div>
);

export default Search;