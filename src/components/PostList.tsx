// import React, { useState } from 'react'
import Post from './Post'
import MyModal from './MyModal';
import { useEffect, useState } from 'react';
import { Inputs } from '../model';



const PostList = () => {

    const [posts, setPosts] = useState<Inputs[]>([]);
    const [isFetching, setIsFestching] = useState<boolean>(false)
    useEffect(() => {
        async function fetchPosts() {
            setIsFestching(true)
            const response = await fetch('http://localhost:8000/posts')
            const resdata = await response.json()
            setPosts(resdata.posts)
            setIsFestching(false)
        }
        fetchPosts();
    }, [])


    const addPostHandler = (postData: Inputs) => {
        fetch('http://localhost:8000/posts',
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

                {!isFetching && posts.length > 0 && (
                    posts.map((post, index) => <Post key={index} text={post.text} name={post.name} />)
                
                )}
                { !isFetching && posts.length === 0 && (
                    <div>
                        <h1>There are no post yet</h1>
                        <p>Please add some posts</p>
                    </div>
                )}
                {isFetching && (
                    <div> 
                        <h1>loading posts......</h1>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default PostList