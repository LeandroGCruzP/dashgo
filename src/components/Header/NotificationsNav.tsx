import { HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
    <HStack
      spacing={['24px', '32px']}
      mx={['24px', '32px']}
      pr={['24px', '32px']}
      py="4px"
      color="gray.300"
      borderRightWidth="1px"
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20px" />
      <Icon as={RiUserAddLine} fontSize="20px" />
    </HStack>
  )
}
