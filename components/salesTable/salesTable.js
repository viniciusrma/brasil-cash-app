import { useState, useEffect } from 'react'
import { SalesTableWrapper } from './style'

function SalesTable() {
  const [isLoading, setIsLoading] = useState(true)
  const [tableData, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://bcpag-test-mock.azurewebsites.net/api/brands',
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'x-functions-key':
              '6Lap4DX36mVCdSMTRxpIMAvNzwMRIXrq1iW2CMO2gUzf8vzvvJEJaA=='
          }
        }
      )
      const data = await response.json()
      console.log(data)
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <h2>Loading data...</h2>
  }

  return (
    <SalesTableWrapper>
      <h2>Data loaded</h2>
    </SalesTableWrapper>
  )
}

export default SalesTable
