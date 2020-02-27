import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Container, Circle } from './styles';
import api from '~/services/api';

import Badge from '~/components/Badge';
import ActionsButtons from '~/components/ActionsButtons';

import FormHeader from '~/components/Form/FormHeader';

export default function Deliveries() {
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        async function loadDeliveries() {
            const { data } = await api.get('deliveries');
            setDeliveries(data);
        }
        loadDeliveries();
    }, []);

    async function deleteHandle(id) {
        try {
            await api.delete(`deliveries/${id}`);
            setDeliveries(deliveries.filter(delivery => delivery.id !== id));
            toast.success('Registro excluido com sucesso.');
        } catch (err) {
            toast.error('Ocorreu um erro ao excluir a encomenda.');
        }
    }

    return (
        <Container>
            <FormHeader title="Gerenciando encomendas" pathname="encomendas" />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destinatário</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries &&
                        deliveries.map(delivery => (
                            <tr key={delivery.id}>
                                <td>#{delivery.id}</td>
                                <td>{delivery.recipient.name}</td>
                                <td>
                                    <Badge
                                        initials={
                                            delivery.deliveryman.name_initials
                                        }
                                        name={delivery.deliveryman.name}
                                    />
                                </td>
                                <td>{delivery.recipient.city}</td>
                                <td>{delivery.recipient.state}</td>
                                <td>
                                    <Circle>
                                        <div
                                            className={
                                                delivery.status &&
                                                `${delivery.status} status`
                                            }
                                        >
                                            <div className="circulo" />
                                            {delivery.status}
                                        </div>
                                    </Circle>
                                </td>
                                <td>
                                    <ActionsButtons
                                        pathname={`encomendas/${delivery.id}/editar`}
                                        deleteHandle={() =>
                                            deleteHandle(delivery.id)
                                        }
                                        state={{
                                            id: delivery.id,
                                            product: delivery.product,
                                            deliveryman_id: {
                                                value: delivery.deliveryman.id,
                                                label:
                                                    delivery.deliveryman.name,
                                            },
                                            recipient_id: {
                                                value: delivery.recipient.id,
                                                label: delivery.recipient.name,
                                            },
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}
