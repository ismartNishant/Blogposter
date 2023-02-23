// import React, { useState } from 'react'
import Post from './Post'
import MyModal from './MyModal';
import { useState } from 'react';
import { Inputs } from '../model';



const PostList = () => {

    const [posts, setPosts] = useState<Inputs[]>([]);

    const addPostHandler = (postData: Inputs) => {
      
        fetch('http://localhost:8080/posts',
            {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        setPosts((exsistingPosts) => [postData, ...exsistingPosts]);

    }

    return (
        <div>
            <MyModal onAddPost={addPostHandler} />
            <div className='d-flex gap-2 flex-wrap justify-content-center'>
                {posts.length > 0 ? (
                    posts.map((post, index) => <Post key={index} text={post.text} name={post.name} />)
                ) : (
                    <h1>No Post Yet</h1>
                )}
            </div>
        </div>
    )
}

export default PostList