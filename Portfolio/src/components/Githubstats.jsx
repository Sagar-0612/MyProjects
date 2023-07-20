import React from "react";
import GitHubCalendar from "react-github-calendar";

const Githubstats = () => {
  return (
    <section className="mt-5 github-calendar">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Github <span className="text-cyan-600">Stats</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Contributions and Stats</p>
      </div>

      <div className="flex justify-center items-center mt-12">
        <GitHubCalendar
          fontSize={16}
          blockSize={15}
          year={2023}
          username="pw11-085"
        />
      </div>
      <div className="flex justify-center items-center mt-3 gap-10 flex-wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: "3rem",
        }}
      >
        <img
          id="github-top-langs"
          align="center"
          src="https://camo.githubusercontent.com/a9977617edc07c36e95c2a88e82f65297bdf43d07b96747f39e88034bb026b46/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d73616761722d303631322673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" 
          alt="pw10-001"
        />
      </div>
      <div id="github-stat" className="flex justify-center mt-3 gap-10 flex-wrap">
        <img
          id="github-stats-card"
          align="center"
          src="https://camo.githubusercontent.com/0f7e54208817d098986673bb76e970733bd29653d6990e2a16e45162106e1fc2/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73616761722d303631322673686f775f69636f6e733d74727565266c6f63616c653d656e"
          alt="pw10-001"
        />
        <img
          id="github-streak-stats"
          align="center"
          src="https://camo.githubusercontent.com/e7c64577ffa7265d3375bc4dfcfa7f7f6e48e383c0cddb2e0ad6f691dc2c658e/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73616761722d3036313226"
           alt="pw10-001"
        />
      </div>
    </section>
  );
};

export default Githubstats;