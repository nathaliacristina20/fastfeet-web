import React from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, SearchInput, RowButtons, Title } from './styles';

export default function FormHeader({ pathname, buttons, title }) {
    return (
        <Container>
            <Title>{title}</Title>
            {buttons && (
                <RowButtons>
                    <SearchInput>
                        <MdSearch size={20} color="#999999" />
                        <input
                            type="text"
                            placeholder={`Buscar por ${pathname}`}
                        />
                    </SearchInput>
                    <Link to={`${pathname}/novo`}>
                        <MdAdd size={20} color="#FFF" />
                        <span>Cadastrar</span>
                    </Link>
                </RowButtons>
            )}
        </Container>
    );
}

FormHeader.propTypes = {
    pathname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttons: PropTypes.bool,
};

FormHeader.defaultProps = {
    buttons: true,
};
