import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

const comments = [

]
function Post({ author, content, publishedAt }) {
    
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);
    const isNewCommentEmpty = newCommentText.length === 0

    // Formatando data usando o Intl
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-Br', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }


    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

    function deleteComment(commentToDeleted) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDeleted;
        })
        setComments(commentsWithoutDeletedOne);
        console.log(`${comment} sendo deletado...`);
    }

    function handleNewCommandInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!")

    }


    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={author.avatarUrl} />
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
                </header>
                <div className={styles.content}>
                    {content.map(item => {
                        if (item.type === 'paragraph') {
                            return <p key={item.content}>{item.content}</p>

                        }
                        else if (item.type === 'link') {
                            return <p key={item.content}><a href="#">{item.content}</a></p>
                        }
                    })}
                </div>
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        name="comment"
                        placeholder="Deixe um comentário..."
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        required
                        onInvalid={handleNewCommandInvalid}
                    />
                    <footer>
                        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                            <Comment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })}
                </div>
            </article>
        </>
    );
}

export default Post;