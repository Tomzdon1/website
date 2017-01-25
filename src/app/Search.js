import React ,{Component} from 'react';
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
import FilterBox from './FilterBox';
const recentsIcon = <img src='images/mape.png' />;
import FlatButton from 'material-ui/FlatButton';

const styles = {
  container: {
    position:'relative',
    width: '940px',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    border: 'solid 1px rgb(117, 117, 117)',
    padding: '20px 10px',
    backgroundColor: 'rgb(117, 115, 112)',
    color: 'white',
    paddingBottom: 40,
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
  },
  filtr_label:{
    color: '#d6df23',
  
  },
  filtr_button:{
    position:'absolute',
    textAlign:'right',
    float:'right',
    bottom:0,
    right:20,
  },
  filterBox:{
    marginTop: 20,
    height: 20,
  }

};



export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
   this.state={
     name:[],
      isToggleOn: false
   }
  }
  onClick(){
     this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  componentDidMount(){
    fetch('http://localhost:4000/api/city')
     .then((response) => response.json())
      .then((responseJson) => {
        for(var i =0; i<responseJson.length;i++){
          var cityArray = this.state.name.slice();
          cityArray.push(responseJson[i].name);
          this.setState({name:cityArray});
        }
      })
      .catch((error) => {
        console.error(error);
      });

}
   render() {
    return (
  <div>
    <Paper style={styles.container} zDepth={0}>
      <SelectOne style={styles.select_one} />
      <SelectTwo />
      <AutoComplete style={styles.text_possition}
        hintText="Miejscowość"
        dataSource={this.state.name}
        underlineShow={false}
        textFieldStyle= {styles.text_in_area}
        menuStyle={styles.input_search}
        anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:'440px'}}
        />
      < RaisedButton label="Szukaj" labelColor="#757370" backgroundColor="#d6df23" style={styles.button_search} />
        <FontIcon className="material-icons"  color={red500}>{recentsIcon}</FontIcon>
       <FlatButton hoverColor="none" rippleColor = "none" label="Filtry" labelStyle={styles.filtr_label} style={styles.filtr_button} primary={true} onTouchTap={this.onClick} />
          { this.state.isToggleOn ? <FilterBox style={styles.filterBox}/> : null }
    </Paper>

  </div>
   );
  }
}