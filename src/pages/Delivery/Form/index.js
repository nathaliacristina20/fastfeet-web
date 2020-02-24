import React, { useRef } from 'react';

import { Form } from '@unform/web';
import { Container } from './styles';
import { Title, Content, Column, Row, FormStyle } from '~/styles/form';

import Input from '~/components/Form/Input';

export default function Delivery() {
    const formRef = useRef(null);

    function handleSubmit() {}
    return (
        <Container>
            <FormStyle>
                <Title>Edição de encomendas</Title>
                <Content>
                    {' '}
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Row>
                            <Column>
                                <Input
                                    name="destinatario"
                                    type="text"
                                    label="Destinatário"
                                    placeholder="SEU E-MAIL"
                                    error="dsada"
                                />
                            </Column>
                            <Column>
                                <Input
                                    name="password"
                                    type="text"
                                    label="Entregador"
                                />
                            </Column>
                        </Row>

                        <Row>
                            <Input
                                name="password"
                                type="text"
                                label="Nome do produto"
                            />
                        </Row>
                    </Form>
                </Content>
            </FormStyle>
        </Container>
    );
}
