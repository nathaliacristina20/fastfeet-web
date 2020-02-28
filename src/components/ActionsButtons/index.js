import React, { useState } from 'react';

import { MdMoreHoriz, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Button, Actions, Chapeu, Content } from './styles';

import AlertConfirm from '~/components/Alert/Confirm';
import AlertModal from '~/components/Alert/AlertModal';

export default function ActionsButtons({
    pathname,
    state,
    textDelete,
    deleteHandle,
    showHandle,
    width,
}) {
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
            <Content width={250}>
                <Actions>
                    <Chapeu className={open ? 'opened' : 'closed'} />
                    <ul className={open ? 'opened' : 'closed'}>
                        {showHandle && (
                            <li>
                                <AlertModal showHTML={showHandle} />
                            </li>
                        )}
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
                            <AlertConfirm
                                confirm={() => deleteHandle()}
                                title={textDelete || 'Excluir'}
                            />
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
    textDelete: PropTypes.string,
    deleteHandle: PropTypes.func,
    showHandle: PropTypes.func,
    width: PropTypes.number,
};

ActionsButtons.defaultProps = {
    state: [],
    textDelete: '',
    width: 150,
};
