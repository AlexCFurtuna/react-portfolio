import "../App.scss";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>

      <form
        className="col-lg-4"
        action="https://formspree.io/f/moqpbelv"
        method="POST"
      >
        <div class="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="text"
            name="_replyto"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group message">
          <label for="exampleInputPassword1">Your Message</label>
          <textarea
            type="text"
            class="form-control"
            id="message"
            placeholder="Your message goes here ..."
            name="message"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-danger">
          Submit
        </button>
      </form>
      <div class="right">
        <ul>
          <li>
            <a href="https://github.com/AlexCFurtuna">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexfurtuna">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/alexcfurtuna/">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/discord-logo.png"
                alt="discord"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
