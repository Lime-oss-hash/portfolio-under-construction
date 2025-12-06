export default function Projects() {
  return (
    <section id="work" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add your projects here */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 dark:bg-gray-700" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A brief description of your project goes here.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200 dark:bg-gray-700" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A brief description of your project goes here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
