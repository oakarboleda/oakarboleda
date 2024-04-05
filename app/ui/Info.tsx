export function Info() {
  return (
    <div className="mt-16 grid gap-8 p-4 sm:grid-cols-2 md:p-8 lg:grid-cols-3">
      <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12">
        <div className="space-y-12">
          <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
            <span className="text-xl font-bold text-green-600">1</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 transition">
              Data Collection
            </h3>
            <p className="text-gray-600">
              Upload diverse datasets containing various types of information
              for analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12">
        <div className="space-y-12">
          <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
            <span className="text-xl font-bold text-orange-600">2</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 transition">
              Model Training
            </h3>
            <p className="text-gray-600">
              Allow the AI model to learn patterns and insights from the
              provided data. This may take some time.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12">
        <div className="space-y-12">
          <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
            <span className="text-xl font-bold text-purple-600">3</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 transition">
              Insights Delivery
            </h3>
            <p className="text-gray-600">
              Receive comprehensive insights and analysis results based on the
              trained AI model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
