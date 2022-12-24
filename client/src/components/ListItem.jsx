import { useState } from "react";
import AttachmentIcon from "./AttachmentIcon";

const ListItem = ({ onView, onDelete, name, shortId }) => {
    const [isName, setName] = useState(false);
    return (
        <li className="flex items-center justify-between py-2 px-3 text-sm w-full">
            <div className="flex w-0 flex-1 items-center">
                <AttachmentIcon />
                <span className="ml-2 w-0 flex-1 truncate">
                    {`${isName ? shortId : name}`}
                </span>
            </div>
            <div
                className="ml-[12px] cursor-pointer font-medium text-indigo-600 hover:text-indigo-200"
                onClick={() => setName(!isName)}
            >
                {`${isName ? "Hide url" : "Show url"}`}
            </div>
            {onView && (
                <div
                    className="ml-[12px] cursor-pointer font-medium text-indigo-600 hover:text-indigo-200"
                    onClick={() => onView()}
                >
                    View
                </div>
            )}
            <div className="ml-[12px] cursor-pointer">
                <a
                    href={`${process.env.REACT_APP_API_URL}api/${shortId}`}
                    download
                    className="font-medium text-indigo-600 hover:text-indigo-200"
                >
                    Download
                </a>
            </div>
            <div
                className="ml-[12px] cursor-pointer font-medium text-indigo-600 hover:text-indigo-200"
                onClick={() => onDelete()}
            >
                Delete
            </div>
        </li>
    );
};

export default ListItem;
