import { useContext,useEffect } from "react";
import CategoryPillCss from "../UI/CategoryPills.module.css"
import { allProductContext } from "../context/allProductContext";
import agent from "../api/agent";



export default function CategoryPills() {
  let { categories,selectedCategories,setSelectedCategories,setCategories} = useContext(allProductContext);

  useEffect(() => {
    agent.getByCategory().then((res) => setCategories(res));
  }, []);
  console.log(categories)
  return (
    <div>
      <div className={CategoryPillCss.contaionerOfCategoryPills}>
      <ul className={CategoryPillCss.pillUl}>
            {categories &&
              categories.map((item, key) => (
                <li className={CategoryPillCss.pillcategory}
                  key={key}
                  style={{ opacity: item === selectedCategories && "0.6" }}
                  onClick={() => setSelectedCategories(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
      </div>
    </div>
  );
}