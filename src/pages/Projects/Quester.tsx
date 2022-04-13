import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

const Quester = () => (
  <Main meta={<Meta title="Quester" description="Lorem ipsum" />}>
    <h1 className="text-3xl font-bold text-gray-900 m-20">
      The Quester Project
    </h1>
    <div className="q-main-window"></div>

    <h2 className="text-2xl font-bold text-gray-800 m-20">
      What is it?
    </h2>
    <p>
    Quester is a game development tool used in conjunction with the best top-notch software in the industry like Unreal, Unity, CryEngine and  much more. It is meant to ease the tasks companies face during the  creation of complex quest/mission systems, character development,  dialogue systems & general game planning. 
    </p>

    <h2 className="text-2xl font-bold text-gray-800 m-20">
      How was it made?
    </h2>
    <p>
      Quester is made like solid steel. Written in native C/C++ code to ensure it fits all operating system needs & enable lightning fast speeds to all your requirements.
      No third party modules were used in this project.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 m-20">
      What features are included?
    </h2>
    <p>
      Quester is a powerful quest designer, dialogue editor, character creator and game development writer. You can next, export all this to your game engine of preference.
    </p>
    <p>
      All of this don't require you to have programming skills, Quester provides an intuitive node based system that takes care of all the messy stuff for you.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 m-20">
      Modular system philosophy
    </h2>
    <p>
      No application is perfect, so to help the community, Quester provides scriptable modules and plugins to all our users, including well documented code examples.
    </p>

    <h2 className="soon text-2xl font-bold text-black m-20">
      Coming Soon
    </h2>

    <div className="filling-500"></div>
  </Main>
);

export default Quester;
