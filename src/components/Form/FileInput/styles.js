import styled from 'styled-components';

export const Container = styled.div`
    input[type='file'] {
        display: none;
    }
`;

export const ContentPreview = styled.div`
    display: flex;
    justify-content: center;
`;

export const PreviewDefault = styled.div`
    display: flex;
    justify-content: center;
    border: 1px dashed #dddddd;
    opacity: 1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

export const PreviewDefaultError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed red;
    opacity: 1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    p {
        color: red;
    }
`;

export const PreviewText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ddd;
`;

export const Preview = styled.div`
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
`;
