import React, { useState, useRef } from 'react';

import { Form } from '@unform/web';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Container } from './styles';
import { Content, Column, Row, FormStyle } from '~/styles/form';
import Input from '~/components/Form/Input';
import api from '~/services/api';

import FormButtons from '~/components/Form/FormButtons';

export default function Delivery({ title, location }) {
    const formRef = useRef(null);

    // const { id } = match.params;

    const [data] = useState(location.state ? location.state.delivery : []);

    const [deliveryman] = useState(null);
    const [recipient] = useState(null);

    // async function loadRecipients() {
    //     try {
    //         const response = await api.get('recipients');
    //         const values = response.data.map(recipient => ({
    //             label: recipient.name,
    //             value: recipient.id,
    //         }));
    //         return values;
    //     } catch (err) {
    //         toast.error('Ocorreu um erro ao carregar os Destinatarios.');
    //         return [];
    //     }
    // }

    // useEffect(() => {
    //     async function loadDeliverymans() {
    //         const { data } = await api.get('deliverymans');
    //         const options = data.map(option => ({
    //             label: option.name,
    //             value: option.id,
    //         }));
    //         console.tron.log(options);
    //         setDeliveryman(options);
    //     }
    //     loadDeliverymans();
    // }, []);

    // async function loadDeliverymans() {
    //     try {
    //         const response = await api.get('deliverymans');
    //         const values = response.data.map(deliveryman => ({
    //             label: deliveryman.name,
    //             value: deliveryman.id,
    //         }));
    //         console.log(values[0]);
    //         setDeliveryman(values[0]);
    //         return values;
    //     } catch (err) {
    //         toast.error('Ocorreu um erro ao carregar os Entregadores.');
    //         return [];
    //     }
    // }

    async function handleSubmit(data, { reset }) {
        // const schema = Yup.object().shape({
        //     product: Yup.string().required(),
        // });
        // if (validateInputForm(schema, data, formRef, reset)) {
        //     try {
        //         await api.post('deliveries', {
        //             deliveryman_id: deliveryman,
        //             recipient_id: recipient,
        //             product: data.product,
        //         });
        //         toast.success('Registro salvo com sucesso!');
        //     } catch (err) {
        //         toast.error('Ocorreu um erro ao salvar o registro.');
        //     }
        // }
    }

    return (
        <Container>
            <FormStyle>
                <Form ref={formRef} initialData={data} onSubmit={handleSubmit}>
                    <FormButtons title={title} pathname="encomendas" />
                    <Content>
                        <Row>
                            <Column>
                                <label>Destinatario</label>
                                {/* <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={loadRecipients}
                                    name="recipient_id"
                                    onChange={option =>
                                        setRecipient(option.value)
                                    }
                                    noOptionsMessage={() =>
                                        'Nenhum registro localizado'
                                    }
                                    loadingMessage={() => 'Carregando...'}
                                /> */}
                            </Column>
                            <Column>
                                <label>Entregador</label>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Input
                                    type="text"
                                    name="product"
                                    label="Nome do produto"
                                />
                            </Column>
                        </Row>
                    </Content>
                </Form>
            </FormStyle>
        </Container>
    );
}

Delivery.propTypes = {
    location: PropTypes.func,
    title: PropTypes.string.isRequired,
};

Delivery.defaultProps = {
    location: [],
};
