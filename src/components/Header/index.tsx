import ActiveLink from '../ActiveLink';

import SingInButton from '../SingInButton';

import { Container, Navigation } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <Navigation>
          <ActiveLink href="/" activeClassName="active">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" prefetch activeClassName="active">
            <a>Posts</a>
          </ActiveLink>
        </Navigation>

        <SingInButton />
      </div>
    </Container>
  );
};

export { Header };
