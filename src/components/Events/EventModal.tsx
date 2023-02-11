import { EventType } from '@/types/event'
import { CloseIcon } from '../Icons'
import DisplayNameInfo from './Fields/DisplayName'
import EventTimeInfo from './EventTimeInfo'
import PrinceInfo from './PrinceInfo'
import NotesField from './Fields/NotesField'

type Props = {
  event: EventType
  onClose: () => void
  onEdit: (event: EventType) => void
}
export default function EventModal ({ event, onClose, onEdit }: Props) {
  const { fullName, date, duration, price, deposit, notes } = event
  const handleNameChange = (fullName: string) => {
    onEdit({ ...event, fullName })
  }

  const handleDateChange = (date: string) => {
    onEdit({ ...event, date })
  }

  const handlePriceChange = (deposit: number) => {
    onEdit({ ...event, deposit })
  }

  const handleNotesChange = (value: string) => {
    onEdit({ ...event, notes: value })
  }

  return (
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-10 bg-white opacity-50' onClick={() => onClose()}>
      </div>
      <div className='fixed z-20 max-w-lg p-4 mx-auto bg-gray-700 rounded-lg shadow-md left-4 right-4 top-1/3 shadow-gray-400/40'>
        <button className='absolute p-2 text-white bg-gray-500 rounded-full -right-1 -top-1' onClick={() => onClose()}><CloseIcon className='w-4 h-4' /></button>
        <DisplayNameInfo name={fullName} onChange={handleNameChange} />
        <EventTimeInfo date={date} duration={duration} onDateChange={handleDateChange} />

        <div className='my-4'>
          <PrinceInfo price={price} deposit={deposit} onChange={handlePriceChange} />
        </div>

        <div className='my-4'>
          <NotesField value={String(notes)} onChange={handleNotesChange} />
        </div>
      </div>
    </>
  )
}
