import styled from "styled-components";
import {useState, useEffect} from "react";
import {Container} from "./Container";

import {BsSunFill, BsSun} from 'react-icons/bs';

const HeaderElement = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
`;

const Title = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-lg);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fw-normal);
    cursor: pointer;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    
    :hover {
        color: var(--colors-hover-text);
    }
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>Resume Page</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <span style={{marginRight: '0.75rem'}}>{theme} Theme</span>
                        {theme === 'light' ? (
                            <BsSunFill size="28px"/>
                        ) : (
                            <BsSun size="28px"/>
                        )}
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}