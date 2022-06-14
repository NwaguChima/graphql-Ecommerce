import { useEffect } from "react";

interface LearnProps {}

const Learn: React.FC<LearnProps> = () => {
  useEffect(() => {
    document.title = "Learn";
  }, []);

  return (
    <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
      Learn about us here...
    </h1>
  );
};

export default Learn;
