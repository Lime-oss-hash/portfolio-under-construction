export default function Skills() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Add your skills here */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          React
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          Next.js
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          TypeScript
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          Tailwind CSS
        </div>
      </div>
    </section>
  );
}
