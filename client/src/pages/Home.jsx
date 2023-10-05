import {motion ,  AnimatePresence } from "framer-motion";
import {useSnapshot} from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion"

import state from "../store";
import  {CustomButton}  from "../components";

const Home = () => {

    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img
                        src="./threejs.png"
                        alt="logo"
                        className="h-8 w-8 object-contain"
                    />
                </motion.header>
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation} className="flex flex-col gap-5">
                        <h1 className="head-text">
                            Let's <br className="x1:block hidden"/> Do it .
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation}>
                        <p className="max-w-md font-normal text-gray-600 text-base">
                        Create your own unique and eclusive tshirt with our brand new 3-D customization tool .<strong> Unleash your imagination </strong>{" "} and define your own style.</p>

                        <CustomButton
                            type="filled"
                            title="Customize It"
                            handleClick= {() => state.intro=false }
                            customStyles = ' w-fit px-4 py-2.5 font-bold text-sm '
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home