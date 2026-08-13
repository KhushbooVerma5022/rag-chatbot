
export const splitText = (text, chunkSize, overlap) => {
    let chunks = [];

    let start = 0;

    while(start < text.length){
        let end = start + chunkSize;

        chunks.push(text.slice(start, end));

        start += chunkSize - overlap;
    }

    return chunks;
}