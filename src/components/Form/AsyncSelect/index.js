import React, { useRef, useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@unform/core';

import PropTypes from 'prop-types';

import { Container, Error } from './styles';

export default function Select({
    label,
    name,
    placeholder,
    loadOptions,
    formRef,
    ...rest
}) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const styleDefault = {
        control: base => ({
            ...base,
            height: '45px',
        }),
    };

    const [styles, setStyles] = useState(styleDefault);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'select.state.value',
            getValue: ref => {
                if (rest.isMulti) {
                    if (!ref.select.state.value) {
                        return [];
                    }
                    return ref.select.state.value.map(option => option.value);
                }
                if (!ref.select.state.value) {
                    return '';
                }
                return ref.select.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    useEffect(() => {
        if (error) {
            setStyles({
                control: (base, state) => ({
                    ...base,
                    border: '1px solid red',
                }),
            });
        }
    }, [error]);

    function clearFieldError() {
        formRef.current.setFieldError(name, null);
        setStyles(styleDefault);
    }

    return (
        <Container>
            <label htmlFor={selectRef}>{label}</label>
            <AsyncSelect
                cacheOptions
                defaultOptions
                defaultValue={defaultValue}
                ref={selectRef}
                classNamePrefix="react-select"
                noOptionsMessage={() => 'Nenhum registro localizado'}
                loadingMessage={() => 'Carregando...'}
                loadOptions={loadOptions}
                {...rest}
                placeholder={placeholder}
                styles={styles}
                onInputChange={clearFieldError}
            />
            {error && (
                <Error>
                    <span className="error">{error}</span>
                </Error>
            )}
        </Container>
    );
}

Select.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    loadOptions: PropTypes.func.isRequired,
    formRef: PropTypes.string.isRequired,
};

Select.defaultProps = {
    name: null,
    label: null,
    placeholder: '',
};
