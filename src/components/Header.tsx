import styled from "styled-components";
import {useState, useEffect} from "react";
import {Container} from "./Container";

import {BsSunFill, BsSun} from 'react-icons/bs';
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

const Title = styled.div`
    //color: var(--colors-text);
    //font-size: var(--fs-lg);
    //text-decoration: none;
    //font-weight: var(--fw-bold);
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
`;

const ThemeSwitcher = styled.div`
    cursor: pointer;
    display: flex;
    margin-right: 1rem;

    :hover {
        color: var(--color-a-text);
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
                    <Title id="header-text">Resume Page</Title>
                    <Menu>
                        <ThemeSwitcher onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <BsSunFill size="28px"/>
                            ) : (
                                <BsSun size="28px"/>
                            )}
                        </ThemeSwitcher>
                        <LanguageSwitcher/>
                    </Menu>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}