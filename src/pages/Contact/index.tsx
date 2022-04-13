import React, { ReactNode } from 'react';
import { withOrientationChange } from 'react-device-detect';

import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

const classNames = require('classnames');

type IProjectsIndexProps = {
  meta: ReactNode;
  children: ReactNode;
  isPortrait: boolean;
  isMobile: boolean;
};

const Index = (props: IProjectsIndexProps) => {
  props;

  function redirectToMail()
  {
      window.location.href = "mailto:nicolasch@duck.com";
  }

  const renderContent = () => {
    let mobileClass = classNames({
      flex: true,
      'links-container': true,
      'mobile': true,
    });

    return (
      <Main meta={<Meta title="Contact" description="Lorem ipsum" />}>
        <div className={mobileClass}>
        <div className="external-container">
            <div className="content">
              <h2 className="font-bold text-gray-800 m-0">
                <FontAwesomeIcon style={{width: '20px', marginRight: '10px'}} icon={solid('at')} /> Main Contact
              </h2>
              <p>nicolasch@duck.com</p>
            </div>
            <div className="links">
              <a style={{cursor: 'pointer'}} className="border-none text-gray-700 hover:text-gray-900"
                 onClick={redirectToMail}
              >
                Email Me <FontAwesomeIcon style={{width: '15px'}} icon={solid('paper-plane')} />
              </a>
            </div>
          </div>

          <div className="external-container">
            <div className="content">
              <h2 className="font-bold text-gray-800 m-0">
                <FontAwesomeIcon style={{width: '20px', marginRight: '10px'}} icon={solid('file-lines')} /> Curriculum Vitae
              </h2>
            </div>
            <div className="links">
              <a className="border-none text-gray-700 hover:text-gray-900"
                 href="https://github.com/nclettiere/nclettiere.github.io/raw/master/CV_ES_Nicolas_Cabrera_Lettiere-1.pdf"
              >
                Download <FontAwesomeIcon style={{width: '15px'}} icon={faFilePdf} />
              </a>
            </div>
          </div>

          <div className="external-container">
            <div className="content">
              <h2 className="font-bold text-gray-800 m-0">
              <FontAwesomeIcon style={{width: '20px'}} icon={brands('linkedin')} /> LinkedIn
              </h2>
              <p></p>
            </div>
            <div className="links">
              <a className="border-none text-gray-700 hover:text-gray-900"
                 href="https://linkedin.com/in/nclettiere"
              >
                View my profile <FontAwesomeIcon style={{width: '15px'}} icon={faSquareArrowUpRight} />
              </a>
            </div>
          </div>

          <div className="external-container">
            <div className="content">
              <h2 className="font-bold text-gray-800 m-0">
                <FontAwesomeIcon style={{width: '20px'}} icon={brands('github-alt')} /> Github
              </h2>
              <p></p>
            </div>
            <div className="links">
              <a className="border-none text-gray-700 hover:text-gray-900"
                 href="https://github.com/nclettiere"
              >
                Go to my page <FontAwesomeIcon style={{width: '15px'}} icon={faSquareArrowUpRight} />
              </a>
            </div>
          </div>
        </div>
      </Main>
    );
  };

  return renderContent();
}

export default withOrientationChange(Index);
