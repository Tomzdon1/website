import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles ={
    select_possition:{
        float:'left',
        marginLeft:'25px',
        marginTop: 20,
        height: 20,
        marginTop:12,
        marginBottom:12
    },
    select_width:{
        width:128,
        background: '#fff',
    },
    filterBox_label:{
      lineHeight: '42px',
    },
    filterBox_icon:{
        top:7
    },
    boxCena:{
        marginLeft:70,
        display:"inline-block"
    },
       boxPowierzchnia:{
        display:"inline-block"
    },
    FilterBox_h4:{
        margin:0,
        textAlign:'left',
        marginBottom:5,
    }
 
}

export default class FilterBox extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
     this.state = {
      value: 1,
      name:""
    };
  }

  handleChange(event, index, value){
      this.setState({value});
  }  
  render() {
    return (
      <div style={styles.select_possition}>
      <div style={styles.boxPowierzchnia}>
      <h4 style={styles.FilterBox_h4}> Cena </h4>
        <SelectField
          className="filterBox_select"
          style={styles.select_width}
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          underlineShow={false}
          labelStyle={styles.filterBox_label}
          iconStyle={styles.filterBox_icon}
        >
          <MenuItem value={1} primaryText="Sprzedaż"/>
        </SelectField>
        <SelectField
        className="filterBox_select"
          style={styles.select_width}
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          underlineShow={false}
          labelStyle={styles.filterBox_label}
           iconStyle={styles.filterBox_icon}
        >
          <MenuItem value={1} primaryText="Sprzedaż"/>
        </SelectField>
        </div>
        <div style={styles.boxCena}>
        <h4 style={styles.FilterBox_h4}> Powierzchnia </h4>
        <SelectField
           className="filterBox_select"
          style={styles.select_width}
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          underlineShow={false}
          labelStyle={styles.filterBox_label}
           iconStyle={styles.filterBox_icon}
        >
          <MenuItem value={1} primaryText="Sprzedaż"/>
        </SelectField>
        <SelectField
        className="filterBox_select"
          style={styles.select_width}
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          underlineShow={false}
          labelStyle={styles.filterBox_label}
           iconStyle={styles.filterBox_icon}
        >
          <MenuItem value={1} primaryText="Sprzedaż"/>
        </SelectField>
        </div>
      </div>
    );
  }
}