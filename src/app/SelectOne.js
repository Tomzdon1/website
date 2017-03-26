import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
        background: '#fff',
    },
    color_line:{
      color:'green'
    },
    label_style:{
      paddingRight: 0,
      textAlign:'center',
      float:'left',
      marginLeft:25
    },


}
export default class SelectOne extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 1,
      name:""
    };
  }

componentDidMount(){
  
    fetch('http://localhost:4000/api/genres')
     .then((response) => response.json())
      .then((responseJson) => {

         this.setState({name: responseJson[0].name}) 
         console.log(this.state.name)
      })
      .catch((error) => {
        console.error(error);
      });

}
    
  handleChange(event, index, value){
      this.setState({value});
  }  

  render() {
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
          <MenuItem value={1} primaryText="Sprzedaż"/>
          <MenuItem value={2} primaryText={this.state.name} />
        </SelectField>
        
      </div>
    );
  }
}