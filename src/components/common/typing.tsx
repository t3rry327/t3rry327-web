import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const TypingHeader = ({ text }: { text: string[] }) => {
    const phrases = text;
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentIndex = loop % phrases.length;
            const fullText = phrases[currentIndex];

            if (isDeleting) {
                setCurrentPhrase(fullText.substring(0, currentPhrase.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentPhrase(fullText.substring(0, currentPhrase.length + 1));
                setTypingSpeed(100);
            }

            if (!isDeleting && currentPhrase === fullText) {
                setIsDeleting(true);
                setTypingSpeed(4000);
            } else if (isDeleting && currentPhrase === '') {
                setIsDeleting(false);
                setLoop(loop + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentPhrase, isDeleting, loop, typingSpeed]);

    return (
        <motion.div
            className="flex items-center font-extralight text-3xl lg:text-6xl transition-all text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-900 max-w-[600px] font-bold font-sans animate-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <span>{currentPhrase}</span>
            <motion.span
                className="text-white pb-1"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.5}}
            >
                |
            </motion.span>
        </motion.div>
    );
};

export default TypingHeader;
