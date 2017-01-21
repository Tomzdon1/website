import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Search from './Search';
import DisplayOffers from './DisplayOffers';
import NewOffers from './NewOffers';
import Footer from './Footer';

const styles = {
  image_background:{
    background: '#f5f3f0',
  },
};
const Image_kosikowski = () => (
  
  <Card style={styles.image_background}>
    <img src="top.jpg" />
    <Search />
    <DisplayOffers/>
    <NewOffers/>
    <Footer />
  </Card>
);
export default Image_kosikowski;