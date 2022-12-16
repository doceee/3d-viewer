import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const Home = () => {
    const fileInput = useRef(null);
    const navigate = useNavigate();
    const [files, setFiles] = useState(null);
    const [initialFetch, setInitialFetch] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedFile(selectedFile);
    };

    const onUploadFile = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/models",
                formData
            );
            setFiles([...files, data]);
            setSelectedFile(null);
            fileInput.current.value = null;
        } catch (error) {
            console.error(error);
        }
    };

    const deleteFile = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/models/${id}`);

            const filteredFiles = files.filter((file) => file._id !== id);

            setFiles(filteredFiles);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/api/models`
                );

                setFiles(data);
                setInitialFetch(true);
            } catch (error) {
                console.error(error);
            }
        };

        if (!initialFetch) {
            fetchFiles();
        }
    });

    return (
        <>
            <div className="bg-white w-full bg-whtie m-auto flex justify-center">
                <div className="px-4 max-w-[900px] w-full flex justify-end">
                    <div className="max-w-[330px] w-full flex py-[6px]">
                        <Button
                            onClick={onUploadFile}
                            text="Submit"
                            disabled={!selectedFile}
                        />
                        <input
                            ref={fileInput}
                            type="file"
                            className="ml-[4px] text-sm text-grey-500  file:py-[2px] file:px-[4px] file:rounded-md file:border-0 file:bg-gray-200 file:text-sm file:font-medium file:text-gray-700 hover:file:cursor-pointer  hover:file:bg-gray-300  file:bg-white"
                            id="file"
                            accept=".stl"
                            onChange={onFileChange}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center mt-[20px]">
                <div className="m-2">
                    {files &&
                        files.map(({ name, extension, _id, slug }) => (
                            <ListItem
                                key={_id}
                                name={name + "." + extension}
                                onDelete={() => deleteFile(_id)}
                                onView={
                                    extension === "stl"
                                        ? () => navigate(`/model/${_id}`)
                                        : null
                                }
                                dlUrl={`/${slug}`}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Home;
