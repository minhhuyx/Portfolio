import React from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg ${isVisible ? '' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default BackToTop;