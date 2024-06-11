import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function useSyncSearchParams(
  key: string,
  value?: string | null,
) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (value?.length) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    window.history.pushState(null, '', `?${params.toString()}`)
  }, [key, value, searchParams])
}
