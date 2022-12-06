import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StlViewer } from "react-stl-viewer";
import { Link } from "react-router-dom";

const Model = () => {
    let { id } = useParams();
    const [url, setUrl] = useState("");

    const style = {
        margin: "auto",
        width: "100%",
        height: "100%",
        maxHeight: "500px"
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
            <Link className="text-left" to="/">
                Go back
            </Link>
            <StlViewer style={style} orbitControls shadows url={url} />
        </div>
    );
};

export default Model;
