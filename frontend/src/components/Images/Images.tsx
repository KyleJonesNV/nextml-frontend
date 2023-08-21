import { useImages } from "@/hooks/hooks"
import { useState, useEffect, useCallback } from "react"
import AlertError from "../AlertError/AlertError"
import ImageController from "../ImageController.tsx/ImageController"
import Loader from "../Loader/Loader"

export default function Images() {
  const { data: images, error, isLoading } = useImages()
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  useEffect(() => {
    if (selectedImage) return
    if (!images || images.length === 0) return

    setSelectedImage(images[selectedImageIndex].file_stem)
    setSelectedImageIndex(selectedImageIndex)
  }, [selectedImage, images, selectedImageIndex])

  const onLeftClick = useCallback(() => {
    if (selectedImageIndex < 1) return
    const newIndex = selectedImageIndex - 1
    setSelectedImageIndex(newIndex)
    setSelectedImage(images[newIndex].file_stem)
  }, [images, setSelectedImage, selectedImageIndex, setSelectedImageIndex])

  const onRightClick = useCallback(() => {
    if (selectedImageIndex >= images.length - 1) return
    const newIndex = selectedImageIndex + 1
    setSelectedImageIndex(newIndex)
    setSelectedImage(images[newIndex].file_stem)
  }, [images, setSelectedImage, selectedImageIndex, setSelectedImageIndex])

  return (
    <>
      {error && <AlertError message={error.message} />}
      {isLoading && <Loader />}
      {!isLoading && !error && selectedImage !== '' && (
        <>
          <ImageController image_stem={selectedImage} />
          <div className="join mt-5">
            <button onClick={onLeftClick} className="join-item btn w-20">
              «
            </button>
            <button className="join-item btn">{`image ${selectedImageIndex + 1} of ${images.length}`}</button>
            <button onClick={onRightClick} className="join-item btn w-20">
              »
            </button>
          </div>
        </>
      )}
    </>
  )
}
