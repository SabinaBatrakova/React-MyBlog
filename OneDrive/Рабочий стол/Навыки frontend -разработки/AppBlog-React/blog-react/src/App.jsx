import { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import BlogPosts from './components/BlogPosts';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  },[posts]);

  const handleSubmit = (newPost) => {
    const postId = { ...newPost, id: uuidv4()}
    setPosts((prevPosts) => [...prevPosts, postId])//новый пост в массив
    console.log('Новый пост:' , postId)
  };

  const handleDeletePost =(id) => {
    setPosts(posts.filter(post =>post.id !==id))
  }

  return (
    <div className='container'>
      <h1>МОЙ БЛОГ</h1>
        <div className="form-container">
          <div className="section-input">
            <BlogForm onSubmit={handleSubmit}/>
        </div>
        <div className="posts-container">
            <BlogPosts posts={posts} btnDeletePost={handleDeletePost}/>
         </div>
      </div>
    </div>
  )
}
export default App
