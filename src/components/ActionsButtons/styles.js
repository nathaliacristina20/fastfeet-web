import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    ul {
        position: absolute;
        width: 150px;
        background: #ffffff;
        box-shadow: 0px 0px 2px #00000026;
        border-radius: 4px;
        padding: 22px 11px;

        li {
            border-bottom: 1px solid #eeeeee;
            padding: 9px;
            display: flex;
            align-items: center;

            svg {
                margin-right: 10px;
            }
            &:last-child {
                border-bottom: none;
            }
        }
    }
    .opened {
        display: block;
    }

    .closed {
        display: none;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    z-index: 1;

    a,
    li {
        color: #999999;
    }
`;

export const Button = styled.div`
    position: relative;
`;

export const Chapeu = styled.div`
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    margin-top: -4px;
    position: absolute;
    background: #ffffff;
    box-shadow: 0px -2px 2px #0000001a;
`;
