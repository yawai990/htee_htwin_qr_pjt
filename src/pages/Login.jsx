import React from 'react';
import HeadingLine from '../components/HeadingLine';

import LoginForm from '../components/LoginForm';
 
const Login = () => {
    return (
        <section className='h-full lg:h-[70vh]'>
            <HeadingLine name={'Login'} />
            <LoginForm />
        </section>
    )
}

export default Login