// src/components/BlogList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogPosts } from "../services/api"; // nhập hàm fetchBlogPosts từ services/api.js

const BlogList = () => {
    const [posts, setPosts] = useState([]); // lưu trữ các bài viết trong state

    useEffect(() => {
        // gọi API để lấy dữ liệu blog
        const getPosts = async () => {
            try {
                const data = await fetchBlogPosts();
                setPosts(data.slice(0, 5)); // chỉ lấy 5 bài viết đầu tiên
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            }
        };
        getPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p>{post.body.substring(0, 50)}...</p> {/* Hiển thị đoạn trích ngắn */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
