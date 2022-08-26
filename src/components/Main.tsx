import styled from "styled-components";
import {Container} from "./Container";
import {GiSkills} from "react-icons/gi";
import {IoSchool} from "react-icons/io5";
import {MdLanguage, MdOutlineWork} from "react-icons/md";

const MainBlock = styled.div`
    #skills-block {
        padding: var(--gap-inner);
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    }
    #languages-block {
        padding: var(--gap-inner);
        width: 100%;
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: var(--fs-md);
    }
    #experience-block, #course-block {
        padding: var(--gap-inner);
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 2fr;
    }
    #skills-block, #languages-block, #experience-block, #course-block {
        background-color: var(--color-bg-block);
        border-radius: 0 0 10px 10px;
    }
    
    .sub-header {
        margin-top: 1.5rem;
        font-variant: small-caps;
        font-size: var(--fs-xl);
        font-weight: var(--fw-bold);
        color: var(--color-important-text);
        display: flex;
        align-items: center;
    }
    .header-icon {
        font-size: 32px;
        padding-right: 0.5rem;
    }
    
    @media (max-width: 800px) {
        #experience-block, #course-block {
            grid-template-columns: 1fr;
        }
        #experience-block > *:nth-child(odd):not(:first-child),
        #course-block > *:nth-child(odd):not(:first-child) {
            margin-top: 1.5rem;
        }

        .date {
            text-align: center;
        }
    }

    @media (max-width: 600px) {
        #skills-block {
            grid-template-columns: 1fr;
        }
        #languages-block {
            flex-direction: column;
            gap: var(--gap-inner);
        }
    }
`;

export const Main = () => {
    return (
        <Container>
            <MainBlock id="main-block">
                <div className="sub-header">
                    <GiSkills className="header-icon"/>
                    <div id="text-skills">Skills</div>
                </div>
                <hr/>

                {/* grid system */}
                <div id="skills-block">
                    <div>
                        <div className="bold">Java Core</div>
                        <div className="italic">Collections, Stream API, I/O, etc.</div>
                    </div>
                    <div>
                        <div className="bold">Spring</div>
                        <div className="italic">IoC, JDBC, MVC, Data, Security, Boot</div>
                    </div>
                    <div>
                        <div className="bold">API/Frameworks</div>
                        <div className="italic">Servlets/JSP + JSTL, Thymeleaf, JDBC, JPA, Hibernate, REST -
                            Jackson/Gson
                        </div>
                    </div>
                    <div>
                        <div className="bold" id="text-tests">Tests</div>
                        <div className="italic">JUnit 4/5, Hamcrest, Mockito, AssertJ, JsonPath</div>
                    </div>
                    <div>
                        <div className="bold">DBMS</div>
                        <div className="italic">PostgreSQL, MySQL, HSQLDB, H2, Oracle DB, MongoDB</div>
                    </div>
                    <div>
                        <div className="bold" id="text-web">Web</div>
                        <div className="italic">React, TypeScript, JavaScript, HTML/CSS</div>
                    </div>
                    <div>
                        <div className="bold" id="text-tools">Tools</div>
                        <div className="italic">IntelliJ IDEA, Git, Maven, Gradle</div>
                    </div>
                    <div>
                        <div className="bold" id="text-familiar">Familiar with</div>
                        <div className="italic">jQuery, Node.js, Python, Dart/Flutter, Docker, AWS (EC2, S3), Postman
                        </div>
                    </div>
                </div>

                <div className="sub-header">
                    <MdLanguage className="header-icon"/>
                    <div id="text-languages">Languages</div>
                </div>
                <hr/>

                {/* flex */}
                <div id="languages-block">
                    <div>
                        <div className="bold" id="english-name">English</div>
                        <div className="italic" id="english-level">Intermediate B2</div>
                    </div>
                    <div>
                        <div className="bold" id="ukrainian-name">Українська</div>
                        <div className="italic" id="ukrainian-level">Рідна</div>
                    </div>
                    <div>
                        <div className="bold" id="russian-name">Руснявый</div>
                        <div className="italic" id="russian-level">Мастер</div>
                    </div>
                </div>

                <div className="sub-header">
                    <MdOutlineWork className="header-icon"/>
                    <div id="text-experience">Professional Experience</div>
                </div>
                <hr/>

                <div id="experience-block">
                    <div className="date">10/2021 – 01/2022</div>
                    <div>
                        <div className="exp-position">
                            <span className="bold">Java Developer</span>,
                            <span className="italic">Java Online Projects (JavaOPs)</span>
                        </div>
                        <div className="exp-desc" id="exp-topjava">
                            <p>Traineeship TopJava - participation in development Spring/JPA Enterprise Web-App with
                                authorization and access rights on roles based on the Maven / Spring MVC / Security /
                                REST (Jackson) / Java 8 Stream API stack:</p>
                            <ul>
                                <li>implementation of saving to Postgres and HSQLDB databases based on Spring JBDC, JPA
                                    (Hibernate) and Spring-Data-JPA;
                                </li>
                                <li>implementation and testing of REST and AJAX controllers;</li>
                                <li>client implementation on Bootstrap (css/js), datatables, jQuery + plugins.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="date">04/2020 – 06/2020</div>
                    <div>
                        <div className="exp-position">
                            <span className="bold">Java Developer</span>,
                            <span className="italic">Binary Studio</span>
                        </div>
                        <div className="exp-desc" id="exp-binary">
                            <p>Thread is a SPA with a ready-made architecture and structure, with basic technology stack
                                and a starting functional, designed for independent practice of students. The topic of the
                                project is a social network similar to Twitter. Stack: Spring IoC, Lombok, Spring Data JPA,
                                WebSocket, PostgreSQL</p>
                        </div>
                    </div>
                </div>

                <div className="sub-header">
                    <IoSchool className="header-icon"/>
                    <div id="text-courses">Courses</div>
                </div>
                <hr/>

                <div id="course-block">
                    <div className="date">04/2020 – 06/2020</div>
                    <div>
                        <div className="bold">MG (Master Group)</div>
                        <div className="italic">
                            <p>1 year course by Yaroslav Brin about finances, health, psychology.</p>
                        </div>
                    </div>
                    <div className="date">02/2019 – 08/2019</div>
                    <div>
                        <div className="bold">JavaRush</div>
                        <div className="italic">
                            <p>Java Core course by <a href="https://javarush.ru/ua/">javarush.ru</a>.</p>
                        </div>
                    </div>
                    <div className="date">06/2018 – 11/2018</div>
                    <div>
                        <div className="bold">FM4M</div>
                        <div className="italic">
                            <p>6 month course - Fitness Model for 4 Months by Yaroslav Brin.</p>
                        </div>
                    </div>
                </div>
            </MainBlock>
        </Container>
    )
}