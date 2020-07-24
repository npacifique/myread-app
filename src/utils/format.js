export default function format(book) {
	return {
		id: book.id,
		title: book.title,
		imageLinks: book.imageLinks,
		authors: book.authors,
		shelf: book.shelf,
	}
}
