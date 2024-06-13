import React, { useState } from "react";
import "./Styl.css";



const Data = [
  {
    id: 1,
    title: "What is QRapid?",
    desc: "QRapid is an innovative digital menu and ordering platform designed toenhance the dining experience for both customers and restaurants. It allows customers to scanQR codes to access digital menus, place orders, and get rewards seamlessly",
  },
  {
    id: 2,
    title: "How does QRapid benefit my restauran",
    desc: "QRapid streamlines the ordering process,reduces wait times, and minimizes errors in order taking. It also helps in managing menus &loyalty programs, providing valuable customer insights, and improving overall customersatisfaction.",
  },
  {
    id: 3,
    title: "How do I set up QRapid in my restaurant?",
    desc: "Setting up QRapid is straightforward. You willreceive a QRapid account, access to the dashboard, and QR codes to place on your tables. Oursupport team will assist you with the setup and integration process",
  },
  {
    id: 4,
    title: "What equipment do I need to use QRapid?",
    desc: "At a minimum, you need a PC or tablet withinternet access and a printer for KOT (Kitchen Order Tickets)",
  },
  {
    id: 5,
    title: " Can QRapid integrate with my existing POS system?",
    desc: "es, QRapid can be integrated withmost POS systems. Our technical team will work with you to ensure smooth integration and datasynchronization.",
  },
  {
    id: 6,
    title: " How are orders placed through QRapid delivered to the kitchen?",
    desc: "Orders placed viaQRapid are printed automatically on a KOT printer. The process can be customized based onyour restaurant’s setup.",
  },
  {
    id: 7,
    title: " How do I handle traditional orders alongside QRapid orders?",
    desc: "For traditional orders, thecashier can manually enter the orders into the QRapid system to maintain a unified ordermanagement process. This ensures all orders are tracked and billed accurately",
  },
  {
    id: 8,
    title: " How does the billing process work?",
    desc: "Once the customer finishes their meal, the cashier canclick on the ‘Bill’ button in the QRapid dashboard. The final bill will be printed automatically,streamlining the checkout process in one click.",
  },
  {
    id: 9,
    title: " How do customers earn and redeem loyalty points?",
    desc: "Customers earn points automaticallywhen they place orders through QRapid. These points can be redeemed for discounts or specialoffers on future visits. The loyalty program is managed through the QRapid dashboard",
  },
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
            <div
              className="faq-question"
              onClick={() => toggleQuestion(item.id)}
            >
              <div className="faq-question-title">{item.title}</div>
              <img
                className="faq-toggle-icon"
                src="../../public/Im/plus.png"
                alt="Toggle"
              />
            </div>
            {openQuestions.includes(item.id) && (
              <div className="faq-answer">{item.desc}</div>
            )}
            <hr className="faq-divider" />
          </div>
        ))}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 20px",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            {" "}
            Still have questions?
          </div>
          <p style={{ textAlign: "center" }}>
            If you cannot find the answer to your question in our FAQ, you can
            always contact us. We will answer shortly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
