import Header from "./components/Header"
import styles from "./App.module.css"
import './global.css'
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"
function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar/>
        <main>
          <Post 
          author="Vinicius Pires" 
          content="Eveniet nobis debitis odit quod mollitia magni praesentium provident! Deleniti similique earum neque suscipit!" />
          <Post 
          author="Vinicius Pires" 
          content="Eveniet nobis debitis odit quod mollitia magni praesentium provident! Deleniti similique earum neque suscipit!" />
         </main>
      </div>
    </div>
  )
}

export default App
