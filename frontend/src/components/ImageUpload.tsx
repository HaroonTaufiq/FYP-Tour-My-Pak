import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Image() {
  const [file, setFile] = useState()
  const [image, setImage] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/image').then((resp) => resp.json()).then((result) => {
      console.log(result);
      setImage(result);
    })
  }, [])

  async function uploadImage() {
    console.log(file)
    const formData = new FormData();
    formData.append('user_file', file);
    console.log(formData)
    fetch('http://localhost:4000/image-upload', {
      method: 'POST',
      body: formData,
    }).then((resp) => resp.json()).then((result) => {
      console.log('Image uploaded successfullaa:');
    })


  }
  return (
    <div className='styling'>
      upload an image
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
      <button className='border' onClick={() => uploadImage()}>Upload</button>

      {image.map((image) => (
        <img key={image._id} src={`http://localhost:4000/uploads/${image.image}`} alt={image.imageUrl} width={100} height={100} />

      ))}
    </div>
  )
}
