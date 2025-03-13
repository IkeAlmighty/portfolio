export default function About() {
  return (
    <div className="px-2">
      <div><h1>About ike</h1></div>
      <div>
        <img src="/selfportrait.jpg" alt="self portrait" className="rounded my-3" />

        <p className="py-3">
          I am a web developer, experienced barista, and owner of a scone cottage food bakery in South Minneapolis. My main hobby project is a computer assisted TTRPG called Sorcerer Soup.
        </p>

        <div className="text-center w-full">
          <div>
            <img className="w-[150px] inline-block mx-2" src="sconelogo.png" alt="scones.ike.coffee logo" />
            <img className="w-[150px] inline-block mx-2" src="sorcerersoup.png" alt="sorcerersoup icon" />
          </div>
        </div>

        <p className="py-3">
          I practice the arcane arts of communication, relationship building, and reading Stack Overflow instead of asking LLMs for answers. I believe technology should help us commune and collaborate.
        </p>

        <p className="py-3">
          I am familiar with NextJs, Sveltekit, React, Mongodb, ExpressJs, and the exact moisture content needed to attain the most delicious scone in South Minneapolis.
        </p>

      </div>
    </div>
  );
}
