import styles from './Sidebar.module.css';
import {PencilLine} from "phosphor-react"
function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"></img>
            <div className={styles.profile}>
                <img src="https://github.com/ViniciusPiresdeOliveira.png" className={styles.avatar}></img>
                <strong>Vinicius Pires</strong>
                <span>Front-End Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine
                    size={20}
                    />
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    );
}

export default Sidebar;