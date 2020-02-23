import React, { useState } from 'react';

import { Container } from './styles';

export default function DropDown({ open }) {
    // const [open, setOpen] = useState(true);

    // function handleButtonClick() {
    //     setOpen(!open);
    // }

    return (
        <Container>
            <div className={open ? 'dropdown-menu show' : 'dropdown-menu'}>
                <div className="testando">
                    <ul className="nav">
                        <li>Visualizar</li>
                        <li>Editar</li>
                        <li>Excluir</li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}
