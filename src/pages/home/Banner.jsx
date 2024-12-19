import { motion } from "framer-motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
import "animate.css";
const Banner = () => {
  return (
    <div className="hero bg-purple-300 min-h-[80vh]">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="">
          <motion.img
            animate={{ y: [100, 50, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
          />
        </div>
        <div className="">
          <h1 className="text-5xl font-bold animate__animated animate__backInUp">
            Latest
            <span>Jobs</span>
            For You!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
          >
            Get Explore
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
