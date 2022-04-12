import React, { ReactNode, useEffect, useState } from 'react';
import useMouse from '@react-hook/mouse-position'

import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import Link from "next/link";

type IProjectsIndexProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Index = (props: IProjectsIndexProps) => {
  const constrain = 100;
  const [transformProp] = useState(new Map());
  const [count, setCount] = useState(-1);
  
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
    e.target.style.transform = "perspective(100px) rotateX(0deg) rotateY(0deg)";
  }

  const applySkewTransform = (e : any) => {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([e.target]);

    window.requestAnimationFrame(function(){
      transformElement(e.target, position);
    });
  };

  useEffect(() => {
    setCount(count + 1);
    transformProp.forEach((trns, el) => {
      el.style.transform  = trns;
    });
  }, []);

  return (
    <Main meta={<Meta title="Projects" description="Lorem ipsum" />}>
      <Link href="/Projects/Quester/">
        <div>
          <div onMouseMove={applySkewTransform} onMouseLeave={removeSkewTransform} className="project-btn"></div>
        </div>
      </Link>
    </Main>
  );
}

export default Index;
