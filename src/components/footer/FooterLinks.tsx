interface Links {
  header: string;
  links: string[];
}
const FooterLinks = ({ header, links }: Links) => {
  return (
    <div className="">
      <div className="text-xl font-extrabold capitalize">{header}</div>
      <ul>
        {links.map((item) => {
          return (
            <li className="capitalize py-1" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
