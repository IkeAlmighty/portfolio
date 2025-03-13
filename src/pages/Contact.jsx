export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <p className="py-5">
        I'm always open to chatting! Let's get coffee and chat about the state of the industry, our hobby projects, and whatever else floats your boat.
      </p>

      <hr />

      <form className="my-5" onSubmit={handleSubmit}>
        <label>
          <div className="">Contact Info: </div>
          <input
            type="email"
            placeholder="Email"
            className="block my-5 p-3 border-black border-2 rounded w-full max-w-sm"
            required
          />
        </label>

        <label>
          <div>Message: </div>
          <textarea required placeholder="Your message here..." className="block my-5 p-3 border-black border-2 rounded w-full max-w-sm h-[200px]"></textarea>
        </label>

        <input type="submit" value="Submit" className="border-1 rounded cursor-pointer py-2 px-3 hover:text-white hover:bg-black hover:animate-pulse" />
      </form>
    </div>
  );
}
