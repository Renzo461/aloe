import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 99%;
    height: 100vh;
    margin 5px;
`;

export const CalendarHead = styled.div`
    width: 100%;
    height: 40px;
    justify-content: space-around;
    align-text: left;
    margin-top:2%;
`;

export const SevenColGrid = styled.div`
    width: full;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    text-transform: uppercase;
    font-weight: bold;
    height: 47px;
`;

export const HeadDay = styled.span`
    text-align: center;
    background: #348F6C;
    color: white;
    font-size: 1.5 rem;
    display: grid;
    align-items: center;
`;

export const ClenderBody = styled.div`
    height: calc(100% - 27px - 40px);
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-templated-rows: repeat(${({fourCol}) => fourCol ? 4 : 5}, 1fr);
    
`;

export const StyledDay = styled.span`
    border: 1px solid;
    text-align: left;
    padding: 5px;
    ${({active}) => active && `background: #FAC55C`};
`;

export const StyledEvent = styled.span`
    display: grid;
    text-align: left;
    background: #EF5350;
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
`;
export const StyledposEvent = styled.span`
    display: grid;
    text-align: left;
    background: #FAC55C;
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
`;