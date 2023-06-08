import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Download = () => {
    let { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const aTag = document.getElementById('aTag')
        aTag.click()
    })

    return (
        <>
            <div className="h-full flex justify-center flex-col items-center">
                <div className="m-2">
                    <h4 className="m-2 font-medium text-lg">
                        Fetching file...
                    </h4>
                    <p
                        className="text-center cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Go back
                    </p>
                    <a
                        href={`${process.env.REACT_APP_API_URL}api/${id}`}
                        id="aTag"
                        download
                        className="hidden"
                    >
                        Download
                    </a>
                </div>
            </div>
        </>
    )
}

export default Download
