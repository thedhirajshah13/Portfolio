import React, { useState } from "react";
import { SkillsSectionData } from "../utils/SkillsSection";
import "./skills.css";

const Skills = () => {
  const [page, setpage] = useState(1);
  const handlePlus = () => setpage(page + 1);
  const handleMinus = () => setpage(page - 1);
  const handlePage = (selectedPage) => setpage(selectedPage);
  return (
    <>
      <div>
        <div className="skillsSection">
          {SkillsSectionData.slice(page * 2 - 2, page * 2).map((data, id) => (
            <div className="skillsItem" key={id}>
              <div className="circle">
                <img src={data.img} alt="skillsimg" className="skillsimg" />
              </div>

              <h2>{data.name}</h2>
            </div>
          ))}
        </div>
        {SkillsSectionData.length > 0 ? (
          <div className="pagination">
            {page <= 1 ? "" : <span onClick={handleMinus}>-</span>}

            {[...Array(Math.floor(SkillsSectionData.length / 2))].map(
              (_, selectedPage) => (
                <span
                  onClick={() => handlePage(selectedPage + 1)}
                  style={{
                    backgroundColor: page === selectedPage + 1 ? "#05386B" : "",
                  }}
                >
                  {selectedPage + 1}
                </span>
              )
            )}
            {page > 5 ? "" : <span onClick={handlePlus}>+</span>}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Skills;
