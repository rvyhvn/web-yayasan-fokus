import React from 'react'
import { BasePropertyProps } from 'adminjs'

const UploadImage = (props: BasePropertyProps) => {
  const { onChange, property, record } = props

  const handleUpload = async (event: any) => {
    const file = event.target.files[0]
  }

  return (
    <div>
      <input />
    </div>
  )
}

export default UploadImage
