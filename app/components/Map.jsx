'use strict';

const React = require('react');
const LeafletMap = require('react-leaflet').Map;
const MarkerCluster = require('./MarkerCluster');
const TileLayer = require('react-leaflet').TileLayer;

class Map extends React.Component {
  render() {
    return (
      <LeafletMap center={this.props.center} zoom={this.props.zoom} >
        <TileLayer
          attribution={this.props.attribution}
          minZoom={this.props.minZoom}
          maxZoom={this.props.maxZoom}
          url={this.props.url}
        />
        <MarkerCluster
          focusMarker={this.props.focusMarker}
          markers={this.props.markers}
          newMarkerData={this.props.newMarkerData}
          updateMarkers={this.props.updateMarkers}
        />
      </LeafletMap>
    );
  }
}

Map.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
  minZoom: React.PropTypes.number,
  maxZoom: React.PropTypes.number,
  url: React.PropTypes.string,
  attribution: React.PropTypes.string,
  markers: React.PropTypes.object,
  newMarkerData: React.PropTypes.array,
  focusMarker: React.PropTypes.object
};

Map.defaultProps = {
  center: [0, 0],
  zoom: 3,
  minZoom: 3,
  maxZoom: 16,
  url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};

module.exports = Map;
