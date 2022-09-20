import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean,
    //Essas propriedades são opcionais, pois elas já existem em uma <img/>
    // src: string,
    // alt?: string, 
    // title ?: string
}
function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    // Neste caso, por default o valor de hasBorder é true
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}

export default Avatar;