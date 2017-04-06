import React,{Component} from 'react'
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'

class Map extends Component {
    render(){
        const mapContainer = <div style={{height:'50%', width:'100%', marginTop:'25px'}}></div>
        const markers = this.props.markers.map((location, i ) =>{
            const marker = {
                position: {
                    lat: parseFloat(location.lat),
                    lng: parseFloat(location.lng),
                }
            }
            return <Marker key = {i} {...marker} />
        })
        return(
            <GoogleMapLoader
            containerElement = {mapContainer}
            googleMapElement = {
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={this.props.center}
                    options={{streetViewControl: false, mapTypeControl:false}}>
                    {markers}
                </GoogleMap>
                }/>
            )
     }
}

export default Map