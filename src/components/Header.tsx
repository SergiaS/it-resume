import styled from "styled-components";
import {useState, useEffect} from "react";
import {Container} from "./Container";

import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import {LanguageSwitcher} from "./LanguageSwitcher";

const HeaderElement = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--color-ui-base);
    font-size: var(--fs-lg);
`;

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
`;

const ThemeSwitcher = styled.div`
    cursor: pointer;
    display: flex;
    margin-right: 1rem;
    align-items: center;
    justify-items: center;
    transition: 0.4s;

    :hover {
        color: var(--color-a-text);
        transition: 0.4s;
    }
`;

export const Header = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <div id="header-text">Resume Page</div>
                    <Menu>
                        <ThemeSwitcher onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <BsFillSunFill size="22px"/>
                            ) : (
                                <BsFillMoonStarsFill size="20px"/>
                            )}
                        </ThemeSwitcher>
                        <LanguageSwitcher/>
                    </Menu>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}