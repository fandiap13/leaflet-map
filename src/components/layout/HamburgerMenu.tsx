import { useSidebarContext } from '@/context/SidebarContext';
import { motion } from 'framer-motion';

const HamburgerMenu = () => {
    const { openSidebar, toggleSidebar } = useSidebarContext();

    return (
        <button className={`w-10 h-10 p-2 rounded-lg border ${openSidebar && "bg-primary text-white"} transition-all flex flex-col justify-center space-y-1`} type='button' onClick={() => toggleSidebar()}>
            {/* <RxHamburgerMenu className='w-full h-full' /> */}
            <motion.span className={`block w-full h-[2px] rounded-full transition-colors ${openSidebar ? "bg-white" : "bg-slate-800"}`}
                initial={false}
                animate={{
                    rotate: openSidebar ? 45 : 0,
                    y: openSidebar ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
            <motion.span className={`block w-full h-[2px] rounded-full transition-colors ${openSidebar ? "bg-white" : "bg-slate-800"}`}
                initial={false}
                animate={{
                    opacity: openSidebar ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
            />
            <motion.span className={`block w-full h-[2px] rounded-full transition-colors ${openSidebar ? "bg-white" : "bg-slate-800"}`}
                initial={false}
                animate={{
                    rotate: openSidebar ? -45 : 0,
                    y: openSidebar ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
        </button>
    )
}

export default HamburgerMenu