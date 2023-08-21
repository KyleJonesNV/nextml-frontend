import { useCommentStore } from '@/store/commentStore'
import { useCallback, useEffect } from 'react'
import { PointOnImage } from '../PointOnImage/PointOnImage';
import Image from 'next/image'
const drawableId = 'drawableArea'

export default function ImageRenderer({ imageId, image, width, height }: { imageId: string; image: string; width: number; height: number }) {
  const addPoint = useCommentStore((state) => state.addPoint)
  const commentPoints = useCommentStore((state) => state.pointComments)[imageId]

  const mouseClick = useCallback(
    (event: any) => {
      if (event.target?.offsetParent?.id !== drawableId) return

      console.log(event)

      const xPositionOnImage = event.layerX
      const xRelativePosition = xPositionOnImage / event.target.offsetParent.clientWidth

      const yPositionOnImage = event.layerY
      const yRelativePosition = yPositionOnImage / event.target.offsetParent.clientHeight

      const p: Point = {
        x: xRelativePosition,
        y: yRelativePosition
      }

      addPoint(p, imageId)
    },
    [addPoint, imageId]
  )

  useEffect(() => {
    window.addEventListener('click', mouseClick)
    return () => {
      window.removeEventListener('click', mouseClick)
    }
  }, [mouseClick])

  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }} id={drawableId}>
      <Image src={image} alt="" width={width} height={height} />
      {commentPoints && commentPoints.map((commentPoint, i) => <PointOnImage key={i} index={i} point={commentPoint.point} imageWidth={width} imageHeight={height} />)}
    </div>
  )
}
