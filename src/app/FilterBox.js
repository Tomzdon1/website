import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';

const styles ={
    select_possition:{
        float:'left',
        marginLeft:'25px',
        marginTop: 20,
        height: 20,
        marginTop:12,
        marginBottom:50
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
    input_search: {
      width:100,
      overflowX: 'hidden'
    },
    FilterBox_h4:{
        margin:0,
        textAlign:'left',
        marginBottom:5,
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        fontFamily: 'inherit',
        fontSize: 15
    },
    text_possition: {
      marginLeft: 25,
      marginRight: 5,
      width: 100,
      height:35,
      backgroundColor: 'white',
      float:'left'
    },
    text_in_area: {
      paddingLeft:10,
      color: 'black', 
      fontSize: '15px',
      width:100,
      height:'auto',
      lineHeight:'10px'
    },
    AutoCompletee:{
      height:35,
    }
 
}

export default class FilterBox extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
     this.state = {
      value: 1,
      name:"",
      dataSource:['50','100','150','200','250','300']
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
        <AutoComplete style={styles.text_possition}
          hintText="Od"
          dataSource={this.state.dataSource}
          underlineShow={false}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        <AutoComplete style={styles.text_possition}
          hintText="Do"
          dataSource={this.state.dataSource}
          underlineShow={false}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        </div>
        <div style={styles.boxCena}>
        <h4 style={styles.FilterBox_h4}> Powierzchnia </h4>
        <AutoComplete style={styles.text_possition}
          hintText="Od"
          dataSource={this.state.dataSource}
          underlineShow={false}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        <AutoComplete style={styles.text_possition}
          hintText="Do"
          dataSource={this.state.dataSource}
          underlineShow={false}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        </div>
      </div>
    );
  }
}