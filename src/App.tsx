
import './App.css';
import PostList from './components/PostList';



const App = () => {
  return (
    <div className='App '>
      <h1 className="heading text-center mb-5 pt-4">Random Posts</h1>
      <div className=''>
        <PostList  />
      </div>

    </div>
  )
}

export default App