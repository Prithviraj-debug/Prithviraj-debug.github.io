import React from "react";
import fe from "./fe 1.png";
import ux from "./ux 1.png";
import doc from "./Resume.pdf";
import Button from "./Button";

export default function Skills() {
  // const design = ["UI", "web", "apps"];
  // const tools = ["figma", "adobe XD"];
  // const langs = ["HTML", "CSS", "JS"];
  // const devTools = ["VS code", "codepen", "github", "gitlab", "bootstrap", "bulma", "linux"];

  return (
    <section class="details" id="details">
      <div className="about rounded-t-3xl">
        <h2 className="text-2xl font-semibold">Hi, I am Prithviraj. Nice to meet you.</h2>

        <p>
          Seasoned and independent Front End Developer blending the art of
          design with skill of programming to deliver an immsersive and engaging
          user experience through efficient and responsive website development.
        </p>
      </div>
      <div class="curve2"></div>

      <div className="desc">
        <div className="profile-card bg-blue-gradient rounded-[20px]">
          <img
            src="https://avatars.githubusercontent.com/u/57887221?v=4"
            alt=""
          />
          <div>
            <p>
              an aspiring web developer with a solid foundation in front-end
              technologies and a decent understanding of the MERN stack. I have
              gained proficiency in HTML, CSS, and JavaScript, enabling me to
              create visually appealing and interactive web pages. Additionally,
              I have a decent understanding of the MERN stack, which includes
              MongoDB, Express.js, React.js, and Node.js. This knowledge allows
              me to build dynamic and responsive web applications, handle data
              storage and retrieval with MongoDB, and develop server-side logic
              using Node.js and Express.js.
            </p>
            <a href={doc} download className="button-50">
              Resume`
            </a>
          </div>
        </div>
      </div>

      <div class="skills">
        <div class="designer">
          <img src={ux} alt="" />
          <h1>designer</h1>
          <div class="things">
            <h3>things i design</h3>
            <p>UI, web, apps</p>
          </div>
          <div class="tools">
            <h3>tools i use</h3>
            <ul>
              <li>figma</li>
              <li>adobe XD</li>
            </ul>
          </div>
        </div>
        <div class="developer">
          <img src={fe} alt="" />
          <h1>developer</h1>
          <div class="things">
            <h3>languages i speak</h3>
            <p>HTML, CSS, JS</p>
          </div>
          <div class="tools">
            <h3>dev tools</h3>
            <ul>
              <li>VS code</li>
              <li>codepen</li>
              <li>github</li>
              <li>gitlab</li>
              <li>bootstrap</li>
              <li>tailwindCSS</li>
              <li>linux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
