export const useGetAuthors = (books) => {
    const authors = books.filter((book, index, array) => {
        return !array.slice(0, index)
            .some((p) => p.author === book.author);
    }).map(book => {
        return {
            id: book.id,
            name: book.author
        }
    });
    return {
        authors
    }
}