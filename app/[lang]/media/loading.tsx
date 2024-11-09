export default function loading() {
  const blocks = [
    { id: "one", type: "paragraph" },
    { id: "two", type: "paragraph" },
    { id: "three", type: "paragraph" },
    { id: "four", type: "paragraph" },
    { id: "five", type: "paragraph" },
    { id: "six", type: "paragraph" },
  ];

  return (
    <div className="h-screen w-screen bg-white animate-pulse">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-16 h-16 bg-gray-200 rounded-full" />
        <div className="mt-4 w-3/4 h-8 bg-gray-200 rounded" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4">
          {blocks.map((value) => (
            <div key={value.id} className="flex flex-col space-y-2">
              <div className="w-full h-40 bg-gray-200 rounded" />
              <div className="w-3/4 h-4 bg-gray-200 rounded" />
              <div className="w-1/2 h-3 bg-gray-200 rounded" />
            </div>
          ))}
        </div>

        <div className="w-1/2 h-4 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
