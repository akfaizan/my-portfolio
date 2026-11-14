import {useMemo,useState,useEffect} from 'react'
import {motion} from "framer-motion"
import ParticlesBackground from "../components/ParticlesBackground"
import {FaInstagramSquare, FaLinkedin, FaGithub} from "react-icons/fa"
import avator from "../assets/avator1.png"

const socials = [
  {Icon : FaInstagramSquare , label : "Instagram", href: "https://www.instagram.com/rlyfaizan/"},
  {Icon : FaLinkedin , label : "Linkdin", href: "https://www.linkedin.com/in/faizan-akhtar-41b4a937b/"},
  {Icon : FaGithub , label : "Github", href: "https://github.com/akfaizan"}
];
 
const glowVariants = {
  initial: { 
    scale: 1, 
    y: 0, 
    filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" 
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0px 0px 8px rgba(149,1,1,0.9)) drop-shadow(0px 0px 18px rgba(255,0,0,0.75))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { 
    scale: 0.95, 
    y: 0, 
    transition: { duration: 0.08 } 
  }
};


const Home = () => {

  const roles = useMemo(()=>["Web Developer","MERN Stack Developer","REACT Developer"]);

  const [index,setIndex] = useState(0);
  const [subIndex,setSubIndex] = useState(0);
  const [deleting,setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const atEnd = !deleting && subIndex === current.length;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((value) => value + 1);
      } else if (atEnd) {
        setDeleting(true);
      } else if (deleting && subIndex > 0) {
        setSubIndex((value) => value - 1);
      } else {
        setDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
      }
    }, atEnd ? 1200 : deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);
  
  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-[#000000] overflow-hidden lg:h-screen">
      <ParticlesBackground/>
    <div className="absolute inset-0">
      <div className="absolute -top-32 -left-32
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-gradient-to-r from-[#950101] via-[#FF0000] to-[#3D0000]
      opacity-10 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse"
      ></div>
      <div className="absolute bottom-0 right-0
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-gradient-to-r from-[#950101] via-[#FF0000] to-[#3D0000]
      opacity-10 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse delay-500"
      ></div>
    </div>

    <div className="relative z-10 min-h-[100svh] w-full max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="flex flex-col justify-center py-28 sm:py-32 lg:py-0 text-left relative min-w-0">
        <div className="w-full ml-1 sm:ml-2 lg:ml-8 lg:pr-12 max-w-[48rem] min-w-0">
            <motion.div className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#ffffff] tracking-wide min-h-[1.6em]"
            initial={{opacity:0,y:12}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}>
              <span>{roles[index].substring(0,subIndex)}</span> 
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-[#FF0000] via-[#950101] to-[#FF0000] drop-shadow-lg"
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}>
              Hello, I'm
              <br />
              <span className="text-[#ffffff] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap">
                Faizan Akhtar
              </span>
            </motion.h1>

            <motion.p className="mt-5 text-sm sm:text-base md:text-lg text-[#ffffff] max-w-2xl"
             initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.4,duration:0.8}}>
              I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lightning-fast applications that make a difference.
            </motion.p>

            <motion.div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-3 sm:gap-5"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.8,duration:0.8}}>
              <a href="#projects"
                className="px-5 sm:px-6 py-3 rounded-full font-medium text-base sm:text-lg text-[#000000] bg-gradient-to-r from-[#FF0000] to-[#950101] shadow-lg shadow-[#950101]/20 hover:scale-105 transition-all">
                View My Work
              </a>

              <a href="/Resume.pdf"
                download
                className="px-5 sm:px-6 py-3 rounded-full text-base sm:text-lg font-medium text-[#ffffff] border border-[#3D0000]/50 bg-[#3D0000]/75 hover:bg-[#FF0000] shadow-lg hover:scale-105 transition-all">
                My Resume
              </a>

            </motion.div>

            <div className="mt-8 sm:mt-10 flex gap-5 text-2xl md:text-3xl justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-[#ffffff]"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

        </div>

      </div>

      <div className="relative hidden lg:block">
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            right: "10px",
            width: "min(22vw, 410px)",
            height: "min(40vw, 760px)",
            borderRadius: "50%",
            filter: "blur(38px)",
            opacity: 0.32,
            background: "conic-gradient(from 0deg, #950101, #ffffff, #3D0000, #950101)"
          }}
        />
        <motion.img 
          src={avator} 
          alt="Faizan Akhtar"
          className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{
            right: "-30px", 
            width: "min(45vw, 780px)", 
            maxHeight: "90vh"
          }}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
      </div>

    </div>
    </section>
  )
}

export default Home
