import { useCommentStore } from '@/store/commentStore'
import { useState } from 'react'

export default function Comment({ imageId, index, currentComment }: { imageId: string; index: number; currentComment?: string }) {
  const addComment = useCommentStore((state) => state.addComment)
  const [comment, setComment] = useState<string>('')

  const onEnterComment = () => {
    addComment(imageId, comment, index)
  }

  return (
    <div className="flex gap-3 justify-start items-center">
      <div className="badge badge-accent badge-outline">{index + 1}</div>
      {currentComment && <div>{currentComment}</div>}
      {!currentComment && (
        <>
          <input onChange={(e) => setComment(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button onClick={onEnterComment} className="btn btn-secondary">
            Add comment
          </button>
        </>
      )}
    </div>
  )
}
