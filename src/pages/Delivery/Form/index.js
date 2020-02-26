import React, { useState, useRef } from 'react';

import { Form } from '@unform/web';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';
import { Content, Column, Row, FormStyle } from '~/styles/form';

import history from '~/services/history';

import Input from '~/components/Form/Input';
import api from '~/services/api';
import FormButtons from '~/components/Form/FormButtons';
import Select from '~/components/Form/AsyncSelect';

export default function Delivery({ title, location }) {
    const formRef = useRef(null);
    const [data] = useState(location.state ? location.state.delivery : []);
    async function loadRecipients() {
        try {
            const response = await api.get('recipients');
            const values = response.data.map(recipient => ({
                label: recipient.name,
                value: recipient.id,
            }));
            return values;
        } catch (err) {
            toast.error('Ocorreu um erro ao carregar os Destinatarios.');
            return [];
        }
    }

    async function loadDeliverymans() {
        try {
            const response = await api.get('deliverymans');
            const values = response.data.map(deliveryman => ({
                label: deliveryman.name,
                value: deliveryman.id,
            }));
            return values;
        } catch (err) {
            toast.error('Ocorreu um erro ao carregar os Entregadores.');
            return [];
        }
    }

    const schema = Yup.object().shape({
        recipient_id: Yup.number()
            .typeError('Campo obrigatorio')
            .positive()
            .required('Campo obrigatorio'),
        deliveryman_id: Yup.number()
            .required('Campo obrigatorio')
            .typeError('Campo obrigatorio'),
        product: Yup.string().required('Campo obrigatorio'),
    });

    async function handleSubmit(data, { reset }) {
        console.log(data);
        try {
            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('deliveries', data);
            toast.success('Registro salvo com sucesso.');

            history.push('/encomendas');

            // formRef.current.setErrors({});
            // reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                });
                formRef.current.setErrors(errorMessages);
            } else {
                toast.error('Ocorreu um erro ao salvar a encomenda.');
            }
        }
    }

    return (
        <Container>
            <FormStyle>
                <Form ref={formRef} initialData={data} onSubmit={handleSubmit}>
                    <FormButtons title={title} pathname="encomendas" />
                    <Content>
                        <Row>
                            <Column>
                                <Select
                                    label="Destinatário"
                                    name="recipient_id"
                                    loadOptions={loadRecipients}
                                />
                            </Column>
                            <Column>
                                <Select
                                    label="Entregador"
                                    name="deliveryman_id"
                                    loadOptions={loadDeliverymans}
                                />
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
