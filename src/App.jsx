import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import PostList from './store/post-list-store'
import { useState } from 'react'

function App() {
  const [selectedTab, SetSelectedTab] = useState("Home");

  return (
    <PostList>
      < div className='app-container' >
        <Sidebar selectedTab={selectedTab} SetSelectedTab={SetSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? <Posts></Posts> : <CreatePost></CreatePost>}

          <Footer></Footer>
        </div>

      </div >
    </PostList>


  )
}

export default App;
