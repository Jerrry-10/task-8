import { getSocialLinks } from "../utils/data";
import facebook from "images/facebook.svg";
import twitter from "images/twitter.svg";
import instagram from "images/instagram.svg";
import snapchat from "images/snapchat.svg";
import Image from "next/image";
const SocialLinks = () => {
  const getSocialLinksData = getSocialLinks();

  if (getSocialLinksData) {
    return (
      <section className="flex justify-center p-3 items-center">
        {getSocialLinksData.map((links) => {
          switch (links.title) {
            case "Facebook":
              return (
                <a href={links.url}>
                  {" "}
                  <Image
                    src={facebook}
                    alt={"Facebook"}
                    height="80"
                    width="80"
                  />{" "}
                </a>
              );
            case "Twitter":
              return (
                <a href={links.url}>
                  {" "}
                  <Image
                    src={twitter}
                    alt={"Twitter"}
                    height="80"
                    width="80"
                  />{" "}
                </a>
              );
            case "Instagram":
              return (
                <a href={links.url}>
                  {" "}
                  <Image
                    src={instagram}
                    alt={"Instagram"}
                    height="80"
                    width="80"
                  />{" "}
                </a>
              );
            case "Snapchat":
              return (
                <a href={links.url}>
                  {" "}
                  <Image
                    src={snapchat}
                    alt={"Snapchat"}
                    height="80"
                    width="80"
                  />{" "}
                </a>
              );
            default:
              return <p>Link not found</p>;
          }
        })}
      </section>
    );
  }

  return <p>You dont have any social links</p>;
};

export default SocialLinks;
