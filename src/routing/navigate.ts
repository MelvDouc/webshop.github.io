import pages from "./pages.js";

let outlet: HTMLElement;

const setOutlet = (element: HTMLElement) => {
  outlet = element;
};

const navigate = async (url: string): Promise<void> => {
  for (const key in pages) {
    const page = pages[key];

    if (!page.isUrl(url))
      continue;

    history.pushState({}, "", url);
    document.title = `${page.title} | Web Shop`;
    outlet.replaceChildren(await page.component(url));
    return;
  }

  // TODO: implement 404
  console.log("NOT FOUND");
};

export { pages, setOutlet };
export default navigate;