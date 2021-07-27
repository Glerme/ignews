import { signIn, signOut, useSession } from 'next-auth/client';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { ButtonContainer } from './styles';

const SingInButton: React.FC = () => {
  const [session] = useSession();

  return session ? (
    <ButtonContainer type="button" onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className="closeIcon" />
    </ButtonContainer>
  ) : (
    <ButtonContainer type="button" onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </ButtonContainer>
  );
};

export default SingInButton;
