import styles from "./Avatar.module.css"

function Avatar({src, hasBorder = true}){
// Neste caso, por default o valor de hasBorder é true
    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src}/>
    );
}

export default Avatar;