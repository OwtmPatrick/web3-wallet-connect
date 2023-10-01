import { List, ListItem, Link } from '@chakra-ui/react';
import { routes } from '../../navigation/routes';

export const Navigation = () => (
  <List
    display="flex"
    flexDirection="column"
    alignItems={{ base: 'center', lg: 'flex-start' }}
    gap="12px"
    mt={{ base: '60px', lg: 0 }}
  >
    {routes.map(({ title, href }) => (
      <ListItem key={title} textAlign="center">
        <Link href={href} transition="0.2s" color="gray.100">
          {title}
        </Link>
      </ListItem>
    ))}
  </List>
);