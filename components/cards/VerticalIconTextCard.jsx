import Link from "next/link";

const VerticalIconTextCard = ({ icon, title, desc, className, href }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Link
        href={href}
        className="w-full h-full bg-dark rounded-xl p-3 md:p-3 flex-v-center !justify-start backdrop-blur-lg border border-card hover:bg-dark/50 hover:scale-105 transition-transform duration-500 group"
      >
        <div className="flex-center size-[4.3em] min-w-[4.3em] bg-card rounded-full backdrop-blur-xl group-hover:bg-dark">
          <div className="!text-[1.5em] group-hover:!text-neon">{icon}</div>
        </div>
        <div className="flex flex-col">
          <h3 className="card-title !text-[1.4em]">{title}</h3>
          <p className="group-hover:!text-neon transform-700">{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default VerticalIconTextCard;
