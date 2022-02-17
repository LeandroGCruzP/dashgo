import Link from 'next/link'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Logo } from '../components/Header/Logo'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema),
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bg="gray.800"
        p="32px"
        borderRadius="8px"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Flex mb="24px" align="center" justify="center">
          <Logo align="center" />
        </Flex>

        <Stack spacing="16px">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Link href="/dashboard" passHref>
          <Button
            type="submit"
            mt="24px"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
