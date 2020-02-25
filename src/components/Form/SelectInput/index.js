import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function SelectInput({
    name,
    label,
    onLoadOptions,
    onChange,
    placeholder,
}) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    function parseSelectValue(selectRef) {
        return selectRef.props.value || null;
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'select.state.value',
            parseValue: parseSelectValue,
            clearValue: selectRef => {
                selectRef.select.clearValue();
            },
        });
  }, [ref.current, fieldName]); // eslint-disable-line

    function handleChange(newValue) {
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }

    return (
        <Container>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <AsyncSelect
                name={fieldName}
                aria-label={fieldName}
                id={fieldName}
                isClearable
                className="async-select"
                classNamePrefix="async-select"
                value={value}
                onChange={handleChange}
                isMulti={false}
                loadOptions={inputValue => onLoadOptions(inputValue)}
                noOptionsMessage={() => 'Nenhum registro localizado'}
                loadingMessage={() => 'Carregando...'}
                ref={ref}
                getOptionValue={option => option.id}
                getOptionLabel={option => option.title || option.name}
                placeholder={placeholder}
            />

            {error && <span>{error}</span>}
        </Container>
    );
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onLoadOptions: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

SelectInput.defaultProps = {
    label: null,
    onChange: null,
    placeholder: 'Selecione...',
};
