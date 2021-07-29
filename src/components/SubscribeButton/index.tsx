import { useSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { api } from '../../services/api';

import { getStripeJs } from '../../services/stripe-js';
import { ContainerButton } from './styles';

interface ISubscribeButton {
  priceId: string;
}

const SubscribeButton: React.FC<ISubscribeButton> = ({ priceId }) => {
  const [session] = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ContainerButton type="button" onClick={() => handleSubscribe()}>
      Subscribe Now!
    </ContainerButton>
  );
};

export default SubscribeButton;
