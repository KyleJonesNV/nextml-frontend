import { create } from 'zustand'

interface CommentStore {
  pointComments: { [key: string]: { point: Point; comment?: string }[] }
  addPoint: (point: Point, imageId: string) => void
  addComment: (imageId: string, comment: string, index: number) => void
}

export const useCommentStore = create<CommentStore>((set) => ({
  pointComments: {},
  addPoint: (point: Point, imageId: string) =>
    set((state) => {
      const newPoints = [...(state.pointComments[imageId] ?? []), {point}]

      return {
        pointComments: { ...state.pointComments, [imageId]: newPoints }
      }
    }),
  addComment: (imageId: string, comment: string, index: number) =>
    set((state) => {
      const pointComment = state.pointComments[imageId]?.[index]
      pointComment.comment = comment

      return {
        pointComments: { ...state.pointComments }
      }
    }),
}))
