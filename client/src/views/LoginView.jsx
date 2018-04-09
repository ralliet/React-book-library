import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Semantic UI imports
import { Button,Icon, Checkbox, Form, Grid, Header as HeaderTitle } from 'semantic-ui-react'


class LoginView extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <HeaderTitle as='h1'>Login</HeaderTitle>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder='Password' type='password' />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions'/>
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                        <Button as={ Link } to='/' icon labelPosition='right'>
                            Back to homePage
                            <Icon name='left arrow' />
                        </Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginView;