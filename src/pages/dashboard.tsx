import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
// import Chart from 'react-apexcharts'
// Nao deixa ser carregado pelo nextjs e somente pelo browser
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Server Side Rendering desligado
})
// Arrumando problema de xaxis options
import { ApexOptions } from 'apexcharts'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 12, 28, 64, 26, 109],
  },
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="24px" maxWidth="1480px" mx="auto" px="24px">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="16px"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['24px', '32px']} bg="gray.800" borderRadius="8px" pb="16px">
            <Text fontSize="lg" mb="16px">
              Inscritos da semana
            </Text>
            <Chart
              options={options}
              series={series}
              type="area"
              height="160px"
            />
          </Box>

          <Box p={['24px', '32px']} bg="gray.800" borderRadius="8px" pb="16px">
            <Text fontSize="lg" mb="16px">
              Taxa de abertura
            </Text>
            <Chart
              options={options}
              series={series}
              type="area"
              height="160px"
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
