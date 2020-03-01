import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';

import api from '~/services/api';

import FormHeader from '~/components/Form/FormHeader';

import ActionsButtons from '~/components/ActionsButtons';

export default function Recipients() {
    const [recipients, setRecipients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadRecipients() {
            const { data } = await api.get('recipients');
            const dataFormatted = data.map(recipient => ({
                ...recipient,
                addressFormatted: `${recipient.street}, ${recipient.number} ${recipient.complement}, ${recipient.city} - ${recipient.state}`,
            }));
            setRecipients(dataFormatted);
            setLoading(false);
        }

        loadRecipients();
    }, []);

    async function deleteHandle(id) {
        try {
            await api.delete(`recipients/${id}`);
            setRecipients(recipients.filter(recipient => recipient.id !== id));
            toast.success('Registro excluido com sucesso.');
        } catch (err) {
            toast.error('Ocorreu um erro ao excluir o registro.');
        }
    }

    async function handleRecipients(event) {
        try {
            const { data } = await api.get('recipients', {
                params: { name: event.target.value },
            });
            const dataFormatted = data.map(recipient => ({
                ...recipient,
                addressFormatted: `${recipient.street}, ${recipient.number} ${recipient.complement}, ${recipient.city} - ${recipient.state}`,
            }));
            setRecipients(dataFormatted);
        } catch (err) {
            toast.error('Ocorreu um erro ao buscar os registros.');
        }
    }

    return (
        <Container>
            <FormHeader
                pathname="destinatarios"
                title="Gerenciando destinatários"
                handleIndex={handleRecipients}
            />

            {loading && <center>Carregando..</center>}
            {!loading && recipients.length === 0 && (
                <center>Nenhum registro encontrado.</center>
            )}

            {!loading && recipients.length !== 0 && (
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
                        {recipients.map(recipient => (
                            <tr key={recipient.id}>
                                <td>{`#${recipient.id}`}</td>
                                <td>{recipient.name}</td>
                                <td>{recipient.addressFormatted}</td>
                                <td>
                                    <ActionsButtons
                                        pathname={`/destinatarios/${recipient.id}/editar`}
                                        state={recipient}
                                        deleteHandle={() =>
                                            deleteHandle(recipient.id)
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Container>
    );
}
