import pages from "./pages.js";

let outlet: HTMLElement;

const setOutlet = (element: HTMLElement) => {
  outlet = element;
};

const navigate = async (url: string): Promise<void> => {
  for (const key in pages) {
    const page = pages[key as keyof typeof pages];

    if (!page.isUrl(url))
      continue;

    history.pushState({}, "", url);
    document.title = page.title;
    outlet.replaceChildren(await page.component(url));
    return;
  }

  // TODO: implement 404
  console.log("NOT FOUND");
};

navigate.container = document.createElement("div");

export { pages, setOutlet };
export default navigate;