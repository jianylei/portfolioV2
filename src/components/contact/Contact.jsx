import "./contact.css"

export default function Contact() {
    return (
        <div className="contact-container" id="contact-container">
            <h4>need a developer?</h4>
            <h2>Contact Me</h2>
                <div className="contact-form">
                  <form action="https://formspree.io/f/mzbyzqzz" method="POST">
                        <input type="text" placeholder="Name" name="name" className="input-control" required/>
                        <input type="text" placeholder="Email" name="email" className="input-control" required/>
                        <input type="text" placeholder="Subject" name="subject" className="input-control" required/>
                        <textarea placeholder="Message" name="message" className="input-control" required></textarea>
                        <button className="btn" type="submit">send message</button>
                  </form>
              </div>
        </div>
    )
}
