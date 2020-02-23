import React from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Text } from './styles';

export default function Button({ type, text, icon, ...rest }) {
    return (
        <Container {...rest}>
            <button type={type}>
                <MdAdd size={16} color="#FFF" />
                <Text>{text}</Text>
            </button>
        </Container>
    );
}
