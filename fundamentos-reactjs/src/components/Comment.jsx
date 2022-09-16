import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css"

function Comment() {
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
                        <button title="Deletar comentário">
                            <Trash
                            size={24}
                            />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                         Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;