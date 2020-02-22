import styled from 'styled-components';

export const Container = styled.div`
    form {
        label {
            display: flex;
            flex-direction: column;
            font-weight: bold;
            font-size: 14px;
            color: #444444;
            text-transform: uppercase;
            margin-top: 8px;
        }

        input {
            padding: 5px;
            height: 45px;
            display: flex;
            width: 300px;
            margin-top: 15px;
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

export const Content = styled.div`
    top: 225px;
    left: 540px;
    width: 360px;
    height: 425px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    opacity: 1;
`;

export const ButtonSignIn = styled.div`
    display: flex;
    justify-content: center;
`;
