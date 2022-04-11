import { ReactNode } from "react";

import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

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
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About Me
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/MyProjects/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  My Projects
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                My Links
              </a>
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
