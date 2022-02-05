import React from 'react'
import { getDownloadURL, getStorage, ref } from "firebase/storage"

export const getImage = (imageLocation) => {
  const storage = getStorage()
  const imageReference = ref(storage, imageLocation) // useing GS storage URI
  const url = getDownloadURL(imageReference)
  return url
}