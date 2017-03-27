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
import {red500, yellow500, blue500, grey500} from 'material-ui/styles/colors';
import FilterBox from './FilterBox';
import GoogleMap from './Map';
const recentsIcon = <img src='images/map.png' />;
import FlatButton from 'material-ui/FlatButton';
import superagent from 'superagent';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

const styles = {
  container: {
    position:'relative',
    minWidth: '940px',
    maxWidth: '600px',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    border: 'solid 1px rgb(117, 117, 117)',
    padding: 20,
    backgroundColor: 'rgb(117, 115, 112)',
    color: 'white',
  },
  input_search: {
    width:440
  },
  search: {
    border: 'solid 1px',
  },
  button_search_label:{
    lineHeight:'51px'
  },
  button_search: {
    height: 48,
    float:'left',
    width:110,
    lineHeight:51
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
    float:'right',
    position:'absolute',
    right:95,
    top:63
  },
  filterBox:{
    marginTop: 20,
    height: 20,
  }

};
const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);



export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
    this.onClickMap = this.onClickMap.bind(this);
   this.state={
     name:[],
     geo:[],
      isToggleOn: false,
      isToggleMapOn: false
   }
  }
  onClick(){
     this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
   onClickMap(){
     this.setState(prevState => ({
      isToggleMapOn: !prevState.isToggleMapOn
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
      const url ='http://localhost:4000/api/city';
      superagent
      .get(url)
      .query(null)
      .set('Accept','text/json')
      .end((error,response)=>{
      
        const venues = response.body[0].venues
        console.log(JSON.stringify(venues))
        this.setState({
          geo : venues
        })
       
      })

}
   render() {
     const location = {
       lat:51.0759200,
       lng:17.7228400,
     }
     const markers = [
       {
         location: {
            lat:51.0759200,
            lng:17.7228400,
         }
       }
     ]
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
      < RaisedButton label="Szukaj" labelColor="#757370" backgroundColor="#d6df23" style={styles.button_search} labelStyle={styles.button_search_label} />
       <IconButton  onTouchTap={this.onClickMap} style ={{height:'auto', padding:0 , width:30}}iconStyle={{width:50, height:'auto', color:'rgb(214, 223, 35)'}} ><Map  /></IconButton>
       <FlatButton hoverColor="none" rippleColor = "none" label="Filtry" labelStyle={styles.filtr_label} style={styles.filtr_button} onTouchTap={this.onClick} />
          { this.state.isToggleOn ? <FilterBox style={styles.filterBox}/> : null }
          { this.state.isToggleMapOn ?   <GoogleMap center = {location} markers = {markers}/> : null }
          
    </Paper>

  </div>
   );
  }
}