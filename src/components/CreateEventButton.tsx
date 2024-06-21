import Image from "next/image"

const CreateEventButton = () => {
    return (
        <button className="border p-2 rounded-full flex item-center shadow-md hover:shadow-2xl">
            <Image src="/plus.svg" alt="create_event" width={28} height={28} />
            <span className="pl-3 pr-7">Create</span>
        </button>
    )
}

export default CreateEventButton
