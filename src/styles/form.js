import styled from 'styled-components';

export const LinkButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-top: 15px;
    background: #7d40e7;
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
    justify-content: space-between;
    align-items: center;
`;

export const SearchInput = styled.div`
    display: flex;
    align-items: center;
    background: pink;
`;
