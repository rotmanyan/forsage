import React from 'react';
import {StyledForm, Content, Tabs, Tab} from './styles'

const Form = ({ id, children, submitHandler, title, contentProps, className }) => (
    <StyledForm id={id} onSubmit={submitHandler} className={className}>
      <Tabs>
        <Tab>Testing pool</Tab>
        <Tab>POOL 1</Tab>
        <Tab>POOL 2</Tab>
        <Tab>POOL 3</Tab>
        <Tab>POOL 4</Tab>
        <Tab>POOL 5</Tab>
        <Tab>POOL 6</Tab>
      </Tabs>
        <Content {...contentProps}>
            { children }
        </Content>
    </StyledForm>
);

export default Form;