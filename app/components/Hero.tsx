export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-blue-500">Sam Bai</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Full-Stack Developer
        </p>
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          I build modern web applications with cutting-edge technologies.
        </p>
      </div>
    </section>
  );
}
