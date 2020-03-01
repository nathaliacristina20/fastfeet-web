import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import FormHeader from '~/components/Form/FormHeader';

import { Container } from './styles';

import api from '~/services/api';

import ActionsButtons from '~/components/ActionsButtons';

import { Avatar } from '~/styles/form';

import Badge from '~/components/Badge';

export default function Deliverymans() {
    const [deliverymans, setDeliverymans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDeliverymans() {
            const { data } = await api.get('deliverymans');
            setDeliverymans(data);
            setLoading(false);
        }
        loadDeliverymans();
    }, []);

    async function deleteHandle(id) {
        try {
            await api.delete(`deliverymans/${id}`);
            setDeliverymans(
                deliverymans.filter(deliveryman => deliveryman.id !== id)
            );
            toast.success('Registro excluido com sucesso.');
        } catch (err) {
            toast.error('Ocorreu um erro ao excluir a encomenda.');
        }
    }

    async function handleDeliverymans(event) {
        try {
            const { data } = await api.get('deliverymans', {
                params: { name: event.target.value },
            });
            setDeliverymans(data);
        } catch (err) {
            toast.error('Ocorreu um erro ao buscar os registros.');
        }
    }

    return (
        <Container>
            <FormHeader
                pathname="entregadores"
                title="Gerenciando entregadores"
                handleIndex={handleDeliverymans}
            />

            {loading && <center>Carregando..</center>}
            {!loading && deliverymans.length === 0 && (
                <center>Nenhum registro encontrado.</center>
            )}

            {!loading && deliverymans.length !== 0 && (
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
                                <td>
                                    {deliveryman &&
                                    deliveryman.avatar &&
                                    deliveryman.avatar.url !== null ? (
                                        <Avatar>
                                            <img
                                                src={deliveryman.avatar.url}
                                                alt={deliveryman.name}
                                            />
                                        </Avatar>
                                    ) : (
                                        <Badge
                                            initials={deliveryman.name_initials}
                                        />
                                    )}
                                </td>
                                <td>{deliveryman.name}</td>
                                <td>{deliveryman.email}</td>
                                <td>
                                    <ActionsButtons
                                        pathname={`/entregadores/${deliveryman.id}/editar`}
                                        state={deliveryman}
                                        deleteHandle={() =>
                                            deleteHandle(deliveryman.id)
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
