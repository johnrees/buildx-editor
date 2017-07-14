import 'aframe';
import 'aframe-orbit-controls-component-2';
import 'aframe-extrude-svg-component';

import {Entity, Scene} from 'aframe-react';
import {h, Component} from 'preact';
import linkState from 'linkstate';
import style from './style';

export default class Home extends Component {

  state = {
    length: 10,
    height: 1.5,
    path: 'M0.14,4.62l0,-2.83l2.24,-1.72l2.24,1.72l0,2.83z',
    target: '#target'
  }

  render(props,{length, height, path, target}) {
    return (
      <div class={style.home}>
        <Scene stats>
          <Entity position={{x: 0, y: 0, z: -10}}>
            <Entity id="target" position={{x: 0, y: 2, z: -10}} />

            <Entity geometry={{primitive: 'box', depth: 0.25, width: 4.4, height: 4}} material={{color: '#D8B107'}} position={{x: 0, y: 2, z: 4}} />
            <Entity geometry={{primitive: 'box', depth: 0.25, width: 4.4, height: 4}} material={{color: '#D8B107'}} position={{x: 0, y: 2, z: 2}} />
            <Entity geometry={{primitive: 'box', depth: 0.25, width: 4.4, height: 4}} material={{color: '#D8B107'}} position={{x: 0, y: 2, z: 0}} />
            <Entity geometry={{primitive: 'box', depth: 0.25, width: 4.4, height: 4}} material={{color: '#D8B107'}} position={{x: 0, y: 2, z: -2}} />
            <Entity geometry={{primitive: 'box', depth: 0.25, width: 4.4, height: 4}} material={{color: '#D8B107'}} position={{x: 0, y: 2, z: -4}} />

            <Entity geometry={{primitive: 'box', height: 0.1, width: 4, depth: length}} material={{color: '#D8B107'}} position={{x: 0, y: 0.05, z: 0}} />

            <Entity geometry={{primitive: 'box', depth: length, width: 0.1, height: 0.1}} material={{color: '#B4B2B5'}} position={{x: -2, y: 0.05, z: 0}} />
            <Entity geometry={{primitive: 'box', depth: length, width: 0.1, height: 0.1}} material={{color: '#B4B2B5'}} position={{x: 2, y: 0.05, z: 0}} />

            <Entity geometry={{primitive: 'plane', width: 20, height: 20}} material={{color: '#7BC8A4', side: 'double'}} position={{x: 0, y: -0.01, z: 0}} rotation={{x: -90, y: 0, z: 0}} />
          </Entity>

          <Entity id="camera"
            camera={{fov: 75, zoom: 1}}
            position={{x: 0, y: 2, z: 5}}
            orbit-controls={{
              autoRotate: false,
              target,
              enableDamping: true,
              dampingFactor: 0.125,
              rotateSpeed:0.1,
              minDistance:3,
              maxDistance:100,
              maxPolarAngle: Math.PI/2
            }} />

        </Scene>

        <div id="controls" class={style.controls}>
          <input type="range" min={1} max={20} step={1} value={length} onInput={linkState(this, 'length')} />
          <input type="range" min={1} max={10} step={0.1} value={height} onInput={linkState(this, 'height')} />
          <textarea value={path} onInput={linkState(this, 'path')} />
        </div>

      </div>
    );
  }
}

// <Entity geometry={{primitive: 'sphere', radius: 1.25}} material={{color: '#EF2D5E'}} position={{x: 0, y: 1.25, z: -1}} />
// <Entity geometry={{primitive: 'cylinder', height}} material={{color: '#FFC65D'}} position={{x: 1, y: 0.75, z: 1}} />


// <Entity id="house"
//   extrude-svg={{path, amount: height}}
//   position={{x: 0, y: 5, z: -10}}
//   rotation={{x: 0, y: -39, z: 180}}
//   material="color:yellow" />