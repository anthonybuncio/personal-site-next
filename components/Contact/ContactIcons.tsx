import data from "@/data/contact";

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <s.icon />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
