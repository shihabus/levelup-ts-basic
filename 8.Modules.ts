/**
 * In TS, the compilation is done by
 * TSC and not by Babel or Webpack.
 * But it is really the same how we have
 * it in a JS application
 */
import PI, { ContentType, Person } from "./src/Interfaces";

let shihab: Person = {
  name: "Shihab",
  age: 25,
};

function contentCreator(type: ContentType) {}
contentCreator(ContentType.blog);

const circleArea = (radius: number) => 2 * PI * radius;
circleArea(2);
