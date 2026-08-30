export default function decorate(block) {

    const rows = [...block.children]; 
  
  
  
    rows.forEach((row, index) => {
  
      const cols = [...row.children];
  
  
  
      // Skip row 0 (it's just "heroV2" block identifier)
  
      if (index === 1 && cols[0]) {
  
        // Row 1: Heading
  
        cols[0].classList.add('hero-heading');
  
      } else if (index === 2 && cols[0]) {
  
        // Row 2: Description
  
        cols[0].classList.add('hero-description');
  
      } else if (index === 3 && cols[0]) {
  
        // Row 3: Image
  
        cols[0].classList.add('hero-image');
  
        const img = cols[0].querySelector('img');
  
        if (img) {
  
          img.loading = 'lazy';
  
          img.classList.add('hero-image-element');
  
        }
  
      }
  
  
  
      row.classList.add('hero-row');
  
    });
  
  
  
    block.classList.add('hero-block');
  
  } 
  
  