import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
const styles = {
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width:940,
    high:'auto',
    margin: '20px 10px 0',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
    
  },
  textList:{
    textAlign: 'left',
  },
  paper_back:{
    height: 500,
    width: '100%',
    textAlign: 'centre',
    display: 'inline-block',
    background: '#f5f3f0',
  },
  paper_with_box: {
    height: 360,
    width: '1000px',
    marginTop: 20,
    textAlign: 'centre',
    display: 'inline-block',
    background: '#f5f3f0',
  },
  h2:{
    textAlign:'left',
    color: '#757370',
    fontFamily: 'segoe ui',
    fontSize: '16px',
    margin: '10px 0 0',
    paddingBottom: '2px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};

const tilesData = [
  {
    img: 'images/zdjecie_1.jpg',
    title: '100 000 zł',
    subtitle:'12m2, Namysłów',
    author: 'Namysłów',
  },
  {
    img: 'images/zdjecie_2.jpg',
    title: '360 000 zł',
    subtitle:'50m2, Syców',
    author: 'Syców',
  },
  {
    img: 'images/zdjecie_3.jpg',
    title: '260 000 zł',
    subtitle:'140m2, Oleśnica',
    author: 'Oleśnica',
  },
  {
    img: 'images/zdjecie_4.jpg',
    title: '230 000 zł',
    subtitle:'70m2, Oleśnica',
    author: 'Oleśnica',
  },
  {
    img: 'images/zdjecie_5.jpg',
    title: '90 000 zł',
    subtitle:'90m2, Namysłów',
    author: 'Namysłów',
  },
  {
    img: 'images/zdjecie_6.jpg',
    title: '150 000',
    subtitle:'43m2, Syców',
    author: 'Syców',
  },
 
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const NewOffers = () => (
<Paper style={styles.paper_back} zDepth={0} >
<Paper style={styles.paper_with_box} zDepth={0} >
  <h2 style={styles.h2}>Najnowsze oferty</h2>
  <div style={styles.root}>
    <GridList style={styles.gridList} cols= {3}  cellHeight={180} >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={tile.subtitle}
          actionIcon={<IconButton ><StarBorder className="new_offers_icon"  color="white" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          style={styles.textList}
        >
          <a href="#" title={tile.title}><img src={tile.img} /></a>
        </GridTile>
      ))}
    </GridList>
  </div>
  </Paper>
  </Paper>
);

export default NewOffers;