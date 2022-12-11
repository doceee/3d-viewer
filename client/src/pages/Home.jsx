import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import ListItem from "../components/ListItem";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileId, setFileId] = useState("");

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedFile(selectedFile);
    };

    const onUploadFile = async () => {
        console.log(fileId);
        const formData = new FormData();
        const [name, extension] = selectedFile.name.split(".");
        formData.append("file", selectedFile);
        formData.append("name", name);
        formData.append("extension", extension);

        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/models",
                formData
            );
            setFileId(data._id);
        } catch (error) {
            setFileId("");
            console.error(error);
        }
    };

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
                    <ListItem
                        onDelete={() => {}}
                        onView={() => {}}
                        onDownload={() => {}}
                    />
                    <ListItem
                        onDelete={() => {}}
                        onView={() => {}}
                        onDownload={() => {}}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
