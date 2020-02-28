import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import FormHeader from '~/components/Form/FormHeader';

import { Container } from './styles';

import api from '~/services/api';

import ActionsButtons from '~/components/ActionsButtons';

export default function DeliveryProblems() {
    const [deliveryProblems, setDeliveryProblems] = useState([]);

    useEffect(() => {
        async function loadDeliveryProblems() {
            const { data } = await api.get('delivery/problems');
            setDeliveryProblems(data);
        }

        loadDeliveryProblems();
    }, []);

    async function deleteHandle(id) {
        try {
            await api.delete(`problem/${id}/cancel-delivery`);
            toast.success('Encomenda cancelada com sucesso.');
        } catch (err) {
            toast.error('Ocorreu um erro ao excluir o registro.');
        }
    }

    return (
        <Container>
            <FormHeader title="Problemas na entrega" buttons={false} />
            <table className="table">
                <thead>
                    <tr>
                        <th>Encomenda</th>
                        <th>Problema</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryProblems &&
                        deliveryProblems.map(deliveryProblem => (
                            <tr key={deliveryProblem.id}>
                                <td>{`#${deliveryProblem.id}`}</td>
                                <td>
                                    {deliveryProblem.description.length > 100
                                        ? `${deliveryProblem.description.substr(
                                              0,
                                              100
                                          )}...`
                                        : deliveryProblem.description}
                                </td>
                                <td>
                                    <ActionsButtons
                                        width={250}
                                        textDelete="Cancelar encomenda"
                                        deleteHandle={() =>
                                            deleteHandle(deliveryProblem.id)
                                        }
                                        showHandle={`<strong>Visualizar problema</strong><p>${deliveryProblem.description}</p>`}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}
