import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Deliveries from '../pages/Delivery/Home';
import Delivery from '../pages/Delivery/Form';

import DropDown from '~/components/Form/DropDown';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/encomendas" exact isPrivate component={Deliveries} />
            <Route
                path="/encomendas/novo"
                exact
                isPrivate
                component={Delivery}
            />
            <Route
                path="/encomendas/:id/editar"
                exact
                isPrivate
                component={Delivery}
            />
        </Switch>
    );
}
