import React from 'react';

import MapView from 'esri/views/MapView';
import Basemap from 'esri/Basemap';
import TileLayer from 'esri/layers/TileLayer';
import Map from 'esri/Map';

export interface Props {
}

export interface State {
}

class MapComponent extends React.Component<Props, State> {

    private refMapView: any; // React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.refMapView = React.createRef();
    }

    componentDidMount() {
        const mapView = new MapView({
            container: this.refMapView.current,
            scale: 5000000,
            map: new Map({
                basemap: new Basemap({
                    baseLayers: [
                        new TileLayer({
                            url: 'https://services.geodataonline.no/arcgis/rest/services/Geocache_UTM33_EUREF89/GeocacheGraatone/MapServer'
                        })
                    ]
                })
            })
        });
        mapView.when((view: MapView) => {
            console.log('view::: ', view);
            mapView.focus();
        });
    }

    render() {
        console.log('RENDER');
        return (
            <div ref={this.refMapView} className="esriMap">
            </div>
        );
    }
}

export default MapComponent;

