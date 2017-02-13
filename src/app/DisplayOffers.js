import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    office_box: {
        display: 'inline-block',
        height: 'auto',
        width: 220,
        margin: '20px 10px 0',
        textAlign: 'left',
    },
    office_title_h2: {
        color: '#757370',
        fontSize: 21,
        fontWeight: 'normal',
        display: 'block',
        margin: '9px 15px 15px'
    },
    office_title_small: {
        color: '#757370',
        fontSize: 13,
        fontWeight: 'normal',
        width: '100%',
        display: 'block',
        marginBottom: 2,
        minHeight: 15,
    },
    paper_back: {
        height: 'auto',
        width: '100%',
        marginTop: 20,
        textAlign: 'centre',
        display: 'inline-block',
        backgroundColor: 'none',
        paddingBottom: '5px'
        
    },
    paper_with_box: {
        height: 'auto',
        maxwidth: '1000px',
        marginTop: 20,
        textAlign: 'centre',
        display: 'inline-block',
        backgroundColor: 'none',
    },
    h2: {
        textAlign: 'left',
        color: '#757370',
        fontFamily: 'segoe ui',
        fontSize: '16px',
        margin: '10px 0 0',
        paddingBottom: '2px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
};

const DisplayOffers = () => (
    <Paper style={styles.paper_back} zDepth={0} >
    <div >
    <Paper style={styles.paper_with_box} zDepth={0} >
    <h2 style={styles.h2}>Przeglądaj oferty biura</h2>
        <a href=""><Paper style={styles.office_box} zDepth={1}>
            <img src="namyslow.jpg" />
            <h2 style={styles.office_title_h2}><small style={styles.office_title_small}>Oferty biura</small>Namysłów</h2>
        </Paper></a>
        <a href=""><Paper style={styles.office_box} zDepth={1}>
            <img src="sycow.jpg" />
            <h2 style={styles.office_title_h2}><small style={styles.office_title_small}>Oferty biura</small>Syców</h2>
        </Paper></a>
        <a href=""><Paper style={styles.office_box} zDepth={1}>
            <img src="olesnica.jpg" />
            <h2 style={styles.office_title_h2}><small style={styles.office_title_small}>Oferty biura</small>Oleśnica</h2>
        </Paper></a>
        <a href=""><Paper style={styles.office_box} zDepth={1}>
            <img src="wszystkie_oferty.jpg" />
            <h2 style={styles.office_title_h2}><small style={styles.office_title_small}><br></br></small>Wszystkie oferty</h2>
        </Paper></a>
    </Paper>
    </div>
    
    </Paper>
);

export default DisplayOffers;