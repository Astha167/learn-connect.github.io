import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Mathematics Std II",
    embed:"https://docs.google.com/presentation/d/e/EXAMPLE_LINK/pubembed"
      ,
  },
  {
    id: 2,
    title: "English Std II",
    embed: "https://docs.google.com/presentation/d/e/EXAMPLE_LINK/pubembed",
  },
  {
    id: 3,
    title: "Mathematics Std III",
    embed: "https://docs.google.com/presentation/d/e/EXAMPLE_LINK/pubembed",
  },
  {
    id: 4,
    title: "English Std III",
    embed: "https://docs.google.com/presentation/d/e/2PACX-1vSjDIXW3G0PWh63OdeyajO0THCqwbQBZSpURZ1sKSntI3ntQWCQ8p4XlY-MMbNRvQ/pubembed?start=true&loop=false&delayms=3000",
  },
];

export default function BookPage({ params }) {
  const { id } = params;
  const book = books.find((b) => b.id.toString() === id);

  if (!book) return <p className="text-center mt-10">Book not found</p>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>

      <iframe
        src={book.embed}
        frameBorder="0"
        width="100%"
        height="600"
        allowFullScreen
      ></iframe>

      <div className="mt-6">
        <Link href="/">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800">
            ← Back to Library
          </button>
        </Link>
      </div>
    </div>
  );
}
