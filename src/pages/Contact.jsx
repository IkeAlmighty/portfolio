export default function Contact() {
  return (
    <div>
      <h1>Contact Form</h1>
      <p className="py-5">
        I'm always open to chatting! Let's get coffee and chat about the state of the industry, our hobby projects, and whatever else floats your boat.
      </p>

      <hr />

      <form className="my-5">
        <label>
          <div className="">Contact Info: </div>
          <input
            type="text"
            placeholder="Callback # or Email"
            className="block my-5 p-3 border-black border-2 rounded w-full max-w-sm"
          />
        </label>

        <label>
          <div>Message: </div>
          <textarea placeholder="Your message here..." className="block my-5 p-3 border-black border-2 rounded w-full max-w-sm h-[200px]"></textarea>
        </label>
      </form>
    </div>
  );
}
