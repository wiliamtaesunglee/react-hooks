import React, { useEffect } from "react";

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in use");
    };
  }, [checkBoxValue]);

  return (
    <div>
      <p>teste</p>
    </div>
  );
};

export default Syntax;
