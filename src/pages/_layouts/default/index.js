import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Menu } from '../../../components/Menu';

export default function DefaultLayout({ children }) {
    return (<Wrapper> <Menu /> {children}</Wrapper>);
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
