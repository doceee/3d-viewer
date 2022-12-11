import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";

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
            <div class="flex justify-center mt-[20px]">
                <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                        An item
                        <div
                            class="inline-flex rounded-md shadow-sm"
                            role="group"
                        >
                            <button
                                type="button"
                                class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                Profile
                            </button>
                            <button
                                type="button"
                                class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                Settings
                            </button>
                            <button
                                type="button"
                                class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                Messages
                            </button>
                        </div>
                    </li>
                    <li class="px-6 py-2 border-b border-gray-200 w-full">
                        A second item
                    </li>
                    <li class="px-6 py-2 border-b border-gray-200 w-full">
                        A third item
                    </li>
                    <li class="px-6 py-2 border-b border-gray-200 w-full">
                        A fourth item
                    </li>
                    <li class="px-6 py-2 w-full rounded-b-lg">
                        And a fifth one
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Home;
