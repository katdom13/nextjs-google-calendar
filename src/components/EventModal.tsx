'use client'

/* tailwind-include-classes
bg-indigo-500
bg-gray-500
bg-green-500
bg-blue-500
bg-red-500
bg-purple-500
*/

import CalendarContext from '@/context/CalendarContext'
import { CalendarEvent } from '@/types'
import { revalidatePath } from 'next/cache'
import { FormEvent, useContext, useState } from 'react'

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple']

type EventFormData = {
    title: string;
    description: string;
}

const EventModal = () => {
    const [selectedLabelClass, setSelectedLabelClass] = useState(labelsClasses[0])
    const { selectedDate, setShowEventModal, dispatchEvents } = useContext(CalendarContext)

    // Parametrize this
    const saveEvent = async (formData: FormData) => {
        const event: CalendarEvent = {
            id: Date.now(),
            title: formData.get('title')?.toString() || '',
            description: formData.get('description')?.toString() || '',
            labelColor: selectedLabelClass,
            date: selectedDate.toISOString(),
        }
        dispatchEvents({ 'type': 'create', payload: event })
        setShowEventModal(false)
    }

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4' action={saveEvent}>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='material-symbols-outlined text-gray-400'>
                        drag_handle
                    </span>
                    <button onClick={() => setShowEventModal(false)}>
                        <span className='material-symbols-outlined text-gray-400'>
                            close
                        </span>
                    </button>
                </header>
                <div className='p-3'>
                    <div className='grid grid-cols-1/5 items-end gap-y-7'>
                        <div></div>
                        <input
                            type='text'
                            name='title'
                            placeholder='Add title'
                            required
                            className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                        />
                        <span className='material-symbols-outlined text-gray-400'>
                            schedule
                        </span>
                        <p>{selectedDate.format('dddd, MMMM DD')}</p>
                        <span className='material-symbols-outlined text-gray-400'>
                            segment
                        </span>
                        <input
                            type='text'
                            name='description'
                            placeholder='Add a description'
                            required
                            className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                        />
                        <span className='material-symbols-outlined text-gray-400'>
                            bookmark_border
                        </span>
                        <div className='flex gap-x-2'>
                            { labelsClasses.map((cls, idx) => (
                                <span
                                    key={`${cls}-${idx}`}
                                    className={`bg-${cls}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                    onClick={() => setSelectedLabelClass(cls)}
                                >
                                    { selectedLabelClass === cls && (
                                        <span className='material-symbols-outlined text-white text-xs'>
                                            check
                                        </span>
                                    ) }
                                </span>
                            )) }
                        </div>
                    </div>
                </div>
                <footer className='flex justify-end border-t p-3 mt-5'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default EventModal
