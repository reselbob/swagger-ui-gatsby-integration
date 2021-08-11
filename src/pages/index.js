import React, { useEffect, useRef } from "react";

// markup
const IndexPage = () => {
  const swaggerRef = useRef(null);

  useEffect(() => {
    window.SwaggerUI({
      domNode: swaggerRef.current,
      url: "https://petstore.swagger.io/v2/swagger.json"
    });
  }, []);

  return <div ref={swaggerRef} id="swaggerWrapper" />;
};

export default IndexPage;
