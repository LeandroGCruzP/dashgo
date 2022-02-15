import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

interface NavSectionProps {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="16px" mt="32px" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
