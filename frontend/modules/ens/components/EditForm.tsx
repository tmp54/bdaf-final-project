import AddressInputField from './fields/AddressInputField'
import NameInputField from './fields/NameInputField'
import TextInputField from './fields/TextInputField'

interface EditFormProps {
  readonly?: boolean
}

export default function EditForm({ readonly }: EditFormProps) {
  return (
    <div className='grid gap-4'>
      <NameInputField />
      <AddressInputField />
      <TextInputField readonly={readonly} />
    </div>
  )
}
