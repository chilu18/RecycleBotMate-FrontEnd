import React, { Component } from "react";
import 'bulma/css/bulma.css'
import { Link, withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, InfoWindow, mapTypeId, Marker } from 'google-maps-react';
import "./home.css";
import mobilegen from './mobilegen.jpg';
import devicegen from './devicegen.png';
import Draggable, { DraggableCore } from 'react-draggable'
import {
  ResponsiveEmbed,
  ControlLabel,
  Button,
  ModalDialog,
  Modal,
} from 'react-bootstrap';
import Data from './data';



const mapStyles = {
  bottom: "2.5rem",
  right: "2.5rem"
};
class DraggableModalDialog extends React.Component {
  render() {
    return <Draggable handle=".modal-header,.modal-footer"><ModalDialog {...this.props} /></Draggable>
  }
}

export class App extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <section className="section has-background-light" >
        
      <div>
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{
            lat: -32.060611,
            lng: 115.742392}}> 
            
            <Marker
            onClick={this.onMarkerClick}
            name={'Sensor M2M5418'}
            //label={"Sensor M2M5418"}
            position={{lat: -32.060611, lng: 115.742392}}

          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Sensor M2M7729'}
            //label={"Sensor M2M5418"}
            position={{lat: -31.999508, lng: 116.005569}}

          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Sensor M2M7729'}
            //label={"Sensor M2M5418"}
            position={{lat: -31.998781, lng: 116.005987}}

          />
          
          <Modal
            fade={false}
            backdrop={true}
            keyboard={false}
            show={this.state.showingInfoWindow}
            onHide={this.onClose}
            dialogAs={DraggableModalDialog}
          >
            <Modal.Header>
               <Modal.Title>RecycleMate Bot: Freemantle AU</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className = "coloumns">
                <div className = "box">
                  <Data></Data>
                </div>
              </div>

              <div className = "columns">
              <div className = "column">
              <div class="box">
               Bottle Type : Plastic Bottle
              <br></br>
               Brand:   Cool Ridge
              <br></br>
              </div>
              </div>
              </div>
              <div className = "columns">
              <p></p>
              <div className ="column">  
              <div class="box">
                Mobile Generated Photo<i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              <br></br>
              <img src={mobilegen} alt="Logo" />
              
              <br></br>
              </div>
          
              <div className ="column">  
              <div class="box">
                Device Generated Photo<i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              <br></br>
              <img src={devicegen} alt="Logo" />
              <br></br>
              </div>

            
             </div>
              </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.onClose}>
                Close
        </Button>
            </Modal.Footer>
          </Modal>
        </Map>
      </div>
      <div>
        
        </div>
        <div className="hero-body">
    
        </div>
    </section>

    );
  }
}


export default (
  GoogleApiWrapper({
    apiKey: "AIzaSyC8VKK6ocDqNKY8GtE5Tx9EjilAOE4wrjs"
  })(App)
);
