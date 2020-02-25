import React, { useState } from 'react';

import { Badge } from './styles';

import { NameInitials } from '~/styles/form';
import ActionsButtons from '~/components/ActionsButtons';

export default function DeliveryTable({ deliveries }) {
    const [colorsBadgeInitials] = useState([
        '#F4EFFC',
        '#FCF4EE',
        '#EBFBFA',
        '#FFEEF1',
        '#F4F9EF',
        '#FCFCEF',
    ]);

    function setColorsBadgeNameInitials() {
        const number = Math.round(
            Math.random() * (colorsBadgeInitials.length - 1)
        );
        return colorsBadgeInitials[number];
    }

    return (
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
                {deliveries.map(delivery => (
                    <tr key={delivery.id}>
                        <td>#{delivery.id}</td>
                        <td>{delivery.recipient.name}</td>
                        <td>
                            <Badge>
                                <NameInitials
                                    color={setColorsBadgeNameInitials}
                                >
                                    {delivery.deliveryman.name_initials}
                                </NameInitials>
                                <p>{delivery.deliveryman.name}</p>
                            </Badge>
                        </td>
                        <td>{delivery.recipient.city}</td>
                        <td>{delivery.recipient.state}</td>
                        <td>
                            <Badge>
                                <div
                                    className={
                                        delivery.status &&
                                        `${delivery.status} status`
                                    }
                                >
                                    <div className="circulo" />
                                    {delivery.status}
                                </div>
                            </Badge>
                        </td>
                        <td>
                            <ActionsButtons />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
