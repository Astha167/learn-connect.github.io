// app/page.js
import Link from "next/link";

const books = [
  { id: 1, title: "Mathematics", std: "Std II", image: "/dog.jpg" },
  { id: 2, title: "English", std: "Std II", image: "/dog.jpg" },
  { id: 3, title: "Mathematics", std: "Std III", image: "/dog.jpg" },
  { id: 4, title: "English", std: "Std III", image: "/dog.jpg" },
];

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-blue-700 text-white text-center py-6">
        <h1 className="text-2xl font-bold">Welcome to Learn Connect!</h1>
        <p className="mt-2">
          Discover a curated collection of educational books with interactive quizzes.
          Perfect for classroom instruction and self-paced learning
        </p>
      </div>

      {/* Library Section */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-6">EXPLORE OUR LIBRARY</h2>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-1 mb-6"
        />

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded-2xl shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-32 h-32 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm mb-4">{book.std}</p>

              {/* Navigate to book page */}
              <Link href={`/book/${book.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                  View Books and Quizzes
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
