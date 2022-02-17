import { Text, TextProps } from '@chakra-ui/react'

interface LogoProps extends TextProps {}

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="256px"
      {...rest}
    >
      dashgo
      <Text as="span" ml="4px" color="pink.500">
        .
      </Text>
    </Text>
  )
}
