import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Content, Column, Row, FormStyle } from '~/styles/form';

import Input from '~/components/Form/Input';
import InputFile from '~/components/Form/FileInput';

import FormButtons from '~/components/Form/FormButtons';

import api from '~/services/api';

import { Container } from './styles';

import history from '~/services/history';

export default function Deliveryman({ title, location }) {
    const formRef = useRef(null);

    const [deliveryman] = useState(location.state);

    const [avatar, setAvatar] = useState(
        deliveryman && deliveryman.avatar && deliveryman.avatar.id
    );

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
            .email('E-mail inválido')
            .required('Campo obrigatório'),
    });

    async function handleSubmit(data, { reset }) {
        try {
            /**
             * Se tiver algum avatar no state quer dizer
             * que ja foi feito o upload e nao precisa ser feito
             * novamente caso o usuario tenha errado algum campo de validacao
             * e de o submit novamente
             */
            let avatar_id = avatar;

            if (!avatar && data.avatar_id) {
                const file = new FormData();
                file.append('file', data.avatar_id);
                const response = await api.post('/files', file);
                const { id } = response.data;
                avatar_id = id;
                setAvatar(id);
            }

            const { name, email } = data;

            await schema.validate(
                { name, email, avatar_id },
                {
                    abortEarly: false,
                }
            );

            if (deliveryman && deliveryman.id) {
                await api.put(`deliverymans/${deliveryman.id}`, {
                    name,
                    email,
                    avatar_id: avatar_id || null,
                });
            } else {
                await api.post('deliverymans', {
                    name,
                    email,
                    avatar_id,
                });
            }

            setAvatar(null);
            toast.success('Registro salvo com sucesso!');

            history.push('/entregadores');
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                });
                formRef.current.setErrors(errorMessages);
            } else {
                toast.error('Ocorreu um erro ao tentar salvar o registro.');
            }
        }
    }

    return (
        <Container>
            <FormStyle>
                <Form
                    ref={formRef}
                    initialData={deliveryman}
                    onSubmit={handleSubmit}
                >
                    <FormButtons pathname="entregadores" title={title} />
                    <Content>
                        <Row>
                            <Column>
                                <InputFile
                                    initial={
                                        deliveryman &&
                                        deliveryman.avatar &&
                                        deliveryman.avatar.url
                                    }
                                    name="avatar_id"
                                />
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Input type="text" name="name" label="Nome" />
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Input
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="email@example.com"
                                />
                            </Column>
                        </Row>
                    </Content>
                </Form>
            </FormStyle>
        </Container>
    );
}

Deliveryman.propTypes = {
    location: PropTypes.object,
    title: PropTypes.string.isRequired,
};

Deliveryman.defaultProps = {
    location: [],
};
