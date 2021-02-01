import { useAuth } from '@/lib/auth';
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import Logo from './icons/Logo';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  console.log('auth', auth.user.photoUrl);
  return (
    <Flex flexDirection="column">
      <Button mt={4} onClick={() => auth.signOut()}>
        Sign Out
      </Button>
      <Flex
        backgroundColor="whiteAlpha.500"
        justifyContent="space-between"
        align-items="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline align="center">
          <Logo color="black" boxSize={8} />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex alignItems="center" justifyContent="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoURL} />
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        <Flex
          maxWidth="800px"
          // alignItems="center"
          // justifyContent="center"
          width="100"
          ml="auto"
          mr="auto"
          direction="column"
          p={8}
        >
          <Breadcrumb>
            <BreadcrumbItem color="gray.700">
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size="xl" as="h2" mb={4}>
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
