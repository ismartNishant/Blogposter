// import React, { useState } from 'react'
import Post from './Post'
import NewPost from './NewPost';
import Modal from './MyModel';



const PostList = () => {
  
    return (
        <div>
            <Modal >
                <NewPost   />
            </Modal>

            <div className='d-flex gap-2 flex-wrap justify-content-center'>
                <Post text="say lalisa Love me" name="Nishant" />
            </div>

        </div>
    )
}

export default PostList