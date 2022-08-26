import styled from "styled-components";
import {i18n} from "../i18n";
import React, {useEffect, useState} from "react";

const Wrapper = styled.div.attrs(() => ({
    id: 'select',
    tabIndex: '0',
}))`
    display: flex;
    flex-direction: column;
    width: 2rem;
    height: 1.5rem;
    color: var(--color-default-text);
    transition: var(--animation-speed);

    :hover label {
        position: relative;
        pointer-events: all;
        transition: var(--animation-speed);
    }

    label {
        color: var(--color-bg);
        min-height: 1.5rem;
        display: flex;
        justify-content: center;
        background: var(--color-default-text);
        position: absolute;
        pointer-events: none;
        order: 2;
        z-index: 1;
    }
    label:hover {
        color: lightgoldenrodyellow;
        background: var(--color-hover-bg);
    }

    input {
        opacity: 0;
        position: absolute;
        left: -99999px;
    }
    input:checked + label {
        color: var(--color-default-text);
        order: 1;
        z-index: 2;
        background: var(--color-ui-base);
        border-top: none;
        position: relative;
    }
`;

const Label = styled.label`
    cursor: pointer;
`;
const Input = styled.input.attrs({
    name: "input-option", // don't want to hide without the same 'name' attr in each option
})`
`;


export function LanguageSwitcher() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('UA'); // EN, UA, RU

    function draw() {
        return i18n.map((lang, index) => {
            let optionId: string = 'option' + index;
            return (
                <React.Fragment key={index}>
                    <Input id={optionId} type="radio" defaultChecked={lang.code === selectedLanguage}/>
                    <Label htmlFor={optionId} onClick={(e) => action(e, lang)}>{lang.code}</Label>
                </React.Fragment>
            )
        });
    }

    const action = (event: React.MouseEvent<HTMLLabelElement>, lang: any) => {
        let newLang = event.currentTarget.innerHTML;
        setSelectedLanguage(newLang);
        updateLanguage(lang);
    };

    useEffect(() => {
        updateLanguage(i18n.filter(lang => lang.code === selectedLanguage)[0]);
    }, []);

    function updateLanguage(lang: any): void {
        document.getElementById('header-text')!.innerHTML = lang.header;
        document.getElementsByTagName('h1')[0].innerHTML = lang.name;
        document.getElementsByTagName('h2')[0].innerHTML = lang.vacancy;
        document.getElementById('location')!.innerHTML = lang.location;

        document.getElementById('text-skills')!.innerHTML = lang.textSkills;
        document.getElementById('text-tests')!.innerHTML = lang.skills.tests;
        document.getElementById('text-web')!.innerHTML = lang.skills.web;
        document.getElementById('text-tools')!.innerHTML = lang.skills.tools;
        document.getElementById('text-familiar')!.innerHTML = lang.skills.familiar;

        document.getElementById('text-languages')!.innerHTML = lang.textLanguages;
        document.getElementById('english-name')!.innerHTML = lang.languages.english.name;
        document.getElementById('english-level')!.innerHTML = lang.languages.english.level;
        document.getElementById('ukrainian-name')!.innerHTML = lang.languages.ukrainian.name;
        document.getElementById('ukrainian-level')!.innerHTML = lang.languages.ukrainian.level;
        document.getElementById('russian-name')!.innerHTML = lang.languages.russian.name;
        document.getElementById('russian-level')!.innerHTML = lang.languages.russian.level;

        document.getElementById('text-experience')!.innerHTML = lang.textExperience;
        document.getElementById('exp-topjava')!.innerHTML = lang.experience.topjava;
        document.getElementById('exp-binary')!.innerHTML = lang.experience.binary;

        document.getElementById('text-courses')!.innerHTML = lang.textCourse;
        document.getElementById('course-block')!.innerHTML = lang.course;
    }

    return (
        <Wrapper>
            {draw()}
        </Wrapper>
    );
}