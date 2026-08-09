type ButtonProps = {
  text: string;
  link: string;
};

export default function Button({ text, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
    >
      {text}
    </a>
  );
}