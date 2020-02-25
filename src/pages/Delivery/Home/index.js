import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '~/services/api';

import DeliveryTable from './DeliveryTable';

import FormHeader from '~/components/Form/FormHeader';

export default function Deliveries() {
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        async function loadDeliveries() {
            const { data } = await api.get('deliveries');
            console.tron.log(`resss `, data);
            setDeliveries(data);
        }
        loadDeliveries();
    }, []);

    return (
        <Container>
            <FormHeader title="Gerenciando encomendas" pathname="encomendas" />
            {deliveries.length > 0 && <DeliveryTable deliveries={deliveries} />}
        </Container>
    );
}
