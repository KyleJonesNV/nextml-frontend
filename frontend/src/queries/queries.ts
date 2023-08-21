export const getAllImages = (url: string) => {
  return fetch(url).then((res) => res.json())
}

export const getImage = (url: string) => {
  return fetch(url, {
    headers: {
      'Content-Type': 'image/jpeg'
    }
  })
    .then((res) => res.blob())
    .then((blob) => {
      return URL.createObjectURL(blob)
    })
}
