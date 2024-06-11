'use client'

import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/modules/ui/components/form'
import { Input } from '@/modules/ui/components/input'

export default function NameInputField() {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name='name'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              endAdornment={
                <span className='flex items-center gap-2'>
                  <span>.eth</span>
                </span>
              }
              {...field}
              disabled
            />
          </FormControl>
          <FormDescription>
            <code>{field.value}.eth is your name</code>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
