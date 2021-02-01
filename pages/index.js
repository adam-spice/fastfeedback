import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={() => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => auth.signInWithGitHub()}>Sign In</Button>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
