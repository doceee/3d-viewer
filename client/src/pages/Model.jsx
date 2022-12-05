import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StlViewer } from "react-stl-viewer";
import { Link } from "react-router-dom";

const Model = () => {
    let { id } = useParams();
    const [url, setUrl] = useState("");
    // let url =
    // "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl";
    const style = {
        margin: "auto",
        width: "60vw",
        height: "500px"
    };

    useEffect(() => {
        const fetchModel = async (id) => {
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/api/models/${id}`
                );

                setUrl(`http://localhost:3000/${data}.stl`);
            } catch (error) {
                console.error(error);
            }
        };

        fetchModel(id);
    });

    return (
        <div className="w-full h-full flex flex-col">
            <Link className="text-center" to="/">
                Go back
            </Link>
            <h2 className="w-full text-center font-semibold my-[8px]">
                Model ID: {id}
            </h2>
            <StlViewer style={style} orbitControls shadows url={url} />
        </div>
    );
};

export default Model;
