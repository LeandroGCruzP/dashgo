import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="16px" textAlign="right">
          <Text>Leandro Cruz</Text>
          <Text color="gray.300" fontSize="small">
            leandro.programmer@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leandro Cruz"
        src="https://avatars.githubusercontent.com/u/59587859?v=4"
      />
    </Flex>
  )
}
