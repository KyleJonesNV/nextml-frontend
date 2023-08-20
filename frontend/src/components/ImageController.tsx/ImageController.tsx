import { useImage } from '@/hooks/hooks'
import { useState } from 'react'
import ImageRenderer from '../ImageRenderer/ImageRenderer'
import { useCommentStore } from '@/store/commentStore'
import AlertError from '../AlertError/AlertError'
import ZoomInButton from '../ZoomInButton/ZommInButton'
import ZoomOutButton from '../ZoomOutButton/ZommOutButton'
import Comment from '../Comment/Comment'

const baseWidth = 500
const aspectRatio = 1.5
const deltaZoom = 0.2
const zoomInLimit = 3
const zoomOutLimit = 0.5

export default function ImageController({ image_stem }: { image_stem: string }) {
  const { data: image, error, isLoading } = useImage(image_stem)
  const [zoomFactor, setZoomFactor] = useState<number>(1)
  const commentPoints = useCommentStore((state) => state.pointComments)[image_stem]

  const width = baseWidth * zoomFactor
  const height = width / aspectRatio

  const onZoomIn = () => {
    if (zoomFactor + deltaZoom > zoomInLimit) return
    setZoomFactor(zoomFactor + 0.2)
  }

  const onZoomOut = () => {
    if (zoomFactor - deltaZoom < zoomOutLimit) return
    setZoomFactor(zoomFactor - 0.2)
  }

  return (
    <div style={{ minWidth: `${baseWidth}px`, minHeight: `${baseWidth / aspectRatio}px`, border: '1px dashed', borderColor: 'rgba(158, 158, 158, 0.7)', padding: '40px' }}>
      {error && <AlertError message={error.message} />}
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="flex flex-row gap-5">
          {image && <ImageRenderer imageId={image_stem} image={image} width={width} height={height} />}
          <div className="flex flex-col gap-5">
            <ZoomInButton onZoomIn={onZoomIn} />
            <ZoomOutButton onZoomOut={onZoomOut} />
            <div className="w-96 flex flex-col gap-5">
              {commentPoints && commentPoints.map((commentPoint, i) => 
                <Comment key={i} imageId={image_stem} index={i} currentComment={commentPoint.comment} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
