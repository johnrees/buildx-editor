import style from './style';

import S from '../../lib/s';

export default function Preview({width, height, wallHeight, frameWidth}) {
  const {viewBox,firstPath} = S({width, height, wallHeight, frameWidth})
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} class={style.svg}>
      <g fill="yellow"><path d={firstPath(0)}></path></g>
      <g fill="green"><path d={firstPath(1)}></path></g>
      <g fill="pink"><path d={firstPath(2)}></path></g>
      <g fill="blue"><path d={firstPath(3)}></path></g>
      <g fill="orange"><path d={firstPath(4)}></path></g>
    </svg>
  )
}
