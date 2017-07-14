import Preview from './preview';
import style from './style';

export default function SVG({width, height, wallHeight, frameWidth, up}) {
  return(
    <div>
      <div class={style.svgContainer}>
        <Preview width={width} height={height} wallHeight={wallHeight} frameWidth={frameWidth} />
      </div>
      <ul>
        <li>
          <label>Width <input type="range" min={300} max={700} step={1} value={width} onInput={(e)=> up(e, 'width')} /></label>
          <input type="number" value={width} onInput={(e)=> up(e, 'width')} />m
        </li>
        <li>
          <label>Height <input type="range" min={440} max={750} step={1} value={height} onInput={(e)=> up(e, 'height')} /></label>
          <input type="number" value={height} onInput={(e)=> up(e, 'height')} />m
        </li>
      </ul>
    </div>
  )
}
