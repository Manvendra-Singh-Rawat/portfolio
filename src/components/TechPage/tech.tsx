import "./tech.css";

import csharpLogo from "../../assets/Csharp.svg";
import cppLogo from "../../assets/cpp.svg";
import postgresLogo from "../../assets/PostgresSQL.svg";
import javaScriptLogo from "../../assets/JavaScript.svg";
import dotNetLogo from "../../assets/NETCore.svg";
import reactLogo from "../../assets/React.svg";
import gitHubLogo from "../../assets/GitHub.svg";
import gitLabLogo from "../../assets/GitLab.svg";
import postmanLogo from "../../assets/Postman.svg";

export default function AboutPage() {
  return (
    <>
      <div className="tech-section">
        <div className="tech-heading"><h1>Technologies I have experience & work with</h1></div>

        <div className="tech-subheading">
          <div className="tech-block-heading">- Languages -</div>

          <div className="tech-holder">

            <div className="tech-used">
              <img src={csharpLogo}></img>
              C#
            </div>
            <div className="tech-used">
              <img src={cppLogo}></img>
              C++
            </div>
            <div className="tech-used">
              <img src={postgresLogo}></img>
              PostgreSQL
            </div>
            <div className="tech-used">
              <img src={javaScriptLogo}></img>
              JavaScript
            </div>
            
          </div>
        </div>

          <div className="tech-subheading">
            <div className="tech-block-heading">- Framework -</div>

            <div className="tech-holder">

              <div className="tech-used">
                <img src={dotNetLogo}></img>
                .NET Core
              </div>
              <div className="tech-used">
                <img src={reactLogo}></img>
                React
              </div>
              
            </div>
          </div>

          <div className="tech-subheading">
            <div className="tech-block-heading">- Tools -</div>

            <div className="tech-holder">

              <div className="tech-used">
                <img src={gitHubLogo}></img>
                Github
              </div>
              <div className="tech-used">
                <img src={gitLabLogo}></img>
                GitLab
              </div>
              <div className="tech-used">
                <img src={postmanLogo}></img>
                Postman
              </div>
              
            </div>
          </div>
        </div>
    </>
  );
}