import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { FaUser, FaClock } from "react-icons/fa";
const Details = () => {
  const { id } = useParams();
  const { blogData, getSingleBlog } = useContext(StoreContext);

  const [singleBlog, setSingleBlog] = useState(null);

  useEffect(() => {
    const blog = getSingleBlog(id);
    setSingleBlog(blog);
  }, [id, getSingleBlog]);

  if (!singleBlog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  const { image, title, author, published_date, reading_time, content } =
    singleBlog;

  // Get the latest 4 blogs for the sidebar
  const latestBlogs = blogData.slice(0, 4);
  const popularBlogs = blogData.slice(10, 14);

  return (
    <div className="flex justify-center p-6">
      <div className="w-4/5 flex">
        <div className="w-3/4 pr-8">
          <img className="w-full h-auto mb-6 rounded" src={image} alt={title} />
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-700 mb-2 flex items-center gap-4">
            <FaUser /> {author} | {published_date}
          </p>
          <p className="text-gray-700 mb-4 flex items-center gap-3">
            {" "}
            <FaClock />
            {reading_time}
          </p>
          <p className="text-gray-800 leading-relaxed">
            {content}
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus temporibus voluptates ratione repellat doloribus ea
              assumenda culpa est sed et iusto veritatis, dolores hic
              repudiandae numquam id accusamus nemo quaerat. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tenetur atque rem minima
              sunt a illum consequatur quae delectus ab, temporibus sequi in?
              Deserunt expedita laboriosam voluptatum eius sed autem culpa.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur id accusantium sapiente unde odio? Eaque, inventore!
              Suscipit quam magnam explicabo velit, minus voluptates, cupiditate
              cumque aperiam quod, saepe libero quia?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus temporibus voluptates ratione repellat doloribus ea
              assumenda culpa est sed et iusto veritatis, dolores hic
              repudiandae numquam id accusamus nemo quaerat. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consequuntur hic quidem
              autem? Obcaecati doloremque necessitatibus esse provident eius
              sunt ipsum, iusto autem, non neque porro delectus omnis! Culpa,
              reiciendis dolor. Quas perspiciatis maiores velit. Error nemo
              culpa qui veniam fuga unde, ducimus impedit. At expedita vitae
              fugiat nesciunt modi nemo quasi quae fugit quod qui! Nulla
              voluptatibus expedita quia laudantium.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus temporibus voluptates ratione repellat doloribus ea
              assumenda culpa est sed et iusto veritatis, dolores hic
              repudiandae numquam id accusamus nemo quaerat. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Quam sed ut maxime? Dolore
              aliquam non earum esse, placeat voluptatibus. Adipisci, hic!
              Similique sunt tempore amet animi accusamus quaerat nihil aliquam!
              Rem officia, perspiciatis quibusdam in hic veniam sint magni
              molestiae facilis consequatur ex distinctio amet qui accusamus
              consectetur ducimus expedita est laboriosam porro voluptatum
              laudantium doloremque deleniti earum dolorum. Beatae.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus temporibus voluptates ratione repellat doloribus ea
              assumenda culpa est sed et iusto veritatis, dolores hic
              repudiandae numquam id accusamus nemo quaerat.
            </p>
          </p>
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-lg font-semibold mb-4">Latest Blogs</h2>
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
          <h2 className="text-lg font-semibold my-4">Popular Blogs</h2>
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
    </div>
  );
};

export default Details;
