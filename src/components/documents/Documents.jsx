import React, { useState } from 'react';
import './documents.css';

function Documents() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container">
      <div className="title"><h1>Terms of Use & Privacy Policy</h1></div>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <h2>Terms of Use</h2>
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <h2>Privacy Policy</h2>
        </button>
      </div>
      <div className="content">
        {activeTab === 1 && (
          <div>
            <p><strong>Terms of Use</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Welcome to the "iDo" application! By using this application, you agree to comply with this Terms of Use Agreement. If you do not agree with any of the terms, please discontinue use of the application.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Registration and Account:</p>
            <p>&nbsp;&nbsp;&nbsp;To use the application's features, you are required to create an account. You are responsible for the security of your account and password.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Data Usage:</p>
            <p>&nbsp;&nbsp;&nbsp;You agree to provide accurate and up-to-date personal data during registration. You also agree that we may use your data in accordance with our Privacy Policy.</p>
            <p>&nbsp;</p>
            <p>Intellectual Property:</p>
            <p>&nbsp;&nbsp;&nbsp;All rights to intellectual property associated with the "iDo" application remain with us. You are responsible for adhering to copyright and other rights when using the application.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Prohibitions:</p>
            <p>&nbsp;&nbsp;&nbsp;You agree not to violate laws, upload malicious content, or abuse the application's functionality.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Liability:</p>
            <p>&nbsp;&nbsp;&nbsp;We are not responsible for any losses you may incur as a result of using the application.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Changes and Updates:</p>
            <p>&nbsp;&nbsp;&nbsp;We reserve the right to make changes and updates to the application and the Terms of Use.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;By agreeing to this Terms of Use, you acknowledge that you have read and understood all of its provisions.</p>
            <p>&nbsp;</p>
            <p><em>&nbsp;&nbsp;&nbsp;Effective Date: 16.08.2023</em></p>
            <p>&nbsp;</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <p><strong>Privacy Policy</strong></p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;This Privacy Policy describes how we collect, use, and protect your personal data in the "iDo" application. We are committed to ensuring your privacy and safeguarding your personal information.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Data Collection:</p>
            <p>&nbsp;&nbsp;&nbsp;We may collect information that you provide to us, including your name, email address, password, and other personal data necessary for registration and use of the application.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Data Usage:</p>
            <p>&nbsp;&nbsp;&nbsp;We use your personal data to provide you access to the application's functionality, manage your tasks and goals, and send you notifications and reminders related to your tasks.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Data Protection:</p>
            <p>&nbsp;&nbsp;&nbsp;We take measures to protect your data from unauthorized access, use, or disclosure. Your personal data is stored on secure servers and transmitted through encrypted channels.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Data Sharing:</p>
            <p>&nbsp;&nbsp;&nbsp;We do not sell, rent, or disclose your personal data to third parties without your consent. We may share anonymous and aggregated data for statistical purposes.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Policy Changes:</p>
            <p>&nbsp;&nbsp;&nbsp;We reserve the right to make changes to our Privacy Policy. Changes will be posted on this page.</p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Contact:</p>
            <p>&nbsp;&nbsp;&nbsp;If you have any questions or concerns regarding our Privacy Policy, please contact us at timofii.shkabrov@gmail.com.</p>
            <p>&nbsp;</p>
            <p><em>&nbsp;&nbsp;&nbsp;Effective Date: 16.08.2023</em></p>
            <p>&nbsp;</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Documents;
