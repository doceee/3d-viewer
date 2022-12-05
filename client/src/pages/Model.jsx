import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Model = () => {
    let { id } = useParams();

    useEffect(() => {
        const fetchModel = async (id) => {
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/api/models/${id}`
                );

                return data;
            } catch (error) {
                console.error(error);
            }
        };

        fetchModel(id);
    }, []);

    return <div className="w-full h-full flex">Model: {id}</div>;
};

export default Model;
