import { getLinksLinks } from "../utils/data";
import { Link } from "next/link";
const NonSocialLinks = () => {
  const getNonSocialLinksData = getLinksLinks();

  if (getNonSocialLinksData) {
    return (
      <section className="grid justify-center">
        {getNonSocialLinksData.map((links) => {
          return (
            <a className="" href={links.url} key={links.id}>
              <button className="button max-w-md">
                <p>{links.title}</p>
              </button>
            </a>
          );
        })}
      </section>
    );
  }

  return <p>Social Links</p>;
};

export default NonSocialLinks;
