import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Simple tutorials",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        I create simple tutorials to get you started coding. Need help? Feel
        free to contact me for support.
      </>
    )
  },
  {
    title: "Built with Docusaurus",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed to be easily installed and used to get my
        website up and running quickly.
      </>
    )
  },
  {
    title: "I 💖  React",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        I have experience with various web technologies. React is my favourite
        front-end JavaScript library.
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
