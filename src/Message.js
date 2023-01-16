import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

const Message = () => {
  return (
    <div className='message'>
      <Avatar />

      <div className="message__info">
        <h4>gentmulaj
          <span className='message__timestamp'>
            this is a times
          </span>
        </h4>

        <p>This is a message</p>
      </div>

    </div>
  )
}

export default Message
