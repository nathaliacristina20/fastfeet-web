import React, { useSelector, useRef } from 'react';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Container, Content, ButtonSignIn } from './styles';

import InputComponent from '../../components/Form/Input';

import { signInRequest } from '~/store/modules/auth/actions';

import validateInputForm from '../../components/Form/Util/ErrorHandler';

export default function SignIn() {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const schema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(6)
            .required(),
    });

    function handleSubmit(data, { reset }) {
        if (validateInputForm(schema, data, formRef, reset)) {
            dispatch(signInRequest(data.email, data.password));
        }
    }

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <InputComponent
                        name="email"
                        type="email"
                        label="email"
                        placeholder="SEU E-MAIL"
                        error="dsada"
                    />
                    <InputComponent
                        name="password"
                        type="password"
                        label="SUA SENHA"
                    />
                    <ButtonSignIn>
                        <button type="submit">Entrar no sistema</button>
                    </ButtonSignIn>
                </Form>
            </Content>
        </Container>
    );
}
