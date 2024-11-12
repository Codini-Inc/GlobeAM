import React, { useEffect, useRef, useState } from "react";

const SectionTitle = ({
  title,
  subtitle = "",
  align = "center", // "left", "center", "right"
  theme = "blue", // "blue", "purple", "gradient", "teal", "dark"
  animated = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const themeStyles = {
    blue: {
      title: "text-blue-600",
      line: "from-transparent via-blue-500 to-transparent",
      subtitle: "text-gray-600",
    },
    purple: {
      title: "text-purple-600",
      line: "from-transparent via-purple-500 to-transparent",
      subtitle: "text-gray-600",
    },
    gradient: {
      title:
        "bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent",
      line: "from-blue-500 via-blue-900 to-blue-500",
      subtitle: "text-gray-600",
    },
    teal: {
      title: "text-teal-600",
      line: "from-transparent via-teal-500 to-transparent",
      subtitle: "text-gray-600",
    },
    dark: {
      title: "text-white",
      line: "from-transparent via-white to-transparent",
      subtitle: "text-gray-300",
    },
  };

  const baseStyles = {
    wrapper: `w-full max-w-4xl mx-auto px-4 sm:px-6 my-12 md:my-16`,
    titleContainer: `relative flex items-center gap-4 ${
      align === "center"
        ? "justify-center"
        : align === "right"
        ? "justify-end"
        : "justify-start"
    }`,
    decorativeLine: `h-px flex-grow bg-gradient-to-r ${
      themeStyles[theme].line
    } max-w-[150px] transition-all duration-1000 ${
      animated && isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
    }`,
    title: `text-3xl md:text-4xl font-normal ${themeStyles[theme].title} ${
      animated ? "transition-all duration-700 transform" : ""
    } ${
      animated && isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`,
    subtitle: `mt-4 text-base md:text-lg ${
      align === "center"
        ? "text-center"
        : align === "right"
        ? "text-right"
        : "text-left"
    } ${themeStyles[theme].subtitle} ${
      animated ? "transition-all duration-700 delay-300 transform" : ""
    } ${
      animated && isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-5"
    }`,
  };

  return (
    <div className={baseStyles.wrapper} ref={titleRef}>
      <div className={baseStyles.titleContainer}>
        {align !== "right" && (
          <>
            <div className={baseStyles.decorativeLine} />
          </>
        )}

        <h2 className={baseStyles.title}>{title}</h2>

        {align !== "left" && (
          <>
            <div className={baseStyles.decorativeLine} />
          </>
        )}
      </div>

      {subtitle && <p className={baseStyles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
