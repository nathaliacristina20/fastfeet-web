import React, { useState } from 'react';

import {
    MdMoreHoriz,
    MdRemoveRedEye,
    MdDeleteForever,
    MdModeEdit,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Button, Actions, Chapeu, Content } from './styles';

export default function ActionsButtons({ pathname, state, deleteHandle }) {
    // const inputRef = useRef(teste);

    const [open, setOpen] = useState(false);
    function openToggle() {
        setOpen(!open);
    }

    return (
        <Container>
            <Button onClick={openToggle}>
                <MdMoreHoriz size={20} color="#C6C6C6" />
            </Button>
            <Content>
                <Actions>
                    <Chapeu className={open ? 'opened' : 'closed'} />
                    <ul className={open ? 'opened' : 'closed'}>
                        <li>
                            <MdRemoveRedEye size={16} color="#7D40E7" />
                            <span>Visualizar</span>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname,
                                    state,
                                }}
                            >
                                <MdModeEdit size={16} color="#4D85EE" />
                                <span>Editar</span>
                            </Link>
                        </li>
                        <li>
                            <MdDeleteForever size={16} color="#DE3B3B" />
                            <span onClick={deleteHandle}>Excluir</span>
                        </li>
                    </ul>
                </Actions>
            </Content>
        </Container>
    );
}

ActionsButtons.propTypes = {
    pathname: PropTypes.string.isRequired,
    state: PropTypes.object,
    deleteHandle: PropTypes.func,
};

ActionsButtons.defaultProps = {
    state: [],
};
