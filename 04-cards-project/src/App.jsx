import React from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const jobOpenings = [
    {
      logo: "https://logo.clearbit.com/google.com",
      company: "Google",
      date_posted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$85/hr",
      location: "Mountain View, CA, USA",
    },
    {
      logo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      date_posted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$120/hr",
      location: "Menlo Park, CA, USA",
    },
    {
      logo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      date_posted: "3 days ago",
      post: "Data Analyst",
      tag1: "Part-time",
      tag2: "Junior-level",
      pay: "$55/hr",
      location: "Seattle, WA, USA",
    },
    {
      logo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      date_posted: "5 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$95/hr",
      location: "Cupertino, CA, USA",
    },
    {
      logo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      date_posted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Contract",
      tag2: "Senior-level",
      pay: "$110/hr",
      location: "Los Gatos, CA, USA",
    },
    {
      logo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      date_posted: "10 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$105/hr",
      location: "Redmond, WA, USA",
    },
    {
      logo: "https://logo.clearbit.com/openai.com",
      company: "OpenAI",
      date_posted: "4 days ago",
      post: "Research Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$115/hr",
      location: "San Francisco, CA, USA",
    },
    {
      logo: "https://logo.clearbit.com/tesla.com",
      company: "Tesla",
      date_posted: "6 days ago",
      post: "Autopilot Software Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$98/hr",
      location: "Palo Alto, CA, USA",
    },
    {
      logo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      date_posted: "3 weeks ago",
      post: "AI Systems Engineer",
      tag1: "Contract",
      tag2: "Mid-level",
      pay: "$100/hr",
      location: "Santa Clara, CA, USA",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf-FCcLskHC_f-n-bfYnL6lRx41LUBkOiJw&s",
      company: "Adobe",
      date_posted: "1 week ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: "$80/hr",
      location: "San Jose, CA, USA",
    },
  ];

  // console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        // console.log(idx);

        return (
          <div key={idx}>
            <Card
              logo={elem.logo}
              companyName={elem.company}
              date={elem.date_posted}
              position={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
