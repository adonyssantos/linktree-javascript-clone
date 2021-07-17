const createHeader = data => {
  const image = `<img src="${data.image.url}" alt="${data.image.alt}" />`;
  const name = `<h1>${data.fullname}</h1>`;
  const title = `<p>${data.title}</p>`;
  const nav = `
    <nav class="logo">
      ${image}
      ${name}
      ${title}
	  </nav>
  `;

  return nav;
};

export default createHeader;
