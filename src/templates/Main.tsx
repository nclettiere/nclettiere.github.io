import { ReactNode } from "react";

import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRays, faBookBookmark, faMessage } from '@fortawesome/free-solid-svg-icons'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300 flex-center">
        <div className="pt-16 pb-8 flex-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.personal_name}
          </h1>
          <div className="text-xl heading">{AppConfig.job_qualification}</div>
        </div>
        <div>
          <ul style={{display: 'flex', justifyContent: 'center'}} className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a style={{display: 'flex'}} className="border-none text-gray-700 hover:text-gray-900">
                  <FontAwesomeIcon style={{marginRight: '10px', width: '20px'}} className="fa-xs" icon={faPersonRays} size="xs" />
                  About Me 
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/Projects/">
                <a style={{display: 'flex'}}  className="border-none text-gray-700 hover:text-gray-900">
                  <FontAwesomeIcon style={{marginRight: '10px', width: '20px'}} className="fa-xs" icon={faBookBookmark} size="xs" />
                  My Projects
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/Contact/">
                <a style={{display: 'flex'}}  className="border-none text-gray-700 hover:text-gray-900">
                  <FontAwesomeIcon style={{marginRight: '10px', width: '20px'}} className="fa-xs" icon={faMessage} size="xs" />
                  Contact Information
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      {/*
      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>

      </div>
      */}
    </div>
  </div>
);

export { Main };
