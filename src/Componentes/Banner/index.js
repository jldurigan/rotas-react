import styles from "Componentes/Banner/Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.titulo}>
                Olá, mundo!
            </h1>
            <p className={styles.paragrafo}>lorem ipsum</p>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de perfil"
                />
            </div>
        </div>
    );
}

export default Banner