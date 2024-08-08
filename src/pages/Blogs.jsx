import React, { useContext } from "react";
import Card from "../components/card/Card";
import { StoreContext } from "../context/StoreContext";
import HeroBanner from "../components/heroBanner/HeroBanner";

const Blogs = () => {
  const { blogData, loading, setCategory, filteredData } =
    useContext(StoreContext);

  
    console.log(filteredData);
    

  // Get the latest 4 blogs for the sidebar
  const latestBlogs = blogData.slice(0, 4);
  const popularBlogs = blogData.slice(10, 14);

  return (
    <>
      <HeroBanner />
      <div className="container mx-auto px-4 lg:px-8  flex justify-between flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 lg:max-w-6xl">
          {/* Categories Section */}
          <div className="flex flex-wrap gap-2 mb-6 bg-gray-300 p-4 rounded-md justify-center lg:justify-center">
            {["all", "startups", "security", "ai", "apps", "tech"].map(
              (category) => (
                <div
                  key={category}
                  onClick={() => setCategory(category)}
                  className="cursor-pointer p-2 text-center bg-gray-200 hover:bg-gray-400 rounded transition"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              )
            )}
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {loading ? (
              <h1 className="text-center text-xl col-span-full">Loading ...</h1>
            ) : (
              filteredData.map((blog, index) => (
                <Card key={index} item={blog} />
              ))
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 p-4">
          <h2 className="text-lg font-semibold mb-4 text-orange-400">
            Latest Blogs
          </h2>
          {latestBlogs.length > 0 ? (
            <ul className="space-y-4">
              {latestBlogs.map((blog) => (
                <li key={blog.id} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-sm font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600">
                    {blog.content.slice(0, 100)}...
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No blogs available</p>
          )}

          <h2 className="text-lg font-semibold my-4 text-orange-400">
            Popular Blogs
          </h2>
          {popularBlogs.length > 0 ? (
            <ul className="space-y-4">
              {popularBlogs.map((blog) => (
                <li key={blog.id} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-sm font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600">
                    {blog.content.slice(0, 100)}...
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
