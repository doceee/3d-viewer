import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileId, setFileId] = useState("");

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedFile(selectedFile);
    };

    const onUploadFile = async () => {
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
            console.error(error);
        }
    };

    return (
        <div className="w-full h-full flex justify-items-center items-center">
            <div className="p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                <div
                    className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
                    style={{ width: "450px" }}
                >
                    <svg
                        className="text-indigo-500 w-24 mx-auto mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                        <div v-if="progress" className="progess-bar">
                            <a
                                className="text-blue-700 cursor-pointer"
                                href={`http://localhost:3000/api/models/${fileId}`}
                                download
                            >
                                Download
                            </a>
                            <br />
                            <Link to={`/${fileId}`}>View file</Link>
                        </div>
                        <p className="text-white">.</p>
                        <label>
                            <input
                                type="file"
                                accept=".stl"
                                onChange={onFileChange}
                                className="text-sm cursor-pointer"
                            />
                        </label>
                        <button
                            onClick={onUploadFile}
                            className="upload-button text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500 disabled:gray-100 disabled:cursor-no-drop"
                            disabled={!selectedFile}
                        >
                            Upload file
                        </button>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                            <div
                                v-if="progress"
                                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
