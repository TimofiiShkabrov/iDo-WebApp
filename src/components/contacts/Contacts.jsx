import './contacts.css'

const Contacts = () => {
    return ( 
        <section className="contacts">
            <div className="container">
                <div className="contacts_container">
                    <div className="contacts_content">
                        <div className="contacts_text">
                            <div className="header_title">
                                <h1>Feedback and Support</h1>
                            </div>
                            <div className="header_description">
                                <p>
                                We value your feedback and are here to provide you with the best possible support for your iDo experience. If you have any questions, suggestions, or encounter any issues while using the iDo app, please feel free to reach out to us. Your feedback helps us enhance the app and create a better user experience for you.
                                </p>
                                <h2>
                                You can contact us through the following channels:
                                </h2>
                                <a href="mailto:timofii.shkabrov@gmail.com">timofii.shkabrov@gmail.com</a>
                                <p>
                                Before reaching out, you might want to check our Frequently Asked Questions (FAQs) section on our website. You might find the answer to your question there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contacts;