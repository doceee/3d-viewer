import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { files as fileList } from '../files'
import ListItem from '../components/ListItem'

const Home = () => {
    const navigate = useNavigate()
    const [files, setFiles] = useState(fileList)

    const deleteFile = (id) => {
        const filteredFiles = files.filter((file) => file.id !== id)

        setFiles(filteredFiles)
    }

    return (
        <>
            <div className="flex max-w-2xl m-auto justify-center flex-col items-center p-[20px]">
                <h3 className="p-[8px] text-start text-lg text-white font-bold w-full">
                    3D Models
                </h3>
                {Array.isArray(files) && files.length ? (
                    <ul className="divide-y bg-white divide-gray-200 rounded-md border border-gray-200 w-full">
                        {files.map(({ name, extension, id }) => (
                            <ListItem
                                key={id}
                                name={name}
                                id={id}
                                onDelete={() => deleteFile(id)}
                                onView={
                                    extension === 'stl'
                                        ? () => navigate(`/model/${id}`)
                                        : null
                                }
                            />
                        ))}
                    </ul>
                ) : (
                    <h5 className="text-gray-200">No files found</h5>
                )}
            </div>
        </>
    )
}

export default Home
