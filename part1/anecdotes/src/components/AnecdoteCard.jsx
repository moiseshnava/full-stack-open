import React from 'react'

const AnecdoteCard = ({ paragraph }) => {
   return (
      <div style={{
         textAlign:"center",
         borderRadius: '10px',
         border: "1px solid #002110",
         
      }}>
         {paragraph}
      </div>
   )
}

export default AnecdoteCard;