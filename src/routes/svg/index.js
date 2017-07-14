import Preview from './preview';
import style from './style';

export default function SVG({width, height, wallHeight, frameWidth}) {
  return(
    <div>
      <div class={style.svgContainer}>
        <Preview width={width} height={height} wallHeight={wallHeight} frameWidth={frameWidth} />
      </div>
    </div>
  )
}
