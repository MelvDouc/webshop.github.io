import navigate from "../routing/navigate.js";

export default function Link({ url, className, $init, children }: {
  url: string;
  className?: string;
  $init?: (a: HTMLAnchorElement) => void;
  children?: any;
}): HTMLAnchorElement {
  return (
    <a
      href={url}
      onclick={async (e) => {
        e.preventDefault();
        await navigate(url);
      }}
      $init={(a) => {
        className && (a.className = className);
        $init && $init(a);
      }}
    >{children}</a>
  );
}