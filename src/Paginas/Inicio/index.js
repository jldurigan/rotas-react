import styles from "./Inicio.module.css";
import posts from "assets/posts.json";
import Post from "Componentes/Post";

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map(post => <li key={post.id}><Post post={post} /></li>)}
        </ul>
    );
}