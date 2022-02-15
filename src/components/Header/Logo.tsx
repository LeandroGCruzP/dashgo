import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="256px"
    >
      dashgo
      <Text as="span" ml="4px" color="pink.500">
        .
      </Text>
    </Text>
  )
}
