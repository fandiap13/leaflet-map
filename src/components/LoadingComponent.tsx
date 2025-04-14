import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'

const LoadingComponent = () => {
    return (
        <div className={`w-full h-full flex items-center justify-center my-3`}>
            <FaCircleNotch className="h-14 w-14 animate-spin text-primary/80 dark:text-white" />
        </div>
    )
}

export default LoadingComponent