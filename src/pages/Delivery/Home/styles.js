import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 120px 0 120px;
    .circulo {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 1;
        display: flex;
        margin: 6px;
    }

    .status {
        width: 120px;
        height: 25px;
        border-radius: 12px;
        opacity: 1;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 5px;

        &::before {
            content: '';
            position: absolute;
            left: calc(50% - 20px);
            top: -20px;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid rgba(0, 0, 0, 0.6);
        }
    }

    .entregue {
        color: #2ca42b;
        background: #dff0df;
    }

    .entregue .circulo {
        background: #2ca42b 0% 0% no-repeat padding-box;
    }

    .retirada {
        color: ${darken(0.2, '#bad2ff')};
        background: #bad2ff;
        .circulo {
            background: ${darken(0.2, '#bad2ff')};
        }
    }

    .pendente {
        color: ${darken(0.4, '#f0f0df')};
        background: #f0f0df;
        .circulo {
            background: ${darken(0.4, '#f0f0df')};
        }
    }

    .cancelada {
        color: ${darken(0.4, '#FAB0B0')};
        background: #fab0b0;
        .circulo {
            background: ${darken(0.4, '#FAB0B0')};
        }
    }

    input {
        width: 237px;
        height: 36px;
        border: 1px solid #dddddd;
        border-radius: 4px;
        margin-top: 34px;
        margin-bottom: 22px;
    }

    table {
        border-collapse: separate;
        border-spacing: 0 21px;
        width: 100%;

        tr {
            padding: 20px;
        }

        th:first-child,
        td:first-child {
            padding-left: 25px;
        }

        td:last-child {
            cursor: pointer;
        }

        th {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 14px;
            text-align: left;
            letter-spacing: 0;
            color: #444444;
            opacity: 1;
        }

        td {
            background: #fff;
            padding: 20px 20px 20px 0;
            border-left-width: 0;
            font-size: 16px;
            text-align: left;
            letter-spacing: 0;
            color: #666666;
            opacity: 1;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    margin-top: 34px;
    color: #444444;
    opacity: 1;
    font-size: 24px;
    font-weight: bold;
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

export const Badge = styled.div`
    display: flex;
    align-items: center;
`;
