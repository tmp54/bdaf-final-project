'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/modules/ui/components/button'
import { Form } from '@/modules/ui/components/form'
import { CircleAlertIcon, InfoIcon } from 'lucide-react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/modules/ui/components/alert'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/modules/ui/components/card'
import EditForm from './EditForm'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import {
  useWritePublicResolverSetAddr,
  useWritePublicResolverSetName,
  useWritePublicResolverSetText,
  useWriteReverseRegistrarClaimForAddr,
} from '@/modules/wagmi/generated'
import { getDeployments } from '@/ens-deployments'
import { nodeHash } from 'common'

const editSchema = z.object({
  name: z.string(),
  address: z.string(),
  text: z.array(z.object({ key: z.string(), value: z.string() })),
})

type EditSchema = z.infer<typeof editSchema>

interface EditRecordsCardProps {
  initialValues: Partial<EditSchema>
  readonly?: boolean
  className?: string
}

export default function EditRecordsCard({
  initialValues,
  readonly,
  className,
}: EditRecordsCardProps) {
  const { address } = useAccount()

  const form = useForm<EditSchema>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      ...initialValues,
    },
  })

  useEffect(() => {
    if (!address) {
      form.reset()
    }
  }, [address, form])

  const { chain } = useAccount()
  const { publicResolver, reverseRegistrar } = getDeployments(chain?.id)
  const { writeContractAsync: claimForAddr } =
    useWriteReverseRegistrarClaimForAddr()
  const { writeContractAsync: setAddr } = useWritePublicResolverSetAddr()
  const { writeContractAsync: setName } = useWritePublicResolverSetName()
  const { writeContractAsync: setText } = useWritePublicResolverSetText()

  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  async function onSubmit(values: EditSchema) {
    console.log(values)
    setStatus('submitting')
    try {
      await claimForAddr({
        address: reverseRegistrar,
        args: [address!, address!, publicResolver],
        chainId: chain!.id,
      })

      const node = nodeHash(`${values.name}.eth`)

      await Promise.all([
        setAddr({
          address: publicResolver,
          args: [node, address!],
          chainId: chain!.id,
        }),
        setName({
          address: publicResolver,
          args: [node, values.name],
          chainId: chain!.id,
        }),
        ...values.text.map(({ key, value }) => {
          setText({
            address: publicResolver,
            args: [node, key, value],
            chainId: chain!.id,
          })
        }),
      ])

      setStatus('idle')
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  const canSubmit = status !== 'submitting' && form.formState.isValid

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className={className}>
          <CardHeader>
            <CardTitle>Edit Records of {initialValues.name}.eth</CardTitle>
          </CardHeader>
          <CardContent>
            {address && <EditForm readonly={readonly} />}

            {status === 'error' && (
              <Alert variant='destructive' className='-mb-4 mt-2'>
                <CircleAlertIcon className='h-4 w-4' />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong, please try again later.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          {address && !readonly && (
            <CardFooter>
              <Button className='w-full' disabled={!canSubmit}>
                Submit
              </Button>
            </CardFooter>
          )}
        </Card>
      </form>
    </Form>
  )
}
