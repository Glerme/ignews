import React from 'react';
import SingInButton from '../SingInButton';

import { Container, Navigation } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <Navigation>
          <a href="" className="active">
            Home
          </a>
          <a href="">Posts</a>
        </Navigation>

        <SingInButton />
      </div>
    </Container>
  );
};

export { Header };
