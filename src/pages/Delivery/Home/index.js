import React from 'react';

import { Container, Title } from './styles';

export default function Deliveries({ title }) {
    return (
        <Container>
            <Title>{title}</Title>
            <input type="text" />
            <table>
                <thead>
                    <th>Id</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Destinatario</td>
                        <td>Entregador</td>
                        <td>Cidade</td>
                        <td>Estado</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
