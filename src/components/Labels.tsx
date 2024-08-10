'use client'

/* tailwind-include-classes
text-indigo-400
text-gray-400
text-green-400
text-blue-400
text-red-400
text-purple-400
*/

import CalendarContext from "@/context/CalendarContext"
import { Label } from "@/types"
import { useContext } from "react"

const Labels = () => {
    const { labels, setLabels } = useContext(CalendarContext)

    const updateLabel = (label: Label) => {
        setLabels(
            labels.map(lbl => lbl.label === label.label ? label : lbl)
        )
    }

    return (
        <>
            <p className="text-gray-500 font-bold mt-10">Label</p>
           { labels.map(({label: lbl, checked}, idx) => (
                <label key={`${lbl}-${idx}`} className="items-center mt-3 block">
                    <input
                        type="checkbox"
                        checked={checked}
                        className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus-ring-0 cursor-pointer`}
                        onChange={() => updateLabel({label: lbl, checked: !checked})}
                    />
                    <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
                </label>
            )) }
        </>
    )
}

export default Labels
