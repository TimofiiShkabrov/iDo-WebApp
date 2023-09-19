import React, { useState } from 'react';
import './documents.css'

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: <h2>Privacy Policy</h2>,
            title: <h3>Privacy Policy. Effective Date: 16.08.2023</h3>,
            content:
                    <>
                    <p><span>This Privacy Policy describes how we collect, use, and protect your personal data in the "iDo" application. We are committed to ensuring your privacy and safeguarding your personal information.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Data Collection:</span></p>
                    <p><span>We may collect information that you provide to us, including your name, email address, password, and other personal data necessary for registration and use of the application.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Data Usage:</span></p>
                    <p><span>We use your personal data to provide you access to the application's functionality, manage your tasks and goals, and send you notifications and reminders related to your tasks.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Data Protection:</span></p>
                    <p><span>We take measures to protect your data from unauthorized access, use, or disclosure. Your personal data is stored on secure servers and transmitted through encrypted channels.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Data Sharing:</span></p>
                    <p><span>We do not sell, rent, or disclose your personal data to third parties without your consent. We may share anonymous and aggregated data for statistical purposes.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Policy Changes:</span></p>
                    <p><span>We reserve the right to make changes to our Privacy Policy. Changes will be posted on this page.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Contact:</span></p>
                    <p><span>If you have any questions or concerns regarding our Privacy Policy, please contact us at timofii.shkabrov@gmail.com.</span></p>
                    <p><span>&nbsp;</span></p>
                    </>
        },
        {
            id: 2,
            tabTitle: <h2>Terms of Use</h2>,
            title: <h3>Terms of Use. Effective Date: 16.08.2023</h3>,
            content:
                    <>
                    <p><span>Welcome to the "iDo" application! By using this application, you agree to comply with this Terms of Use Agreement. If you do not agree with any of the terms, please discontinue use of the application.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Registration and Account:</span></p>
                    <p><span>&nbsp;&nbsp; To use the application's features, you are required to create an account. You are responsible for the security of your account and password.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Data Usage:</span></p>
                    <p><span>&nbsp;&nbsp; You agree to provide accurate and up-to-date personal data during registration. You also agree that we may use your data in accordance with our Privacy Policy.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>Intellectual Property:</span></p>
                    <p><span>&nbsp;&nbsp; All rights to intellectual property associated with the "iDo" application remain with us. You are responsible for adhering to copyright and other rights when using the application.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>&nbsp;Prohibitions:</span></p>
                    <p><span>&nbsp;&nbsp; You agree not to violate laws, upload malicious content, or abuse the application's functionality.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>&nbsp;Liability:</span></p>
                    <p><span>&nbsp;&nbsp; We are not responsible for any losses you may incur as a result of using the application.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>&nbsp;Changes and Updates:</span></p>
                    <p><span>&nbsp;&nbsp; We reserve the right to make changes and updates to the application and the Terms of Use.</span></p>
                    <p><span>&nbsp;</span></p>
                    <p><span>By agreeing to this Terms of Use, you acknowledge that you have read and understood all of its provisions.</span></p>
                    </>
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='tabs_container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;