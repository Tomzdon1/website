import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

/**
 * `SelectField` can also be nullable. In this case, just specify a `MenuItem`
 * with no text and with a `null` value. For instance, for a boolean:
 */

const styles ={
    select_possition:{
        float:'left',
    },
    select_width:{
        width:128,
        marginLeft: 2, 
        background: '#fff',
    },
    list_element:{
      backgroundColor:'rgb(0,0,0)'
    },
    menuItemStyle:{
      style: {
        backgroundColor:'black'
      } 
    },
    label_style:{
      paddingRight: 0,
      textAlign:'center',
      float:'left',
      marginLeft:25
    },

    
} 
const styled={
  
     color:'rgb(45,0,0)'
}
export default class SelectTwo extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 1,
    };
  }



  handleChange(event, index, value){
      this.setState({value});
  }  
  render(){
    const styls={
     backgroundColor:'#fff',
     fontSize: '20px'
    };
 {
    return (
      <div style={styles.select_possition}>
        <SelectField
          style={styles.select_width}
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          underlineShow={false}
          labelStyle={styles.label_style}
        >
          <MenuItem  value={1} primaryText="Domy" />
          <MenuItem  value={2} primaryText="Mieszkania" />
        </SelectField>
      </div>
    );
 }
  }
}