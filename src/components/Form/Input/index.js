import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container, Row } from './styles';

export default function InputComponent({ name, label, schema, ...rest }) {
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
            <Row>
                <label>{label}</label>
                <input
                    ref={inputRef}
                    defaultValue={defaultValue}
                    {...rest}
                    className={error ? 'has-error' : ''}
                />
                {error && <span className="error">{error}</span>}
            </Row>
        </Container>
    );
}
