import React from "react";

interface Props {

};

const Route404 = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-4xl">Ooops... 404 Page not found</h1>
    </div>
  )
};

export { Route404 };  