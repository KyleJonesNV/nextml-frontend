import { getAllImages, getImage } from '@/queries/queries'
import useSWR from 'swr'

const url = 'http://localhost:8000/images/'

export function useImages() {
  const { data, error, isLoading } = useSWR(url, getAllImages)

  return { data, error, isLoading }
}

export function useImage(file_stem: string) {
  const { data, error, isLoading } = useSWR(url + file_stem, getImage)

  return { data, error, isLoading }
}
