import React, { useState, useEffect } from 'react';

import {
    MdSearch,
    MdMoreHoriz,
    MdRemoveRedEye,
    MdDeleteForever,
    MdModeEdit,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Title, Row, SearchInput, LinkButton } from '~/styles/form';

import api from '~/services/api';

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
            <Title>Gerenciando entregadores</Title>
            <Row>
                <SearchInput>
                    <MdSearch size={20} color="#999999" />
                    <input type="text" placeholder="Buscar por entregadores" />
                </SearchInput>
                <LinkButton>
                    <Link to="/entregadores/novo">
                        <MdSearch size={20} color="#FFF" />
                        <span>Cadastrar</span>
                    </Link>
                </LinkButton>
            </Row>
            <table className="grid">
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
                                                pathname: `/encomendas/1/editar`,
                                                state: {
                                                    deliveryman,
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
        </Container>
    );
}
