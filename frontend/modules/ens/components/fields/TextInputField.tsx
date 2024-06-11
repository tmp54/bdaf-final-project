import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { SUPPORTED_TEXT } from '../../const'
import { Fragment } from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/modules/ui/components/form'
import { Button } from '@/modules/ui/components/button'
import { XIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/modules/ui/components/select'
import { Input } from '@/modules/ui/components/input'

interface TextInputFieldProps {
  readonly?: boolean
}

export default function TextInputField({ readonly }: TextInputFieldProps) {
  const form = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'text',
  })

  const watchedTextFields = useWatch({ name: 'text' })
  const selectedTextKeys = new Set(
    watchedTextFields.map(({ key }: { key: string }) => key),
  )

  return (
    <>
      <FormField
        name='text'
        control={form.control}
        render={() => (
          <FormItem>
            <FormLabel>Text</FormLabel>
            {readonly && form.getValues('text').length === 0 && (
              <div className='text-sm text-muted-foreground'>
                No text records available.
              </div>
            )}
            <div className='grid grid-cols-[1fr_2fr_min-content] gap-2'>
              {fields.map((field, index) => {
                const keyFieldName = `text.${index}.key`
                const valueFieldName = `text.${index}.value`

                return (
                  <Fragment key={field.id}>
                    <FormField
                      control={form.control}
                      name={keyFieldName}
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='key' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SUPPORTED_TEXT.map((key) => (
                                <SelectItem
                                  key={key}
                                  value={key}
                                  disabled={
                                    readonly || selectedTextKeys.has(key)
                                  }
                                >
                                  {key}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={valueFieldName}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder='value'
                              {...field}
                              disabled={readonly}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {!readonly && (
                      <Button
                        size='icon'
                        variant='outline'
                        type='button'
                        disabled={(watchedTextFields || []).length == 0}
                        onClick={() => remove(index)}
                      >
                        <XIcon className='h-4 w-4' />
                      </Button>
                    )}
                  </Fragment>
                )
              })}
              {!readonly && (
                <Button
                  variant='outline'
                  size='sm'
                  disabled={
                    (watchedTextFields || []).some(
                      (field: any) => !field.key || !field.value,
                    ) || watchedTextFields.length === SUPPORTED_TEXT.length
                  }
                  onClick={() => append({})}
                  className='max-w-min'
                >
                  Add Text
                </Button>
              )}
            </div>
          </FormItem>
        )}
      />
    </>
  )
}
