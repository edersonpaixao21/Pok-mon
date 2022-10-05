import * as C from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";

export const SocialMedia = () => {
  return (
    <C.Container>
      <li>
        <C.Link href="https://www.linkedin.com/in/ederson-paix%C3%A3o-a14051242/">
          <LinkedinLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="https://github.com/edersonpaixao21">
          <GithubLogo />
        </C.Link>
      </li>
      
    </C.Container>
  );
};
