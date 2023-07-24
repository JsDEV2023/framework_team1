import React, {useContext} from 'react';
import './Header.scss';
import logo from '../../img/logo.svg';
import toggleLight from '../../img/toggle_light.svg';
import toggleDark from '../../img/toggle_dark.svg';
import { ThemeContext } from '../../providers/ThemeProvider';

export const Header = () => {
    const [toggleTheme, setToggleTheme] = useContext(ThemeContext)
    const theme = toggleTheme ? toggleDark : toggleLight

    return (
        <header className='header'>
            <a className="header__logo" href='/'>
                <img src={logo} alt="Logo" />
            </a>
            <div className="header__toggle" onClick={() => setToggleTheme(prev => !prev)}>
                <img src={theme} alt="toggleTheme" />
            </div>
        </header>
    )
}