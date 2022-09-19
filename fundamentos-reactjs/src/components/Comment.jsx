import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css"

function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment () {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment () {
        console.log("deee");
        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ViniciusPiresdeOliveira.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Pires</strong>
                            <time title="11 de maio às 8:49h" dateTime="2022-09-16 08:49:38">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash
                            size={24}
                            />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                         Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;