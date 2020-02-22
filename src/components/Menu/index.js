import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Logo, Navigation, Logout } from './styles';

import logo from '../../assets/fastfeet.svg';

export default function Menu() {

    const [breadcrumbs, setBreadcrumbs] = useState([
        { route: '/encomendas', label: 'Encomendas', active: true },
        { route: '/entregadores', label: 'Entregadores', active: false },
        { route: '/destinatarios', label: 'Destinatarios', active: false },
        { route: '/problemas', label: 'Problemas', active: false },
    ]);

    function handleSignOut(){

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
                            >
                                {breadcrumb.label}
                            </Link>
                        ))}
                    </nav>
                </Navigation>
        </Content>
        <Logout>
            <h3>profile name</h3>
            <button type="button" onClick={handleSignOut}>
                <span>sair do sistema</span>
            </button>
        </Logout>     
   </Container>
    );
}
