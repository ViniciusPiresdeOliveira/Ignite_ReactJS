import Header from "./components/Header"
import styles from "./App.module.css"
import './global.css'
import Sidebar from "./components/Sidebar"
import Post, { PostProps } from "./components/Post"

interface Posts extends PostProps {
  id: number
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ViniciusPiresdeOliveira.png",
      name: "Vinicius Pires",
      role: "Front-End Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um   projeto que fiz no Ignite de React, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀', },
      { type: 'link', content: 'https://github.com/ViniciusPiresdeOliveira/Ignite_ReactJS' }
    ],
    publishedAt: new Date('2022-09-19 11:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ViniciusPiresdeOliveira.png",
      name: "Vinicius Pires",
      role: "Front-End Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um   projeto que fiz no Ignite de React, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀', },
      { type: 'paragraph', content: 'https://github.com/ViniciusPiresdeOliveira/Ignite_ReactJS' }
    ],
    publishedAt: new Date('2022-09-19 14:00:00')
  },
];

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}

export default App
