import { NavLink } from "react-router";
import GridItem from "../components/GridItem";
import GridLayout from "../components/GridLayout";

export default function Portfolio() {
  return (
    <GridLayout>
      <NavLink to="">
        <GridItem>Project 1</GridItem>
      </NavLink>
      <NavLink to="">
        <GridItem>Project 2</GridItem>
      </NavLink>
      <NavLink to="">
        <GridItem>Project 3</GridItem>
      </NavLink>
      <NavLink to="">
        <GridItem>Project 4</GridItem>
      </NavLink>
    </GridLayout>
  );
}
