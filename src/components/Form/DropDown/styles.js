import styled from 'styled-components';

export const Container = styled.div`
    a {
    }
    display: flex;
    .dropdown-menu {
        display: flex;
        width: 150px;
        background: #ffffff;
        box-shadow: 0px 0px 2px #00000026;
        opacity: 1;
        position: absolute;
        border-radius: 4px;

        .testando {
            display: flex;
            justify-content: center;
        }
        li {
            text-align: left;
            letter-spacing: 0;
            color: #999999;
            opacity: 1;
            font-size: 16px;
            background: #ffffff;
            border-bottom: 1px solid #eeeeee;
            opacity: 1;
            width: 130px;
            padding: 5px;
            margin-bottom: 6px;
            cursor: pointer;
            &:last-child {
                border-bottom: none;
            }
        }
    }

    .show {
        display: block;
    }
`;
