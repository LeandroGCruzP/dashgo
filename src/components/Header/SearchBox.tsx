import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="16px"
      px="32px"
      ml="24px"
      maxWidth="400px"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="16px"
        mr="16px"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={RiSearchLine} fontSize="20px" />
    </Flex>
  )
}
