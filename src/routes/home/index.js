import 'aframe';
import 'aframe-orbit-controls-component-2';
import 'aframe-extrude-svg-component';
import '../../lib/aframe-clone-component';
import {compose} from 'ramda'

import {Entity, Scene} from 'aframe-react';
import {h, Component} from 'preact';
import linkState from 'linkstate';
import style from './style';

import S from '../../lib/s';

export default function Home({width, height, wallHeight, frameWidth, length}) {
  const {viewBox, points, bounds, close} = S({width, height, wallHeight, frameWidth})
  const b = bounds(0)
  // console.log(SVG.closedPath(firstPoints(outerCorners, innerCorners, fifthPoints)(4).map( ([x,y]) => [ (x-bounds.minX)/100, (y-bounds.minY)/100])))
  // console.log(points(0).map(([x,y]) => [(x-b.minX)/100, (y-b.minY)/100]))
  return (
    <div class={style.home}>
      <Scene stats>
        <Entity position={{x: 0, y: 0, z: -10}}>
          <Entity id="frames" position={{x: -2.4, y: 6, z: 0}} rotation={{x: 180, y: 0, z: 0}}>
            <Entity id="frame" position={{x: 0, y: 0, z: 0}}>
              <Entity extrude-svg={{
                  // path: 'M2.4133,0 2.8713,0.3539 2.75,0.5129 2.4133,0.26 0.1213,2.0060 0,1.8470z',
                  path: close(points(0).map(([x,y]) => [(x-b.minX)/100, (y-b.minY)/100])),
                  amount: 0.25
                }} position={{x: 0, y: 0, z: 0}} rotation={{x: 0, y: 0, z: 0}} material={{ color: 'yellow'}} />
              <Entity extrude-svg={{
                  // path: 'M5.263307453372858,2.18 5.263307453372858,2.73 5.063307453372858,2.73 5.063307453372858,2.28 2.75,0.512933583073788 2.8713827206724467,0.35398002028844217z',
                  path: close(points(1).map(([x,y]) => [(x-b.minX)/100, (y-b.minY)/100])),
                  amount: 0.25
                }} position={{x: 0, y: 0, z: 0}} rotation={{x: 0, y: 0, z: 0}} material={{ color: 'green'}} />
              <Entity extrude-svg={{
                  // path: 'M5.263307453372858,5.73 4.663307453372858,5.73 4.663307453372858,5.53 5.063307453372858,5.53 5.063307453372858,2.73 5.263307453372858,2.73z',
                  path: close(points(2).map(([x,y]) => [(x-b.minX)/100, (y-b.minY)/100])),
                  amount: 0.25
                }} position={{x: 0, y: 0, z: 0}} rotation={{x: 0, y: 0, z: 0}} material={{ color: 'pink'}} />
              <Entity extrude-svg={{
                  // path: 'M-0.436692546627142,5.73 -0.436692546627142,5.13 -0.236692546627142,5.13 -0.236692546627142,5.53 4.663307453372858,5.53 4.663307453372858,5.73z',
                  path: close(points(3).map(([x,y]) => [(x-b.minX)/100, (y-b.minY)/100])),
                  amount: 0.25
                }} position={{x: 0, y: 0, z: 0}} rotation={{x: 0, y: 0, z: 0}} material={{ color: 'blue'}} />
              <Entity extrude-svg={{
                  // path: 'M-0.436692546627142,2.18 0,1.8470664169262119 0.121382720672446,2.0060199797115583 -0.236692546627142,2.28 -0.236692546627142,5.13 -0.436692546627142,5.13z',
                  path: close(points(4).map(([x,y]) => [(x-b.minX)/100, (y-b.minY)/100])),
                  amount: 0.25
                }} position={{x: 0, y: 0, z: 0}} rotation={{x: 0, y: 0, z: 0}} material={{ color: 'orange'}} />
            </Entity>
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: 2}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: 1}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: 3}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: 4}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: -2}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: -1}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: -3}} />
            <Entity clone="id: #frame" position={{x: 0, y: 0, z: -4}} />
          </Entity>

          <Entity id="target" position={{x: 0, y: 2, z: -10}} />

          <Entity id="rails">
            <Entity geometry={{primitive: 'box', depth: width/100, width: 0.1, height: 0.1}} material={{color: '#CCC'}} position={{x: -2, y: 0.05, z: 0}} />
            <Entity geometry={{primitive: 'box', depth: width/100, width: 0.1, height: 0.1}} material={{color: '#CCC'}} position={{x: 2, y: 0.05, z: 0}} />
          </Entity>

          <Entity geometry={{primitive: 'box', height: 0.1, width: width/100, depth: length/100}} material={{color: '#D8B107'}} position={{x: 0, y: 0.05, z: 0}} />

          <Entity geometry={{primitive: 'plane', width: 20, height: 20}} material={{color: '#7BC8A4', side: 'double'}} position={{x: 0, y: -0.01, z: 0}} rotation={{x: -90, y: 0, z: 0}} />
        </Entity>

        <Entity id="camera"
          camera={{fov: 75, zoom: 1}}
          position={{x: 0, y: 5, z: 4}}
          orbit-controls={{
            target: '#target',
            autoRotate: false,
            enableDamping: true,
            dampingFactor: 0.125,
            rotateSpeed:0.1,
            minDistance:3,
            maxDistance:100,
            maxPolarAngle: Math.PI/2
          }} />

      </Scene>
    </div>
  );
}
