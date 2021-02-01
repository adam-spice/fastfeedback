import EmptyState from '@/components/EmptyState';
import Logo from '@/components/icons/Logo';
import { useAuth } from '@/lib/auth';
import { Button, Code, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      {auth.user ? (
        <>
          <EmptyState />
          <Button mt={4} onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signInWithGitHub()}>
          Sign In
        </Button>
      )}

      <footer></footer>
    </Flex>
  );
}
