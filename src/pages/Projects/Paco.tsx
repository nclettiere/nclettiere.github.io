import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const Paco = () => (
  <Main meta={<Meta title="Paco: An Adventure Begins" description="Lorem ipsum" />}>
    <h1 className="text-3xl font-bold text-gray-900 m-20">
      Paco: An Adventure Begins
    </h1>
    <div className="p-main"></div>

    <p>
      Paco: An Adventure Begins was the final project of the course Videogames in Escuela Superior de Informatica, made in conjunction with a group of four people.
    </p>

    <div className="external-container">
      <div className="content">
        <h2 className="font-bold text-gray-800 m-0">
          Try it now
        </h2>
        <p>Download the latest Windows installer.</p>
      </div>
      <div className="links">
        <a className="border-none text-gray-700 hover:text-gray-900"
           href="https://bugnsoft.github.io/"
        >
          Download <FontAwesomeIcon className="fa-xs" icon={faSquareArrowUpRight} size="xs" /> 
        </a>
      </div>
    </div>

    <div className="filling-500"></div>
  </Main>
);

export default Paco;
