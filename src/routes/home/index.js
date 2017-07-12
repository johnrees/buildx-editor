import 'aframe';
import 'aframe-orbit-controls-component-2';
import {Entity, Scene} from 'aframe-react';
import {h, Component} from 'preact';

export default class Home extends Component {
  render() {
    return (
      <Scene stats>
        <Entity
          id="camera"
          camera={{fov: 70, zoom: 1}}
          position={{x: 0, y: 2, z: 5}}
          orbit-controls={{
            autoRotate: false,
            target: '#target',
            enableDamping: true,
            dampingFactor: 0.125,
            rotateSpeed:0.25,
            minDistance:3,
            maxDistance:100
          }}
        />
        <Entity id="target">
          <Entity geometry={{primitive: 'box'}} material={{color: '#4CC3D9'}} position={{x: -1, y: 0.5, z: 1}} />
          <Entity geometry={{primitive: 'sphere', radius: 1.25}} material={{color: '#EF2D5E'}} position={{x: 0, y: 1.25, z: -1}} />
          <Entity geometry={{primitive: 'cylinder', height: 1.5}} material={{color: '#FFC65D'}} position={{x: 1, y: 0.75, z: 1}} />
          <Entity geometry={{primitive: 'plane', width: 4, height: 4}} material={{color: '#7BC8A4'}} position={{x: 0, y: 0, z: 0}} rotation={{x: -90, y: 0, z: 0}} />
        </Entity>
      </Scene>
    );
  }
}
