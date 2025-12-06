export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-12 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Say Hello
        </a>
        <p className="mt-8 text-gray-500 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} Sam Bai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
