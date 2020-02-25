import React, { useState, useEffect } from 'react';

import FormHeader from '~/components/Form/FormHeader';

import { Container } from './styles';

import api from '~/services/api';

import ActionsButtons from '~/components/ActionsButtons';

export default function Deliverymans() {
    const [deliverymans, setDeliverymans] = useState([]);

    useEffect(() => {
        async function loadDeliverymans() {
            const response = await api.get('deliverymans');
            setDeliverymans(response.data);
        }

        loadDeliverymans();
    }, []);

    return (
        <Container>
            <FormHeader
                pathname="entregadores"
                title="Gerenciando entregadores"
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {deliverymans.map(deliveryman => (
                        <tr key={deliveryman.id}>
                            <td>#{deliveryman.id}</td>
                            <td>{deliveryman.name_initials}</td>
                            <td>{deliveryman.name}</td>
                            <td>{deliveryman.email}</td>
                            <td>
                                <ActionsButtons
                                    pathname={`/entregadores/${deliveryman.id}/editar`}
                                    state={deliveryman}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
