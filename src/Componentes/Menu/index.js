import style from './Menu.module.css'
import MenuLink from 'Componentes/MenuLink';

const Menu = () => {

    return (
        <header>
            <nav className={style.navegacao}>
                <MenuLink to='/'>
                    Início
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    );
}

export default Menu