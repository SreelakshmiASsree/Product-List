import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailViewPage.css'; // Add your CSS file for styling

const DetailViewPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default DetailViewPage;
