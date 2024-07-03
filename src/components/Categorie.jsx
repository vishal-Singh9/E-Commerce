import { useParams } from "react-router-dom";
import SmartPhone from "./SmartPhone";
import MensShirts from "./MensShirts";
import MensShoes from "./MensShoes";
import MensWatches from "./MensWatches";
import Groceries from "./Groceries";

const Category = () => {
  const { category } = useParams();

  const renderCategory = () => {
    switch (category) {
      case "smartphones":
        return <SmartPhone />;
      case "menshirts":
        return <MensShirts />;
      case "shoes":
        return <MensShoes />;
      case "watches":
        return <MensWatches />;
      case "groceries":
        return <Groceries />;
      default:
        return(
          <div><center><h1>404</h1>Category Not Found</center></div>
        )
    }
  };

  return (
    <div>
      {renderCategory()}
    </div>
  );
};

export default Category;
