import React, { useState, useEffect } from 'react';

import {
    MdSearch,
    MdMoreHoriz,
    MdRemoveRedEye,
    MdDeleteForever,
    MdModeEdit,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Content, Title, Badge, NameInitials } from './styles';
import api from '~/services/api';

import { SearchInput, Row, LinkButton } from '~/styles/form';

import DropDown from '~/components/Form/DropDown';

export default function Deliveries() {
    const [deliveries, setDeliveries] = useState([]);
    const [colorsBadgeInitials] = useState([
        '#F4EFFC',
        '#FCF4EE',
        '#EBFBFA',
        '#FFEEF1',
        '#F4F9EF',
        '#FCFCEF',
    ]);

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('deliveries');
            setDeliveries(response.data);
        }

        loadDeliveries();
    }, []);

    function setColorsBadgeNameInitials() {
        const number = Math.round(
            Math.random() * (colorsBadgeInitials.length - 1)
        );
        console.log('number ', number);
        return colorsBadgeInitials[number];
    }

    const [open, setOpen] = useState(false);

    function handleButtonClick() {}

    return (
        <Container>
            <Content>
                <Title>Gerenciando encomendas</Title>
                <Row>
                    <SearchInput>
                        <MdSearch size={20} color="#999999" />
                        <input type="text" placeholder="Buscar encomendas" />
                    </SearchInput>
                    <LinkButton>
                        <Link to="/encomendas/novo">
                            <MdSearch size={20} color="#FFF" />
                            <span>Cadastrar</span>
                        </Link>
                    </LinkButton>
                </Row>

                <table>
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
                                    <MdMoreHoriz size={20} color="#C6C6C6" />
                                    <ul className="nav">
                                        <li>
                                            <MdRemoveRedEye
                                                size={16}
                                                color="#8E5BE8"
                                            />
                                            Visualizar
                                        </li>
                                        <li>
                                            <Link
                                                to={{
                                                    pathname: `/encomendas/${delivery.id}/editar`,
                                                    state: {
                                                        delivery,
                                                    },
                                                }}
                                            >
                                                <MdModeEdit
                                                    size={16}
                                                    color="#4D85EE"
                                                />
                                                <span>Editar</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <MdDeleteForever
                                                size={16}
                                                color="#DE3B3B"
                                            />{' '}
                                            Excluir
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Container>
    );
}
