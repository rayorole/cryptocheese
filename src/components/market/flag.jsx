import React from 'react';
import { useParams } from "react-router-dom";

export default function Flag() {

    let { id } = useParams();

    return (
        <div>
            Your flag id: {id}
        </div>
    )
}
