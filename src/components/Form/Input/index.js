import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Input({ name, label, schema, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue = '', registerField, error } = useField(
        name
    );
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <label htmlFor={inputRef}>{label}</label>
            <input
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
                className={error && 'has-error'}
            />
            {error && <span className="error">{error}</span>}
        </Container>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    schema: PropTypes.object,
};

Input.defaultProps = {
    label: null,
    schema: {},
};
