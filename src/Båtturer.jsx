import React from 'react'
import { client } from '../tina/__generated__/client'


const myPost = await client.queries.post({ relativePath: 'Hej.md' })

 


const Båtturer = () => {

  

  console.log(myPost.data.post)


 const arr = myPost.data.post.body.children





  return (
    <div>
    <h1>
      {myPost.data.post.title}
    </h1>
    {

      arr.map((obj) => (
      // console.log(obj.children[0].text)
      <p>{obj.children[0].text}</p>

    ))
    }


    </div>
  )
}

export default Båtturer