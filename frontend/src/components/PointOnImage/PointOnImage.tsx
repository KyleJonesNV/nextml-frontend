const pointRadius = 12

export function PointOnImage({ index, point, imageWidth, imageHeight }: { index: number, point: Point; imageWidth: number; imageHeight: number }) {
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