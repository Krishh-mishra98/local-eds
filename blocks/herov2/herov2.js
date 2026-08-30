export default function decorate(block) {
    const rows = [...block.children];

    // Dynamically determine starting index based on total row count
    // Document Authoring usually has 4 rows (row 0 is block name); UE often renders 3
    const isZeroBased = rows.length === 3;

    const headingIdx = isZeroBased ? 0 : 1;
    const descIdx = isZeroBased ? 1 : 2;
    const imageIdx = isZeroBased ? 2 : 3;

    rows.forEach((row, index) => {
        row.classList.add('hero-row');
        const col = row.children[0];
        if (!col) return;

        if (index === headingIdx) {
            col.classList.add('hero-heading');
            const heading = col.querySelector('h1, h2, h3, h4, h5, h6, p');
            if (heading) heading.classList.add('hero-heading-text');

        } else if (index === descIdx) {
            col.classList.add('hero-description');
            const paragraph = col.querySelector('p');
            if (paragraph) paragraph.classList.add('hero-description-text');

        } else if (index === imageIdx) {
            col.classList.add('hero-image');

            let img = col.querySelector('img');
            const link = col.querySelector('a');

            // Convert Universal Editor <a> reference link into an <img> element
            if (!img && link) {
                img = document.createElement('img');
                img.src = link.href;
                img.alt = 'Hero Image';
                img.classList.add('hero-image-element');
                img.loading = 'eager';

                // Replace the link directly with the img element
                link.replaceWith(img);
            } else if (img) {
                img.loading = 'eager';
                img.classList.add('hero-image-element');
            }
        }
    });

    block.classList.add('hero-block');
}