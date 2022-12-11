import React from "react";

const ListItem = ({ onView, onDelete, onDownload, name }) => {
    return (
        <div className="w-full w-[600px] flex items-center bg-gray-50 rounded-md my-[3px]">
            <p className="px-[8px] flex-1">{name}</p>
            <button
                onClick={() => onView()}
                type="button"
                className="ml-[1px] py-2 px-4 text-sm font-medium text-white bg-gray-700 border-t border-b border-gray-600 hover:bg-gray-600 focus:z-10 focus:ring-2 focus:ring-blue-700"
            >
                View
            </button>
            <button
                onClick={() => onDownload()}
                type="button"
                className="ml-[1px] py-2 px-4 text-sm font-medium text-white bg-gray-700 border-t border-b border-gray-600 hover:bg-gray-600 focus:z-10 focus:ring-2 focus:ring-blue-700"
            >
                Download
            </button>
            <button
                onClick={() => onDelete()}
                type="button"
                className="ml-[1px] py-2 px-4 text-sm font-medium text-white bg-gray-700 rounded-r-md border border-gray-600 hover:bg-gray-600 focus:z-10 focus:ring-2 focus:ring-blue-700"
            >
                Delete
            </button>
        </div>
    );
};

export default ListItem;
