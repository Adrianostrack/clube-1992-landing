type ButtonProps = {
  text: string;
  style?: string;
  href?: string;
};

export default function Button({ text, style, href }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-black bg-1992 px-9 p-3 rounded-full uppercase font-bold inline-block ${style}`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`text-black bg-1992 px-9 p-3 rounded-full uppercase font-bold ${style}`}
    >
      {text}
    </button>
  );
}
