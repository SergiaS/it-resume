import {SiReact, SiTypescript, SiHtml5, SiCss3} from "react-icons/si";
import styled from "styled-components";
import {Container} from "./Container";

const FooterWrapper = styled.div`
    margin-top: 4rem;
    padding: 0.5rem 0;
    box-shadow: var(--shadow);
    background-color: var(--color-ui-base);
    font-size: var(--fs-sm);
    color: var(--color-important-text);
    text-align: center;

    .tech-icons {
        font-size: 32px;
        margin: 1rem 0.5rem;
        transition: var(--animation-speed);

        :hover {
            color: var(--color-a-text);
            transition: var(--animation-speed);
        }
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container className="container">
                <div id="footer-text">Technologies used:</div>
                <div>
                    <SiReact className="tech-icons" title="React"/>
                    <SiTypescript className="tech-icons" title="TypeScript"/>
                    <SiHtml5 className="tech-icons" title="HTML"/>
                    <SiCss3 className="tech-icons" title="CSS"/>
                </div>
            </Container>
        </FooterWrapper>
    )
}

export {Footer}