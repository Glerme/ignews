import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

import { Container, PostArticle, PostContent } from './post';

interface IPost {
  post: {
    slug: string;
    title: string;
    content: string;
    updated: string;
  };
}

const Post: React.FC<IPost> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <Container>
        <PostArticle>
          <h1>{post.title}</h1>
          <time>{post.updated}</time>
          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostArticle>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  console.log('session', session);

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false,
      },
    };
  }

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response?.data.title),
    content: RichText.asHtml(response.data.text),
    updatedAt: new Date(response?.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  return {
    props: {
      post,
    },
  };
};

export default Post;
