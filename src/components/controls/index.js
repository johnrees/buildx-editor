import style from './style';

export default function Controls({width, height, length, up}) {
  const floorArea = width*length;

  const update = key => e => up(e, key, parseInt)

  return(
    <div id="controls" class={style.controls}>
      <ul>
        <li>
          <label>Width <input type="range" min={300} max={700} step={1} value={width} onInput={update('width')} /></label>
          <input type="number" value={width} onInput={update('width')} />
        </li>
        <li>
          <label>Height <input type="range" min={440} max={750} step={1} value={height} onInput={update('height')} /></label>
          <input type="number" value={height} onInput={update('height')} />
        </li>
        <li>
          <label>Length <input type="range" min={800} max={1500} step={1} value={length} onInput={update('length')} /></label>
          <input type="number" value={length} onInput={update('length')} />m
        </li>
      </ul>

      Floor Area: {floorArea}m²
    </div>
  )
}
