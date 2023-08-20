import { useCommentStore } from '@/store/commentStore'
import { useCallback, useEffect, useState } from 'react'

const pointRadius = 12
const drawableId = 'drawableArea'

function PointOnImage({ index, point, imageWidth, imageHeight }: { index: number, point: Point; imageWidth: number; imageHeight: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: pointRadius * 2,
        height: pointRadius * 2,
        backgroundColor: 'rgba(207, 73, 45,.7)',
        borderRadius: '50%',
        left: `${point.x * imageWidth - pointRadius}px`,
        top: `${point.y * imageHeight - pointRadius}px`
      }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{index + 1}</div>
    </div>
  )
}

export default function ImageRenderer({ imageId, image, width, height }: { imageId: string; image: string; width: number; height: number }) {
  const addPoint = useCommentStore((state) => state.addPoint)
  const commentPoints = useCommentStore((state) => state.pointComments)[imageId]

  const mouseClick = useCallback(
    (event: any) => {
      if (event.target?.offsetParent?.id !== drawableId) return

      const xPositionOnImage = event.clientX - event.target.offsetParent.offsetLeft
      const xRelativePosition = xPositionOnImage / event.target.offsetParent.clientWidth

      const yPositionOnImage = event.clientY - event.target.offsetParent.offsetTop
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
      <img src={image} alt="" />
      {commentPoints && commentPoints.map((commentPoint, i) => <PointOnImage key={i} index={i} point={commentPoint.point} imageWidth={width} imageHeight={height} />)}
    </div>
  )
}
