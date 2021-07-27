import { GetStaticProps, NextPage } from 'next';

import SubscribeButton from '../components/SubscribeButton';

import { stripe } from '../services/stripe';

import { Container, Content } from '../styles/pages/Home.styles';

interface IHome {
  product: {
    priceId: string;
    amount: number;
  };
}

const Home: NextPage<IHome> = ({ product }) => {
  return (
    <Container>
      <Content>
        <span>👏🏻 Hey, Welcome</span>
        <h1>
          News about the <span>React</span> world.
        </h1>
        <p>
          Get access to all the publications <br />
          <span>for {product?.amount} month</span>
        </p>

        <SubscribeButton priceId={product.priceId} />
      </Content>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JHwApLh6DET7sOGR77FNlEK');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};
