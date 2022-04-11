//import { useRouter } from 'next/router';

import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  //const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Nicolas Cabrera - Portfolio"
          description="Personal portfolio of Nicolas Cabrera"
        />
      }
    >
      {AppConfig.about_me}

      <h2 className="text-2xl font-bold text-gray-900">My Abilities</h2>
      <ul className="ability-tree">
        {AppConfig.abilities.map(function (d, idx) {
          return (
            <li key={idx}>
              <span role="img" aria-label="fire">
                {d[0]}
              </span>{" "}
              <span className={idx % 2 == 0 ? "row odd" : "row"}>{d[1]}</span>
            </li>
          );
        })}
      </ul>
    </Main>
  );
};

export default Index;
