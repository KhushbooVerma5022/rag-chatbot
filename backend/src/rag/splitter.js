
export const splitText = (text, chunkSize = 500, overlap = 50) => {
    let chunks = [];

    let start = 0;

    while(start < text.length){
        let end = start + chunkSize;

        chunks.push(text.slice(start, end));

        start += chunkSize - overlap;
    }

    return chunks;
}