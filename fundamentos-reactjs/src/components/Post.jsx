import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src="https://github.com/ViniciusPiresdeOliveira.png" />
                        <div className={styles.authorInfo}>
                            <strong>Vinicius Pires</strong>
                            <span>Front-End Developer</span>
                        </div>
                    </div>
                    <time title="11 de maio às 8:49h" dateTime="2022-09-16 08:49:38">Publicado há 1h</time>
                </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>👉<a href="https://github.com/ViniciusPiresdeOliveira/Ignite_ReactJS" target="blank">https://github.com/ViniciusPiresdeOliveira/Ignite_ReactJS</a>
                    </p>

                    <p>
                        <a href="">#novoprojeto </a>
                        <a href="">#nlw </a>
                        <a href="">#rocketseat </a>
                    </p>
                </div>
                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        placeholder="Deixe um comentário..."
                    />
                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    </div>
            </article>
        </>
    );
}

export default Post;