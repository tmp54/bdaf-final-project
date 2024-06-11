'use client'

import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/modules/ui/components/form'
import { Input } from '@/modules/ui/components/input'

export default function AddressInputField() {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name='address'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <Input {...field} disabled />
          </FormControl>
          <FormDescription>This is your wallet address.</FormDescription>
        </FormItem>
      )}
    />
  )
}
