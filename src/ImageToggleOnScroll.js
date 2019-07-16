import React, { useRef } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return ( () => {
      window.removeEventListener("scroll", scrolHandler);
    });      
  });

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  }

  const scrollHangler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return (
    <img
      
      src={InView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
