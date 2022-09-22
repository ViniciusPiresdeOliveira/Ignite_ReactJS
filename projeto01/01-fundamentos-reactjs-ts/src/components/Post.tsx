import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface PostProps {
    author: {
      avatarUrl: string;
      name: string;
      role: string
    },
    content: {
      type: 'paragraph' | 'link';
      content: string
    }[],
    publishedAt: Date
  }

function Post({ author, content, publishedAt }:PostProps) {
    
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


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDeleted: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDeleted;
        })
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommandInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
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