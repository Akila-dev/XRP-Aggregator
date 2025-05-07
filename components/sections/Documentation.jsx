import { CardDiv } from "../../components";
import { SiReadthedocs } from "react-icons/si";

const DocumentsCard = ({ title, paragraph, list }) => (
  <div className="flex flex-col md:flex-row gap-3 lg:gap-5 items-start justify-start bg-card/20 backdrop-blur-lg rounded-md p-2 lg:p-3 w-full border-[0.1em] border-card/50">
    <div className="neon-gradient w-[3.5em] min-w-[3.5em] h-[3.5em] md:w-[4.25em] md:min-w-[4.25em] md:h-[4.25em] rounded flex-center">
      <SiReadthedocs className="h3 -rotate-45 text-black" />
    </div>
    <div className="flex flex-col gap-1">
      {title && <h3>{title}</h3>}
      {paragraph && (
        <p
          className={`inner-html`}
          dangerouslySetInnerHTML={{ __html: paragraph }} // accept HTML TAGS from STRING DATA
        />
      )}
      {list && (
        <ul className="space-y-1">
          {list.map((item, i) => (
            <div key={i}>
              <li
                className={`inner-html list-disc list-inside`}
                dangerouslySetInnerHTML={{ __html: item.text }} // accept HTML TAGS from STRING DATA
              />

              {item.sublist && (
                <ul className="space-y-1">
                  {item.sublist.map((sublist, i) => (
                    <li
                      className={`inner-html list-disc list-inside pl-3`}
                      dangerouslySetInnerHTML={{ __html: sublist.text }} // accept HTML TAGS from STRING DATA
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Documentation = ({ data, commentary }) => {
  return (
    <section className="container">
      {data && (
        <CardDiv
          animation="scale-up"
          scrub
          start="85%"
          className={`gap-4 flex flex-col items-start`}
        >
          {data.map(({ title, paragraph, list }, i) => (
            <DocumentsCard
              key={i}
              title={title}
              paragraph={paragraph}
              list={list}
            />
          ))}
        </CardDiv>
      )}
      {commentary && (
        <p className={data.length > 0 ? "pt-10" : "text-center"}>
          {commentary}
        </p>
      )}
    </section>
  );
};

export default Documentation;
