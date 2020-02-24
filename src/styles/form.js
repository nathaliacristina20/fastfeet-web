import styled, { css } from 'styled-components';

export const Content = styled.div`
    display: flex;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    background: yellow;
`;

export const FormBody = styled.div``;

export const FormStyle = styled.div`
    min-width: 50%;
    background: orange;
    form {
        width: 100%;
        background: blue;
        label {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            color: #444444;
            font-weight: bold;
        }

        input {
            background: red;
            height: 45px;
            border: 1px solid #dddddd;
            border-radius: 4px;
            opacity: 1;
            padding: 5px;
            margin-top: 9px;
            margin-bottom: 15px;
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        transition: background 0.2s;
        width: 100%;
        margin-top: 15px;
        background: #7d40e7 0% 0% no-repeat padding-box;
        opacity: 1;
        width: 300px;
        height: 45px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 34px;
    color: #444444;
    opacity: 1;
    font-size: 24px;
    font-weight: bold;
    width: 80%;
`;

export const LinkButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-top: 15px;
    background: #7d40e7;
    height: 36px;
    a {
        display: flex;
        align-items: center;
        width: 142px;
        text-transform: uppercase;
        height: 36px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;

        svg {
            margin: 8px 8px 8px 16px;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Column = styled.div`
    background: pink;
    margin: 10px;
`;

export const SearchInput = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 237px;
        height: 36px;
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin-top: 34px;
        margin-bottom: 22px;
    }
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
        props.color &&
        css`
            background: ${props.color};
        `}

    p {
        display: flex;
    }
`;
