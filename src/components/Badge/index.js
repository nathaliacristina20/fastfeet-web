import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { colourOptions } from '~/assets/shared/data';
import { Container, NameInitials } from './styles';

export default function Badge({ initials, name }) {
    const [color, setColor] = useState([]);

    useEffect(() => {
        function setColorOption() {
            const colorRandom = Math.round(
                Math.random() * (colourOptions.length - 1)
            );
            setColor(colourOptions[colorRandom]);
        }
        setColorOption();
    }, []);

    return (
        <Container>
            <NameInitials colorBadge={color}>
                <p>{initials}</p>
            </NameInitials>
            <p>{name}</p>
        </Container>
    );
}

Badge.propTypes = {
    initials: PropTypes.string.isRequired,
    name: PropTypes.string,
};

Badge.defaultProps = {
    name: '',
};
