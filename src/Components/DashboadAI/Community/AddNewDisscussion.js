import React from "react";
import Sidenav from "../../Sidenav";

const AddNewDisscussion = () => {
  return (
    <>
      <section id="AddNewDiscussion" className="d-flex align-items-center ">
        <div className="container-fluid  ">
          <Sidenav />

          <div className="row  offset-2 mt-5 ">
            <div className="col-10  mx-auto  ">
              <div className="row  ">
                <div className="  d-flex flex-column  ">
                  <div className=" d-flex flex-row">
                    <p className="h1 backArrow"> &#8249;</p>
                    <p className="h4 offset-4"> New Discussion </p>
                  </div>
                  <input
                    className="title  my-3"
                    placeholder="Enter Title"
                    type="text"
                  />

                  <select
                    class="select"
                    style={{ height: "5vh", width: "60vw" }}
                    id="Language"
                  >
                    <option value="" disabled selected></option>
                    <option value="BAI">
                      Basics of Artificial Intelligence
                    </option>
                    <option value="STAT">Statistics</option>
                    <option value="Python">Python</option>
                    <option value="DS">Data Science</option>
                    <option value="NLP">Natural Language Processing</option>
                  </select>
                  <textarea
                    className="description my-3"
                    placeholder="Description"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddNewDisscussion;
