import React from 'react'
import SimpleCard from '../../View/SimpleCard'
import ModernCard from '../../View/ModernCard'
import ArtCard from '../../View/ArtCard'
export default function Preview({
    data,
    url
}) {
    function showCard(id) {
        switch (id) {
            case 0:
                return <SimpleCard card={data} url={url} />
            case 1:
                return <ModernCard card={data} url={url} view={true} />
            case 2:
                return <ArtCard card={data} url={url} />
        }
    }
    return (
        <div
        className='h-full w-full'
        >
            {showCard(data?.template)}
        </div>
    )
}
