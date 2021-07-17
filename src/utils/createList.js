// Create HTML <ul> with links
const createList = links => {
  const createListElement = ({ title, link, openInNewTab }) => {
    if (openInNewTab) {
      return `
			<li>
				<a
				target="_blank"
					a href="${link}"
					rel="noopener noreferrer"
					class="link"
					>${title}</a
				>
			</li>
		  `;
    } else {
      return `
		<li>
			<a
				a href="${link}"
				class="link"
				>${title}</a
			>
		</li>
	  `;
    }
  };

  let list = ``;
  links.map(link => (list += createListElement({ ...link })));
  list = `<ul>${list}</ul>`;
  return list;
};

export default createList;
