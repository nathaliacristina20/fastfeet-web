import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;

    .has-error {
        border: 1px solid #ff6347;
    }

    span {
        margin: 3px 0;
        font-size: 12px;
        color: #ff6347;
    }
`;
