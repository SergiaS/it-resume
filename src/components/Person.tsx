import styled from "styled-components";
import {BsFillEnvelopeFill, BsGeoAltFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';

const PersonWrapper = styled.div.attrs(() => ({
    id: 'person',
    tabIndex: '0',
}))`
    text-align: center;

    #contacts {
        font-size: var(--fs-sm);
    }

    .flex-block {
        display: flex;
        flex-wrap: wrap;
        padding: 0 1rem 1rem 1rem;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .person-icon {
        padding: 0 0.5rem;
        font-size: 24px;
    }
    .flex-row {
        display: flex;
        align-items: center;
        white-space: nowrap;
        padding: 0 0.5rem;
    }

    @media (max-width: 800px) {
        .flex-block {
            flex-direction: column;
        }
    }
`;


export const Person = () => {
    const {
        REACT_APP_LOCATION = 'location',
        REACT_APP_EMAIL = 'email',
        REACT_APP_LINKEDIN = 'linkedin',
        REACT_APP_GITHUB = 'github',
        REACT_APP_LEETCODE = 'leetcode'
    } = process.env;

    function getNameFromURL(url: string) {
        return url.substring(url.lastIndexOf('/') + 1);
    }

    return (
        <PersonWrapper>
            <h1>name</h1>
            <h2>vacancy</h2>
            <div id="contacts" className="flex-column">
                <div className="flex-block">
                    <div className="flex-row">
                        <div className='person-icon'>
                            <BsGeoAltFill/>
                        </div>
                        <a href={REACT_APP_LOCATION} id="location">{REACT_APP_LOCATION}</a>
                    </div>
                    <div className="flex-row">
                        <div className='person-icon'>
                            <BsFillEnvelopeFill/>
                        </div>
                        <a href={`mailto:${REACT_APP_EMAIL}`}>
                            {REACT_APP_EMAIL}
                        </a>
                    </div>
                    <div className="flex-row">
                        <div className='person-icon'>
                            <BsLinkedin/>
                        </div>
                        <a href={REACT_APP_LINKEDIN}>
                            {getNameFromURL(REACT_APP_LINKEDIN)}
                        </a>
                    </div>
                    <div className="flex-row">
                        <div className='person-icon'>
                            <BsGithub/>
                        </div>
                        <a href={REACT_APP_GITHUB}>
                            {getNameFromURL(REACT_APP_GITHUB)}
                        </a>
                    </div>
                    <div className="flex-row">
                        <div className='person-icon'>
                            <SiLeetcode/>
                        </div>
                        <a href={REACT_APP_LEETCODE}>
                            {getNameFromURL(REACT_APP_LEETCODE)}
                        </a>
                    </div>
                </div>
            </div>
        </PersonWrapper>
    )
}