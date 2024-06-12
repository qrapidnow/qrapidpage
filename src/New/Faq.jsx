import React, { useState } from 'react';
import './Styl.css';

const Data = [
  { id: 1, title: 'What is QRapid?', desc: 'QRapid is a digital solution...' },
  { id: 2, title: 'How does it work?', desc: 'QRapid works by...' },
  { id: 3, title: 'How does it work?', desc: 'QRapid works by...' },
  { id: 4, title: 'How does it work?', desc: 'QRapid works by...' },
  // Add more items as needed
];

const Faq = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (id) => {
    setOpenQuestions((prevOpenQuestions) => {
      if (prevOpenQuestions.includes(id)) {
        return prevOpenQuestions.filter((qid) => qid !== id);
      } else {
        return [...prevOpenQuestions, id];
      }
    });
  };

  return (
    <div className="faq-container">
      <div className="faq-title-container">
        <h1 className="faq-title">FAQs</h1>
      </div>
      <div className="faq-items-container">
        {Data.map((item) => (
          <div className="faq-item" key={item.id}>
            <div className="faq-question" onClick={() => toggleQuestion(item.id)}>
              <div className="faq-question-title">{item.title}</div>
              <img className="faq-toggle-icon" src="./img/aa.png" alt="Toggle" />
            </div>
            {openQuestions.includes(item.id) && (
              <div className="faq-answer">{item.desc}</div>
            )}
            <hr className="faq-divider" />
          </div>
        ))}
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{display:"flex",justifyContent:"center",padding:"10px 20px",fontSize:"40px",fontWeight:"600"}}> Still have questions?</div>
        <p style={{textAlign:"center"}}>If you cannot find the answer to your question in our FAQ, you can always contact us.
        We will answer shortly!</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
