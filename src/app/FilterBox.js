import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';

const styles ={
    select_possition:{
        float:'left',
        marginTop: 20,
        height: 20,
        marginTop:12,
        marginBottom:40
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
        marginLeft:75,
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
      searchText: '',
      dataSource:['50','100','150','200','250','300']
    };
  }

  handleChange(event, index, value){
      this.setState({value});
  } ;
   handleUpdateInput(searchText){
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest(){
    this.setState({
      searchText: '',
    });
  };
  render() {
    return (
      <div style={styles.select_possition}>
      <div style={styles.boxPowierzchnia}>
      <h4 style={styles.FilterBox_h4}> Cena </h4>
        <AutoComplete style={styles.text_possition}
          hintText="Od"
          dataSource={this.state.dataSource}
          underlineShow={false}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        <AutoComplete style={styles.text_possition}
          hintText="Do"
          dataSource={this.state.dataSource}
          underlineShow={false}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
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
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        <AutoComplete style={styles.text_possition}
          hintText="Do"
          dataSource={this.state.dataSource}
          underlineShow={false}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
          textFieldStyle= {styles.text_in_area}
          menuStyle={styles.input_search}
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left',width:100}}
        />
        </div>
      </div>
    );
  }
}