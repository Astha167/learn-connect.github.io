import Link from "next/link";

// ✅ Move book data to a shared file if needed
const books = [
  {
    id: 1,
    title: "Mathematics Std II",
    embed: "https://docs.google.com/presentation/d/e/2PACX-1vR2KPqMLI-W7T4NbO2aeGtxxiOElwxIb_uDvR-nnDs_sVlWlX5_n9CpLrCRNQf6Gg/pubembed?start=true&loop=false&delayms=3000",
  },
  {
    id: 2,
    title: "English Std II",
    embed: "https://docs.google.com/presentation/d/e/2PACX-1vTLRDSnaYBrnOriwRSHjYYx22xtyqdNy-GRBa2J5yKI159LzsLEyRULh403fmMYaQ/pubembed?start=true&loop=false&delayms=3000"
  },
  {
    id: 3,
    title: "Mathematics Std III",
    embed: "https://docs.google.com/presentation/d/e/2PACX-1vRVjhLVoLzJegU-BOEG93B2ZKirKv4UeqbD-fmj5oB9eSsxdR6h55VD0PVqif9ewg/pubembed?start=true&loop=false&delayms=3000",
  },
  {
    id: 4,
    title: "English Std III",
    embed:
      "https://docs.google.com/presentation/d/e/2PACX-1vSjDIXW3G0PWh63OdeyajO0THCqwbQBZSpURZ1sKSntI3ntQWCQ8p4XlY-MMbNRvQ/pubembed?start=true&loop=false&delayms=3000",
  },
];

// ✅ Generate static params for pre-rendering (important for GitHub Pages)
export async function generateStaticParams() {
  return books.map((book) => ({ id: book.id.toString() }));
}

// ✅ Dynamic Book Page
export default function BookPage({ params }) {
  const book = books.find((b) => b.id === Number(params.id));

  if (!book) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-bold text-red-600">Book not found</h1>
        <Link href="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Back to Library
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      {/* Responsive iframe without plugin */}
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          src={book.embed}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {book.id > 1 ? (
          <Link href={`/book/${book.id - 1}`}>
            <button className="px-4 py-2 bg-gray-300 rounded-lg">
              ⬅ Previous
            </button>
          </Link>
        ) : (
          <div />
        )}
        {book.id < books.length && (
          <Link href={`/book/${book.id + 1}`}>
            <button className="px-4 py-2 bg-gray-300 rounded-lg">
              Next ➡
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
