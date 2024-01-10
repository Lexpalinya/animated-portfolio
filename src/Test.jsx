import { motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
    // const [open,setOpne]=useState(false);

    const variants={
       visible:(i)=>({
        opacity:1,
        transition:{delay:i*0.3}
       }),hidden:{
        opacity:0,
       }
       
    }
    const items = ["item1", "item2", "item3", "item4"];

    return (
      <div className="counrse">
        <motion.ul initial="hidden" animate="visible"  variants={variants}>
         {items.map((item,i) =>
          (  <motion.li variants={variants} key={item} custom={i}>
            {item}
        </motion.li>)
         )}
        </motion.ul>
      </div>
    );
};
export default Test;
