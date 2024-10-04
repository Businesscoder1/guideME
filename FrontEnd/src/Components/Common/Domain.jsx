// // DomainPage.jsx
import React, { useState, useEffect } from 'react';

const DomainPage = () => {
  const [domains, setDomains] = useState([]);        // Domains coming from backend
  const [selectedDomain, setSelectedDomain] = useState(null);  // Selected domain
  const [subdomains, setSubdomains] = useState([]);  // Subdomains of selected domain
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);  // Selected subdomain
  const [topics, setTopics] = useState({ easy: [], moderate: [], hard: [] });  // Topics based on difficulty levels

  // Fetch domains when the page loads
  useEffect(() => {
    fetch('/api/getDomains')   // Adjust to the backend route
      .then(response => response.json())
      .then(data => setDomains(data))
      .catch(err => console.error("Error fetching domains:", err));
  }, []);

  // Fetch subdomains for the selected domain
  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
    fetch(`/api/getSubdomains/${domain.id}`)  // Backend call for subdomains
      .then(response => response.json())
      .then(data => setSubdomains(data))
      .catch(err => console.error("Error fetching subdomains:", err));
  };

  // Fetch topics for the selected subdomain
  const handleSubdomainClick = (subdomain) => {
    setSelectedSubdomain(subdomain);
    fetch(`/api/getTopics/${subdomain.id}`)  // Backend call for topics
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(err => console.error("Error fetching topics:", err));
  };

  return (
    <div className="container bg-gray-900 mx-auto mt-5">
      <h1 className="text-2xl text-white font-bold">Domains</h1>
      {/* Domain List */}
      <div className="mt-4">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="cursor-pointer hover:bg-gray-200 p-2"
            onClick={() => handleDomainClick(domain)}
          >
            {domain.name}
          </div>
        ))}
      </div>

      {/* Subdomain List */}
      {selectedDomain && (
        <>
          <h2 className="text-xl font-semibold mt-5">Subdomains in {selectedDomain.name}</h2>
          <div className="mt-3">
            {subdomains.map((subdomain) => (
              <div
                key={subdomain.id}
                className="cursor-pointer hover:bg-gray-200 p-2"
                onClick={() => handleSubdomainClick(subdomain)}
              >
                {subdomain.name} - {subdomain.description}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Topic List */}
      {selectedSubdomain && (
        <>
          <h3 className="text-lg font-semibold mt-5">Topics in {selectedSubdomain.name}</h3>
          <div className="mt-3">
            <h4 className="font-bold">Easy</h4>
            <ul>
              {topics.easy.map((topic) => (
                <li key={topic.id}>
                  <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.name}</a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold mt-2">Moderate</h4>
            <ul>
              {topics.moderate.map((topic) => (
                <li key={topic.id}>
                  <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.name}</a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold mt-2">Hard</h4>
            <ul>
              {topics.hard.map((topic) => (
                <li key={topic.id}>
                  <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default DomainPage;

// Domain.jsx
// import React, { useState } from 'react';

// // Static data for IT sector domains, subdomains, and their descriptions
// const domainsData = [
//   {
//     id: 1,
//     name: 'Artificial Intelligence',
//     description: 'AI involves building systems that can perform tasks typically requiring human intelligence.',
//     subdomains: [
//       {
//         id: 1,
//         name: 'Machine Learning',
//         description: 'Study of algorithms that improve automatically through experience.',
//         topics: {
//           easy: [
//             { id: 1, name: 'Linear Regression', link: 'https://example.com/linear-regression' },
//             { id: 2, name: 'Logistic Regression', link: 'https://example.com/logistic-regression' }
//           ],
//           moderate: [
//             { id: 3, name: 'Decision Trees', link: 'https://example.com/decision-trees' },
//             { id: 4, name: 'K-Nearest Neighbors', link: 'https://example.com/knn' }
//           ],
//           hard: [
//             { id: 5, name: 'Neural Networks', link: 'https://example.com/neural-networks' },
//             { id: 6, name: 'Deep Learning', link: 'https://example.com/deep-learning' }
//           ]
//         }
//       },
//       {
//         id: 2,
//         name: 'Natural Language Processing',
//         description: 'Field focused on the interaction between computers and humans through natural language.',
//         topics: {
//           easy: [
//             { id: 1, name: 'Text Preprocessing', link: 'https://example.com/text-preprocessing' },
//             { id: 2, name: 'Tokenization', link: 'https://example.com/tokenization' }
//           ],
//           moderate: [
//             { id: 3, name: 'Sentiment Analysis', link: 'https://example.com/sentiment-analysis' },
//             { id: 4, name: 'Named Entity Recognition', link: 'https://example.com/ner' }
//           ],
//           hard: [
//             { id: 5, name: 'Transformers', link: 'https://example.com/transformers' },
//             { id: 6, name: 'BERT', link: 'https://example.com/bert' }
//           ]
//         }
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Web Development',
//     description: 'The process of building websites and web applications for the internet.',
//     subdomains: [
//       {
//         id: 1,
//         name: 'Frontend Development',
//         description: 'Building the visible parts of websites, including structure, layout, and design.',
//         topics: {
//           easy: [
//             { id: 1, name: 'HTML', link: 'https://example.com/html' },
//             { id: 2, name: 'CSS Basics', link: 'https://example.com/css-basics' }
//           ],
//           moderate: [
//             { id: 3, name: 'JavaScript', link: 'https://example.com/javascript' },
//             { id: 4, name: 'ReactJS', link: 'https://example.com/reactjs' }
//           ],
//           hard: [
//             { id: 5, name: 'Advanced React Patterns', link: 'https://example.com/advanced-react' },
//             { id: 6, name: 'Web Performance Optimization', link: 'https://example.com/performance' }
//           ]
//         }
//       },
//       {
//         id: 2,
//         name: 'Backend Development',
//         description: 'Managing server-side logic, databases, and APIs.',
//         topics: {
//           easy: [
//             { id: 1, name: 'Node.js Basics', link: 'https://example.com/node-basics' },
//             { id: 2, name: 'Express Framework', link: 'https://example.com/express' }
//           ],
//           moderate: [
//             { id: 3, name: 'Databases', link: 'https://example.com/databases' },
//             { id: 4, name: 'Authentication', link: 'https://example.com/authentication' }
//           ],
//           hard: [
//             { id: 5, name: 'Microservices Architecture', link: 'https://example.com/microservices' },
//             { id: 6, name: 'GraphQL', link: 'https://example.com/graphql' }
//           ]
//         }
//       }
//     ]
//   }
// ];

// // Domain Component
// const Domain = () => {
//   const [selectedDomain, setSelectedDomain] = useState(null);  // State to track selected domain
//   const [selectedSubdomain, setSelectedSubdomain] = useState(null);  // State to track selected subdomain

//   // Function to handle domain click
//   const handleDomainClick = (domain) => {
//     setSelectedDomain(domain);
//     setSelectedSubdomain(null);  // Reset subdomain when a new domain is selected
//   };

//   // Function to handle subdomain click
//   const handleSubdomainClick = (subdomain) => {
//     setSelectedSubdomain(subdomain);
//   };

//   return (
//     <div className="container h-full  mx-auto mt-5">
//       <h1 className="text-3xl font-bold">Domains</h1>

//       {/* Domain List */}
//       <div className="mt-4">
//         {domainsData.map((domain) => (
//           <div
//             key={domain.id}
//             className="cursor-pointer hover:bg-gray-200 p-2"
//             onClick={() => handleDomainClick(domain)}
//           >
//             <strong>{domain.name}</strong>: {domain.description}
//           </div>
//         ))}
//       </div>

//       {/* Subdomain List */}
//       {selectedDomain && (
//         <>
//           <h2 className="text-xl font-semibold mt-5">Subdomains in {selectedDomain.name}</h2>
//           <div className="mt-3">
//             {selectedDomain.subdomains.map((subdomain) => (
//               <div
//                 key={subdomain.id}
//                 className="cursor-pointer hover:bg-gray-200 p-2"
//                 onClick={() => handleSubdomainClick(subdomain)}
//               >
//                 {subdomain.name} - {subdomain.description}
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* Topic List */}
//       {selectedSubdomain && (
//         <>
//           <h3 className="text-lg font-semibold mt-5">Topics in {selectedSubdomain.name}</h3>
//           <div className="mt-3">
//             <h4 className="font-bold">Easy</h4>
//             <ul>
//               {selectedSubdomain.topics.easy.map((topic) => (
//                 <li key={topic.id}>
//                   <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.name}</a>
//                 </li>
//               ))}
//             </ul>
//             <h4 className="font-bold mt-2">Moderate</h4>
//             <ul>
//               {selectedSubdomain.topics.moderate.map((topic) => (
//                 <li key={topic.id}>
//                   <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.name}</a>
//                 </li>
//               ))}
//             </ul>
//             <h4 className="font-bold mt-2">Hard</h4>
//             <ul>
//               {selectedSubdomain.topics.hard.map((topic) => (
//                 <li key={topic.id}>
//                   <a href={topic.link} target="_blank" rel="noopener noreferrer">{topic.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Domain;
