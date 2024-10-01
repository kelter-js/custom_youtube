import { useMemo, FC } from "react";

import { categories } from "../../utils/constants";
import { SidebarProps } from "./types";
import {
  CategoriesListContainer,
  CategoryButton,
  CategoryIcon,
  CategoryName,
} from "./Sidebar.styled";

const Sidebar: FC<SidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  const handleSelectCategory = (category: string) => () =>
    onSelectCategory(category);

  const categoriesList = useMemo(
    () =>
      categories.map((category) => {
        const isSelectedCategory = category.name === selectedCategory;

        return (
          <CategoryButton
            style={{
              background: isSelectedCategory ? "#FC1503" : "",
            }}
            onClick={handleSelectCategory(category.name)}
            key={category.name}
          >
            <CategoryIcon isSelectedCategory={isSelectedCategory}>
              {category.icon}
            </CategoryIcon>

            <CategoryName isSelectedCategory={isSelectedCategory}>
              {category.name}
            </CategoryName>
          </CategoryButton>
        );
      }),
    [categories, selectedCategory]
  );

  return <CategoriesListContainer>{categoriesList}</CategoriesListContainer>;
};

export default Sidebar;
