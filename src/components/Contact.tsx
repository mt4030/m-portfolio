
import { socialLinks } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-amber-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Reach out directly via your preferred method. Let’s collaborate.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {socialLinks.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target={name === "GitHub" || name === "LinkedIn" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 min-w-45 content-center
                         bg-gray-800 rounded-xl shadow-lg
                         hover:shadow-2xl transition hover:-translate-y-1"
            >
              <Icon
                size={26}
                className="text-amber-400 group-hover:scale-110 transition"
              />
              <span className="text-lg font-semibold">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
