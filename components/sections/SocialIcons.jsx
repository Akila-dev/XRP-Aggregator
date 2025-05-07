import Link from "next/link";

import { CardDiv } from "../../components";
// import text_data from "../../text_data";

const SocialIcons = ({ small }) => {
  return (
    <CardDiv animation="slide-in" start="90%" className="flex-v-center !gap-1">
      {/* {text_data.CONTACT_DETAILS.social_media.map(({ link, icon }, i) => (
        <Link
          key={i}
          href={link}
          className={`${
            small
              ? "w-[2.5em] h-[2.5em] min-w-[2.5em]"
              : "w-[3.5em] h-[3.5em] min-w-[3.5em]"
          } flex-center rounded-full bg-card hover:bg-dark hover:text-neon`}
          target="_blank"
        >
          <span className={small ? "text-[1.2em]" : "text-[1.5em]"}>
            {icon}
          </span>
        </Link>
      ))} */}
    </CardDiv>
  );
};

export default SocialIcons;
