import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "EAT",
    href: "/docs/eat/intro",
    Svg: require("@site/static/img/dd.png").default,
    description: (
      <>
        What you eat directly impacts how long and how well you live. This
        section focuses on nutrition for longevity, covering superfoods,
        balanced diets, fasting protocols, and supplements that support cellular
        health. Learn how to fuel your body with the right nutrients to fight
        inflammation, boost metabolism, and promote overall vitality.
      </>
    ),
  },
  {
    title: "MIND",
    href: "/docs/mind/intro",
    Svg: require("@site/static/img/dd.png").default,
    description: (
      <>
        A sharp, resilient mind is key to living longer and better. This section
        delves into cognitive health, stress management, emotional well-being,
        and strategies to enhance neuroplasticity. Discover how mindfulness,
        meditation, lifelong learning, and mental exercises can help maintain
        clarity, creativity, and emotional balance as you age.
      </>
    ),
  },
  {
    title: "BODY",
    href: "/docs/sleep/intro",
    Svg: require("@site/static/img/dd.png").default,
    description: (
      <>
        Your body is the foundation of longevity. This section explores the
        latest science-backed strategies to maintain physical health, enhance
        mobility, and build resilience against aging. From strength training and
        cardiovascular fitness to recovery techniques and biohacking, we cover
        everything you need to stay active, prevent disease, and optimize your
        body's performance for a longer, healthier life.
      </>
    ),
  },
  {
    title: "SLEEP",
    href: "/docs/sleep/intro",
    Svg: require("@site/static/img/dd.png").default,
    description: (
      <>
        Quality sleep is the ultimate longevity hack. This section explores the
        science of rest, covering sleep cycles, circadian rhythms, and proven
        techniques to improve deep sleep. Discover how to optimize your
        nighttime routine, enhance sleep quality, and wake up feeling
        refreshed—so your body and mind can repair, recover, and thrive for
        years to come.
      </>
    ),
  },
];

function Feature({ Svg, title, description, href }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={href}>
          <img className={styles.featureSvg} src={Svg} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
