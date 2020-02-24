import styled from 'styled-components';

export const Container = styled.div`

    input {
        height: 45px;
    }
    
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
