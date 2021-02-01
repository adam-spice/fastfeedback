
import EmptyState from '@/components/EmptyState';
import Logo from '@/components/icons/Logo';
import { useAuth } from '@/lib/auth';
import { Button, Code, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <Button mt={4} size="sm" onClick={() => auth.signInWithGitHub()}>
        Sign In
      </Button>
    );
  }

  return <EmptyState />;

}
