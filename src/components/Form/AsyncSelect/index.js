import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@unform/core';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Select({
    label,
    name,
    placeholder,
    loadOptions,
    ...rest
}) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
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

    const errorStyle = {
        control: (base, state) => ({
            ...base,
            border: '1px solid #ff6347',
            // You can also use state.isFocused to conditionally style based on the focus state
        }),
    };

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
                styles={error && errorStyle}
            />
            {error && <span className="error">{error}</span>}
        </Container>
    );
}

Select.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    loadOptions: PropTypes.func.isRequired,
};

Select.defaultProps = {
    name: null,
    label: null,
    placeholder: '',
};
