import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus{
        outline: 0;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button { 
        font: 14px 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }

    .has-error {
        border: 1px solid #ff6347;
    }

    .error {
        font-size: 12px;
        color: #ff6347;
    }
    
    .table {
        border-collapse: separate;
        border-spacing: 0 21px;
        width: 100%;

        th {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 14px;
            text-align: left;
            letter-spacing: 0;
            color: #444444;
            opacity: 1;
        }

        th:first-child,
        td:first-child {
            padding-left: 25px;
        }      

        td {
            background: #fff;
            padding: 20px 20px 20px 0;
            font-size: 16px;
            text-align: left;
            color: #666666;
        }

        td:first-child {
            border-radius: 10px 0 0 10px;
        }

        td:last-child {
            border-radius: 0 10px 10px 0;
        }

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
        }

        .entregue {
            color: #2ca42b;
            background: #dff0df;
            .circulo {
                background: #2ca42b 0% 0% no-repeat padding-box;
            }
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
}
`;
