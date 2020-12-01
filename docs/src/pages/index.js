import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "How to create a Facebook Messenger Chatbot",
    imageUrl: "img/undraw_Group_chat_re_frmo.svg",
    description: (
      <>
        Use Facebook technologies to easily create a Chatbot with AI
        capabilities
      </>
    ),
  },
  {
    title: "Basic knowledge of training AI models",
    imageUrl: "img/undraw_Artificial_intelligence_re_enpp.svg",
    description: (
      <>
        Learn how to use Wit.ai to create intelligent conversational interfaces
        and train AI models to help your bot understand user input better
      </>
    ),
  },
  {
    title: "Have Fun with Chatbot in Class",
    imageUrl: "img/undraw_good_team_m7uu.svg",
    description: (
      <>
        Learn more about Facebook Messenger Platform and use it to create a
        useful application to help people stay safe
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Build your own Chatbot for Facebook Messenger using Wit.ai"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
