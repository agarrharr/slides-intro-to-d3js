// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  d3website: require("../assets/d3-website.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intro to D3.js
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Interactive Data Visualizations for the Web
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="">
          <Heading size={6} textColor="primary">d3js.org</Heading>
          <a href="https://d3js.org/" target="_blank">
            <Image src={images.d3website.replace("/", "")} width="100%"/>
          </a>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary">DOM Manipulation</Heading>
          <List>
            <ListItem>JavaScript can manipulate the DOM</ListItem>
            <ListItem>D3 is similar to jQuery</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary">Document Traversal</Heading>
            <CodePane
              lang="javascript"
              textSize="24"
              source={`
d3.select("body") // $("body")
d3.selectAll(".book") // $(".book")
d3.select("#app") // document.getElementById("app")
d3.filter(...) // $(...).filter(...)
            `} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary">Document Manipulation</Heading>
            <CodePane
              lang="javascript"
              textSize="24"
              source={`
const selection = d3.selectAll(...)
selection.attr
selection.style
selection.property
selection.append
selection.text
selection.raise
            `} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary">Data Binding</Heading>
            <CodePane
              lang="javascript"
              textSize="24"
              source={`
d3.select(...).selectAll(...).data(...).enter()...
            `} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary" notes="">
          <Heading size={6} textColor="secondary">SVG</Heading>
          <List>
            <ListItem>Scalable Vector Graphics</ListItem>
            <ListItem>Markup</ListItem>
            <ListItem>Allows us to draw lines, shapes, and text</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="">
          <Heading size={6} textColor="primary">SVG Circle</Heading>
          <CodePane
            lang="html"
            source={require("raw-loader!../assets/svg-circle.html")}
            textSize="24"
          />

          <br/>

          <svg width="300px" height="100px">
            <rect width="300px" height="100px" fill="white" />
            <circle cx="25px" cy="25px" r="20px" fill="red" />
            <circle cx="75px" cy="45px" r="40px" fill="blue" />
          </svg>

        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="">
          <Heading size={6} textColor="primary">SVG Groups</Heading>
          <CodePane
            lang="html"
            source={require("raw-loader!../assets/svg-groups.html")}
            textSize="24"
          />

          <br/>

          <svg width="300px" height="100px">
            <rect width="300px" height="100px" fill="white" />
            <g transform="translate(100, 10)">
              <circle cx="25px" cy="25px" r="20px" fill="red" />
              <circle cx="75px" cy="45px" r="40px" fill="blue" />
            </g>
          </svg>

        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="">
          <Heading size={6} textColor="primary">Interaction</Heading>
          <CodePane
            lang="javascript"
            source={`.on("eventName", (d) => {})`}
            textSize="24"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary">Things We Couldn't Cover</Heading>
          <List>
            <ListItem>Scales</ListItem>
            <ListItem>Data Manipulation</ListItem>
            <ListItem>Layouts</ListItem>
            <ListItem>Animation</ListItem>
            <ListItem>Dragging</ListItem>
            <ListItem>Geography</ListItem>
            <ListItem>Axis</ListItem>
            <ListItem>Number Formatting</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary">Resources</Heading>
          <List>
            <ListItem>
              <a href="https://d3js.org/" target="_blank">d3js.org</a>
            </ListItem>
            <ListItem>
              <a href="https://bl.ocks.org/mbostock" target="_blank">bl.ocks.org/mbostock</a>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
