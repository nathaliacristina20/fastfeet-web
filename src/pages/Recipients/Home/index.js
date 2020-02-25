import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import api from '~/services/api';

import FormHeader from '~/components/Form/FormHeader';

import ActionsButtons from '~/components/ActionsButtons';

export default function Recipients() {
    const [recipients, setRecipients] = useState([]);

    useEffect(() => {
        async function loadRecipients() {
            const response = await api.get('recipients');
            setRecipients(response.data);
        }

        loadRecipients();
    }, []);

    return (
        <Container>
            <FormHeader
                pathname="destinatarios"
                title="Gerenciando destinatários"
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {recipients.length > 0 &&
                        recipients.map(recipient => (
                            <tr key={recipient.id}>
                                <td>{`#${recipient.id}`}</td>
                                <td>{recipient.name}</td>
                                <td>{`${recipient.street},${recipient.number} ${recipient.complement}, ${recipient.city} - ${recipient.state}`}</td>
                                <td>
                                    <ActionsButtons />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}
