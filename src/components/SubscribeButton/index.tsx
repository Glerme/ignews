import { useSession, signIn } from 'next-auth/client';

import { stripe } from '../../services/stripe';
import { ContainerButton } from './styles';

interface ISubscribeButton {
  priceId: string;
}

const SubscribeButton: React.FC<ISubscribeButton> = ({ priceId }) => {
  const [session] = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
      return;
    }
  };

  return (
    <ContainerButton type="button" onClick={() => handleSubscribe()}>
      Subscribe Now!
    </ContainerButton>
  );
};

export default SubscribeButton;
