import { useEffect, useState } from 'react'
import { StlViewer } from 'react-stl-viewer'
import { useParams, useNavigate } from 'react-router-dom'

import Button from '../components/Button'

const Model = () => {
    let { id } = useParams()
    const [url, setUrl] = useState('')
    const navigate = useNavigate()

    const style = {
        margin: 'auto',
        width: '100%',
        height: '100%',
        maxHeight: '500px',
    }

    useEffect(() => {
        if (id) {
            setUrl(`/${id}.stl`)
        }
    }, [id])

    return (
        <>
            <div className="bg-white w-full bg-whtie m-auto flex justify-center">
                <div className="px-4 max-w-[900px] w-full flex justify-start py-[6px]">
                    <Button text="Go back" onClick={() => navigate('/')} />
                </div>
            </div>
            {url && <StlViewer style={style} orbitControls shadows url={url} />}
        </>
    )
}

export default Model
