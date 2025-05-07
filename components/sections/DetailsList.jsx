import { CardDiv } from "../../components";
import { BsPinFill } from "react-icons/bs";

const DetailsListCard = ({
  label,
  description,
  colorful_description,
  list,
}) => (
  <div className="flex gap-3 lg:gap-5 items-start justify-start bg-card/20 backdrop-blur-lg rounded-md p-2 lg:p-3 w-full border-[0.1em] border-card/50">
    <div className="neon-gradient w-[3.5em] min-w-[3.5em] h-[3.5em] md:w-[4.25em] md:min-w-[4.25em] md:h-[4.25em] rounded flex-center">
      <BsPinFill className="h3 rotate-45 text-black" />
    </div>
    <div className="flex flex-col gap-1">
      {label && <h4>{label}</h4>}
      {description && (
        <p
          className={`inner-html ${
            colorful_description ? "text-gradient" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: description }} // accept HTML TAGS from STRING DATA
        />
      )}
      {list && (
        <ul className="space-y-1">
          {list.map((item, i) => (
            <li key={i}>
              {item.label && (
                <strong className="inline-block pr-2 text-gradient">
                  {item.label}:
                </strong>
              )}

              <span
                className={`inner-html`}
                dangerouslySetInnerHTML={{ __html: item.description }} // accept HTML TAGS from STRING DATA
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const DetailsList = ({ data, two_colums }) => {
  return (
    <CardDiv
      animation="slide-in"
      start="85%"
      scrub
      className={`!gap-5 ${
        two_colums ? "grid-2" : "flex flex-col items-start"
      }`}
    >
      {data.map(({ label, description, list, colorful_description }, i) => (
        <DetailsListCard
          key={i}
          label={label}
          description={description}
          list={list}
          colorful_description={colorful_description}
        />
      ))}
    </CardDiv>
  );
};

export default DetailsList;
