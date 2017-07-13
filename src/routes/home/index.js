import 'aframe';
import 'aframe-orbit-controls-component-2';
import 'aframe-extrude-svg-component';

import {Entity, Scene} from 'aframe-react';
import {h, Component} from 'preact';
import linkState from 'linkstate';

export default class Home extends Component {

  state = {
    height: 1.5,
    path: 'M0.14,4.62l0,-2.83l2.24,-1.72l2.24,1.72l0,2.83z',
    target: '#house'
  }

  render(props,{height, path, target}) {
    return (
      <div>
        <Scene stats>

          <Entity id="house"
            extrude-svg={{path, amount: height}}
            position={{x: 0, y: 5, z: -10}}
            rotation={{x: 0, y: -39, z: 180}}
            material="color:yellow" />

          <Entity id="target">
            <Entity geometry={{primitive: 'box'}} material={{color: '#4CC3D9'}} position={{x: -1, y: 0.5, z: 1}} />
            <Entity geometry={{primitive: 'plane', width: 4, height: 4}} material={{color: '#7BC8A4', side: 'double'}} position={{x: 0, y: 0, z: 0}} rotation={{x: -90, y: 0, z: 0}} />
          </Entity>

          <Entity id="camera"
            camera={{fov: 75, zoom: 1}}
            position={{x: 0, y: 2, z: 5}}
            orbit-controls={{
              autoRotate: false,
              target,
              enableDamping: true,
              dampingFactor: 0.125,
              rotateSpeed:0.25,
              minDistance:3,
              maxDistance:100
            }} />
        </Scene>

        <input type="range" min={1} max={10} step={0.1} style={{right: '10px', position: 'absolute', zIndex: 100}} value={height} onInput={linkState(this, 'height')} />
        <textarea style={{right: '10px', top: '100px', position: 'absolute', zIndex: 100}} value={path} onInput={linkState(this, 'path')} />
      </div>
    );
  }
}

// <Entity geometry={{primitive: 'sphere', radius: 1.25}} material={{color: '#EF2D5E'}} position={{x: 0, y: 1.25, z: -1}} />
// <Entity geometry={{primitive: 'cylinder', height}} material={{color: '#FFC65D'}} position={{x: 1, y: 0.75, z: 1}} />