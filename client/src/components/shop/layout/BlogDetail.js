// src/components/BlogDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
    const { id } = useParams(); // Lấy ID bài viết từ URL
    const [post, setPost] = useState(null); // Trạng thái để lưu trữ chi tiết bài viết
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Trạng thái lỗi

    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
                // Gọi API để lấy chi tiết bài viết
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                setPost(response.data); // Cập nhật trạng thái với dữ liệu bài viết
            } catch (err) {
                setError("Failed to load the blog post.");
                console.error(err);
            } finally {
                setLoading(false); // Kết thúc trạng thái tải
            }
        };

        fetchPostDetail();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogDetail;
