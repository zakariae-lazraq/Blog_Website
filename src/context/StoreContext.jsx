import { createContext, useEffect, useState } from "react";

import data from "../assets/blogsData.json";

// It's a common practice to use PascalCase for context names
export const StoreContext = createContext(null);

const GlobalState = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [link, setLink] = useState("Home");

  const getSingleBlog = (id) => {
    const singleBlog = blogData.find((blog) => blog.id === parseInt(id));
    return singleBlog;
  };

  const [filteredData, setFilteredData] = useState([]);

  // async function getData() {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`http://localhost:5000/blogs`);
  //     const data = await response.json();
  //     setBlogData(data);
  //   } catch (err) {
  //     console.error("Failed to fetch blogs:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  function getData() {
    setLoading(true);

    if (data && data.length > 0) {
      setBlogData(data);
    } else {
      console.log("data not found");
    }

    setLoading(false); // Always called at the end, no need to duplicate
  }

  useEffect(() => {
    // Fetch the blog data when the component mounts
    getData();
  }, []);

  useEffect(() => {
    // Update filtered data whenever blogData or category changes
    if (blogData.length > 0) {
      setFilteredData(
        category === "all" || !category
          ? blogData
          : blogData.filter(
              (blog) => blog.category.toLowerCase() === category.toLowerCase()
            )
      );
    }
  }, [blogData, category, setFilteredData]);

  const values = {
    blogData,
    loading,
    getData,
    category,
    setCategory,
    filteredData,
    setFilteredData,
    getSingleBlog,
    link,
    setLink,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default GlobalState;
