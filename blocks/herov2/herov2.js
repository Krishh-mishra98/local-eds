export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row, index) => {
    row.classList.add('hero-row');

    const col = row.children[0];
    if (!col) return;

    if (index === 0) {
      // Row 0: Heading
      col.classList.add('hero-heading');
      const heading = col.querySelector('h1, h2, h3, h4, h5, h6, p');
      if (heading) heading.classList.add('hero-heading-text');

    } else if (index === 1) {
      // Row 1: Description
      col.classList.add('hero-description');
      const paragraph = col.querySelector('p');
      if (paragraph) paragraph.classList.add('hero-description-text');

    } else if (index === 2) {
      // Row 2: Image
      col.classList.add('hero-image');

      let img = col.querySelector('img');
      const link = col.querySelector('a');

      // Convert Universal Editor reference link to an <img> element
      if (!img && link) {
        img = document.createElement('img');
        img.src = link.href;
        img.alt = link.textContent.trim() || 'Hero Image';
        
        // If wrapped in a <p>, replace the link inside
        link.replaceWith(img);
      }

      if (img) {
        img.loading = 'eager';
        img.classList.add('hero-image-element');
      }
    }
  });

  block.classList.add('hero-block');
}
