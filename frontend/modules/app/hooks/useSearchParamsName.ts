import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { normalize } from 'viem/ens'

export default function useSearchParamsName() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const name = params.get('name')

  const [isNameValid, setIsNameValid] = useState(false)
  const [parsedName, setParsedName] = useState('')

  useEffect(() => {
    try {
      normalize(name || '')
      setIsNameValid(true)
      setParsedName(name!)
    } catch (e) {
      setIsNameValid(false)
      setParsedName('')
    }
  }, [name])

  return { name: name || '', parsedName, isNameValid }
}
