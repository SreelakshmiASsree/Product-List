import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListViewPage.css';

const ListViewPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div>
            <nav className="navbar">
                <div className="brandname">BrandName</div>
                <Link to="/login" className="login-button">Login</Link>
            </nav>

            <div className="list-container">
                <h1>View List</h1>
                <div className="post-list">
                    {posts.map(post => (
                        <div key={post.id} className="post-box">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <p><strong>User ID:</strong> {post.userId}</p>
                            <Link to={`/detail/${post.id}`} className="detail-link">View</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListViewPage;
