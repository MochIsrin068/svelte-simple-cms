export function extractTextWithoutImg(htmlString: string) {
    // Parse HTML string into DOM elements
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Remove all <img> elements
    const imgTags = doc.querySelectorAll('img');
    imgTags.forEach(img => img.remove());

    // Get the text content from the modified DOM
    const textContent = doc.body.textContent ? doc.body.textContent?.length > 195 ? `${doc.body.textContent?.slice(0, 196)}...` : doc.body.textContent : '';

    return textContent;
}
