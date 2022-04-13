import React, { ReactNode, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import Link from "next/link";

type IProjectsIndexProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Index = (props: IProjectsIndexProps) => {
  const constrain = 80;
  const [transformProp] = useState(new Map());

  props;
  
  function transforms(x : any, y : any, el : any) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    transformProp.set(el, "perspective(100px) rotateX("+ calcX +"deg) rotateY("+ calcY +"deg)");
    el.style.transform = "perspective(100px) rotateX("+ calcX +"deg) rotateY("+ calcY +"deg)";
  };

  function transformElement(el : any, xyEl : any) {
    el.style.transform = transforms.apply(null, xyEl);
  }

  const removeSkewTransform = (e: any) => {
   if(!e.target.classList.contains('project-btn'))
    return;

    window.requestAnimationFrame(function(){
      e.target.style.transform = "perspective(100px) rotateX(0deg) rotateY(0deg)";
    });
  }

  const applySkewTransform = (e : any) => {
    if(!e.target.classList.contains('project-btn'))
      return;

    let xy = [e.clientX, e.clientY];
    let position = xy.concat([e.target]);

    window.requestAnimationFrame(function(){
      transformElement(e.target, position);
    });
  };

  const renderContent = () => {
    if (isMobile) {
      return (
        <Main meta={<Meta title="Projects" description="Lorem ipsum" />}>
          <div className='projects-container mobile'>
            <Link href="/Projects/Quester/">
            <div className="project-btn quester" onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform}>
                  <div className='no-affect-trns proj-title mobile'>
                    <h2 className="text-2xl font-bold text-white">Quester</h2>
                    <p className="text-1xl text-gray-400">Game Development Tool</p>
                  </div>
                </div>
            </Link>
      
            <Link href="/Projects/Quester/">
            <div className="project-btn mandarina" onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform}>
                  <div className='no-affect-trns proj-title mobile'>
                    <h2 className="text-2xl font-bold text-white">Mandarina Tales</h2>
                    <p className="text-1xl text-gray-400">Indie Game for school project</p>
                  </div>
                </div>
            </Link>
      
            <Link href="/Projects/Paco/">
            <div className="project-btn paco" onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform}>
                  <div className='no-affect-trns proj-title mobile'>
                    <h2 className="text-2xl font-bold text-white">Paco: An Adventure Begins</h2>
                  </div>
                </div>
            </Link>
          </div>
        </Main>);
    }
    return (
      <Main meta={<Meta title="Projects" description="Lorem ipsum" />}>
        <div className='projects-container'>
          <Link href="/Projects/Quester/">
          <div className="project-btn quester" onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform}>
                <div className='no-affect-trns proj-title'>
                  <h2 className="text-2xl font-bold text-white">Quester</h2>
                  <p className="text-1xl text-gray-400">Game Development Tool</p>
                </div>
              </div>
          </Link>
    
          <Link href="/Projects/Quester/">
          <div className="project-btn mandarina" onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform}>
                <div className='no-affect-trns proj-title'>
                  <h2 className="text-2xl font-bold text-white">Mandarina Tales</h2>
                  <p className="text-1xl text-gray-400">Indie Game for school project</p>
                </div>
              </div>
          </Link>
    
          <Link href="/Projects/Paco/">
          <div className="project-btn paco" onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform}>
                <div className='no-affect-trns proj-title'>
                  <h2 className="text-2xl font-bold text-white">Paco: An Adventure Begins</h2>
                </div>
              </div>
          </Link>
        </div>
      </Main>
    );
  };

  return renderContent();
}

export default Index;
