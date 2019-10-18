import React from 'react';
import { Router as MyRouter } from '@reach/router';
import RandomPerson from '../modules/RandomPerson';
import Layout from '../components/layout';

const Router = () => {
  return (
    <Layout>
      <MyRouter>
        <RandomPerson path="/app/random-person/:results" />
      </MyRouter>
    </Layout>
  );
};

export default Router;
