import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'No mínimo 8 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="24px" maxWidth="1480px" mx="auto" px="24px">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius="8px"
          bg="gray.800"
          p={['24px', '32px']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="24px" borderColor="gray.700" />

          <VStack spacing="32px">
            <SimpleGrid
              minChildWidth="240px"
              spacing={['24px', '32px']}
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
                autoComplete="off"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                autoComplete="off"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={['24px', '32px']}
              w="100%"
            >
              <Input
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                label="Confirmção da senha"
                type="password"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="32px" justify="flex-end">
            <HStack spacing="16px">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
