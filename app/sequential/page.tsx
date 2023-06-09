import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getFictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}
async function getNonFictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}
export default async function Sequential() {
  const fiction = await getFictionBooks();
  const nonfiction = await getNonFictionBooks();
  return (
    <div>
      <h1>Sequential Fetching</h1>

      <h3>Fiction Books</h3>
      <ul>
        {fiction.map((book: Book) => (
          <li key={book.id}>
            {book.name} {book.type} {book.available ? "Yes" : "NO"}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Non-Fiction Books</h3>
      <ul>
        {nonfiction.map((book: Book) => (
          <li key={book.id}>
            {book.name} {book.type} {book.available ? "Yes" : "NO"}
          </li>
        ))}
      </ul>
    </div>
  );
}
