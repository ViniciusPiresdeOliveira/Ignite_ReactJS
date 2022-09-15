import Header from "./components/Header"
import Post from "./Post"
import styles from "./App.module.css"
import './global.css'
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar/>
        <main><Post author="Vinicius Pires" content="Eveniet nobis debitis odit quod mollitia magni praesentium provident! Deleniti similique earum neque suscipit!" />
         </main>
      </div>
    </>
  )
}

export default App
