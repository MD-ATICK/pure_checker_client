import React from 'react'
interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}
function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) {
    return (
        <div className=' w-[400px] bg-white text-black rounded-xl font-medium text-center'>
            <h1>Auth</h1>
        </div>
    )
}

export default CardWrapper
