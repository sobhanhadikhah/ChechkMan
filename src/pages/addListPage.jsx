import React from 'react'
import { ListTask, NavigitionBottem, InputToDo } from "../components";
const AddListPage = () => {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto  ' >
                <div className='mx-3 ' >
                    {/* adding prosecering */}
                    <div className='grid grid-cols-1 md:grid-cols-2' >
                        <InputToDo />
                        {/* to do listing here */}
                        <ListTask />
                    </div>
                </div>
                {/* navigition bottome is here */}
                <div className='block lg:hidden' >
                    <NavigitionBottem />
                </div>
            </div>
        </div>
    )
}

export default AddListPage