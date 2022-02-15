import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

import { NavLink } from './NavLink'

import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="48px" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="#">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="#">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
