import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Semantic UI imports
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'
import { Header as HeaderTitle } from 'semantic-ui-react'


class SignUpView extends React.Component {
    render() {
        /* let {data} = this.props;
        if (data.loading) 
            return (
                <Grid container><CircularProgress/></Grid>
            ); */
        
        return (
            <div>
                <Header/>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <HeaderTitle as='h1'>Sign up</HeaderTitle>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' type='email' required />
                            </Form.Field>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Name' type='text' required />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder='Password' type='password' required />
                            </Form.Field>
                            <Form.Field>
                                <label>Repeat Password</label>
                                <input placeholder='Password' type='password' required />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions'/>
                            </Form.Field>
                            <Button type='submit'>Register</Button>
                        </Form>
                        <Link to='/'>Back to homePage</Link>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

//HomeView = graphql(getAllbooks)(HomeView)

export default SignUpView