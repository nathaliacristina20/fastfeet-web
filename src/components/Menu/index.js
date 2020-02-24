import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Logo, Navigation, Logout } from './styles';

import logo from '../../assets/fastfeet.svg';

import { signOut } from '~/store/modules/auth/actions';

export default function Menu() {
    const dispatch = useDispatch();

    const [breadcrumbs, setBreadcrumbs] = useState([
        { route: '/encomendas', label: 'Encomendas', active: true },
        { route: '/entregadores', label: 'Entregadores', active: false },
        { route: '/destinatarios', label: 'Destinatarios', active: false },
        { route: '/problemas', label: 'Problemas', active: false },
    ]);

    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    function handleChangeBreadcrumbs(label) {
        const data = breadcrumbs.map(breadcrumb => ({
            ...breadcrumb,
            active: breadcrumb.label === label && true,
        }));
        setBreadcrumbs(data);
    }

    return (
        <Container>
            <Content>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <Navigation active>
                    <nav>
                        {breadcrumbs.map(breadcrumb => (
                            <Link
                                key={breadcrumb.label}
                                className={breadcrumb.active ? 'active' : ''}
                                to={breadcrumb.route}
                                onClick={() =>
                                    handleChangeBreadcrumbs(breadcrumb.label)
                                }
                            >
                                {breadcrumb.label}
                            </Link>
                        ))}
                    </nav>
                </Navigation>
            </Content>
            <Logout>
                <h3>{profile.name}</h3>
                <button type="button" onClick={handleSignOut}>
                    <span>sair do sistema</span>
                </button>
            </Logout>
        </Container>
    );
}
