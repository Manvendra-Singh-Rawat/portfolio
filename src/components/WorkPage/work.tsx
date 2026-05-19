import "./work.css";

export default function AboutPage() {
  return (
    <>
      <div className="work-section">
        <div className="work-heading"><h1>Have a look at my work</h1></div>

        <div className="work-holder">

          <div className="work-tab">
            <div className="work-info">
              <h2>Self Portfolio</h2>
              <p className="work-summary">
                Short summary of the project goes here.
                Explain what it does and what tech was used
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>HTML 5</span>
                <span>CSS</span>
                <span>VS Code</span>
              </div>
              <div className="work-buttons">
                <button>Demo</button>
                <button>GitHub</button>
              </div>
            </div>
            <div className="work-img">
              <img
                src="https://placehold.co/250x250"
                alt="Project Preview"
              />

              <img
                src="https://placehold.co/250x250"
                alt="Project Preview"
              />
            </div>
          </div>

          <div className="work-tab">
            <div className="work-info">
              <h2>CRM System</h2>
              <p className="work-summary">
                Short summary of the project goes here.
                Explain what it does and what tech was used
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>.NET</span>
                <span>SQL</span>
              </div>
              <div className="work-buttons">
                <button>Demo</button>
                <button>GitHub</button>
              </div>
            </div>
            <div className="work-img">
              <img
                src="https://placehold.co/250x250"
                alt="Project Preview"
              />

              <img
                src="https://placehold.co/250x250"
                alt="Project Preview"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}