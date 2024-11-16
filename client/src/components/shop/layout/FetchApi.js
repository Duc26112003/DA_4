import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/blog`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];  // Trả về mảng rỗng nếu có lỗi
  }
};