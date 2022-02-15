import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Link from 'next/link'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="24px" maxWidth="1480px" mx="auto" px="24px">
        <Sidebar />

        <Box flex="1" borderRadius="8px" bg="gray.800" p="32px">
          <Flex mb="32px" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20px" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['16px', '16px', '24px']} color="gray.300" width="32px">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th width="32px"></Th>}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={['16px', '16px', '24px']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leandro Cruz</Text>
                    <Text fontSize="sm" color="gray.300">
                      leandro.programmer@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>15 de Fevereiro, 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16px" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['16px', '16px', '24px']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leandro Cruz</Text>
                    <Text fontSize="sm" color="gray.300">
                      leandro.programmer@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>15 de Fevereiro, 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16px" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['16px', '16px', '24px']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leandro Cruz</Text>
                    <Text fontSize="sm" color="gray.300">
                      leandro.programmer@hotmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>15 de Fevereiro, 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16px" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
