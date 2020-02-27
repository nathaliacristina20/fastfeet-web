import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const NameInitials = styled.div`
    border-radius: 50%;
    display: flex;
    height: 35px;
    width: 35px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    ${props =>
        props.colorBadge &&
        css`
            background: ${props.colorBadge};
        `}

    p {
        display: flex;
        text-transform: uppercase;
    }
`;
