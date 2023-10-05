import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setfile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => { setfile(e.target.files[0]) }}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>
        <p className='mt-2 text-gray-600 text-xs truncate'>
          {file === '' ? "No File Selected" : file.name}
        </p>
      </div>
      <div className='flex flex-wrap mt-4 gap-3'>

        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => { readFile('logo') }}
          customStyles='text-xs'
        ></CustomButton>

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => { readFile('full') }}
          customStyles='text-xs'
        ></CustomButton>

      </div>
    </div>
  )
}

export default FilePicker