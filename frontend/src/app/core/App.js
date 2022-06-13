import React from "react";
import { Link } from "react-router-dom";
import "../../scss/core/index.scss";

const App = () => {
  const data = [
    {
      id: 4,
      projectName: "eBookopolis",
      projectDiscription:
        "Is an e-commerce website, developed using React.js & Django REST Framework (DRF), PostgreSQL will be used in, highly suitable for a wide variety of niches such as electronics, digital products, watches, laptops, and the like.",
      projectRepo: "",
      projectLive: "/ebookopolis",
    },
    {
      id: 1,
      projectName: "Audio e-Commerce v2.0",
      projectDiscription:
        "Is an e-commerce website, developed using React.js & Django REST Framework (DRF), PostgreSQL will be used in, highly suitable for a wide variety of niches such as electronics, digital products, watches, laptops, and the like.",
      projectRepo: "",
      projectLive: "",
    },
    {
      id: 3,
      projectName: "LinkedIn bot",
      projectDiscription:
        "LinkedIn is a well-known professional social networking platform that hosts more than millions of professional profiles, our current bot version sends connection requests with a custom message. developed by using Python with Selenium.",
      projectRepo: "",
      projectLive: "",
    },
    {
      id: 2,
      projectName: "Bloggers v2.0",
      projectDiscription:
        "Inspiration and Design borrowed from Blogger and Reddit. Attempt to create a mixture of modern, classic, minimal style blog websites. By using HTML, SCSS, JavaScript, PHP, MySQL.",
      projectRepo: "",
      projectLive: "",
    },
  ];
  return (
    <div className="core-body">
      <div className="hero-container">
        <div className="hero">
          <h1>ABHINAY NARAYAN SINGH</h1>
          <h2>Python FullStack Developer with React Js</h2>
        </div>
      </div>

      <div className="main-container">
        <h5>PROJECTS</h5>
        {data.map((n) => (
          <div className="card-container" key={n.id}>
            <h2>{n.projectName}</h2>
            <p>{n.projectDiscription}</p>
            <p>
              <Link to={n.projectLive}>VISIT</Link>
              <Link to={n.projectRepo}>REPOSITORY</Link>
            </p>
          </div>
        ))}
      </div>

      <div className="contact-container">
        <h5>
          contact<span>me</span>
        </h5>
        <p>
          If you're looking for a freelancer to help with your project then
          please get in touch.
        </p>

        <div className="from">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="">Message</label>
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
