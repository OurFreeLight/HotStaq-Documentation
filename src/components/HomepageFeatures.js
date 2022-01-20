import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_feeling_proud_qne1.svg').default,
    description: (
      <>
        Develop your frontend, backend, tests, and containers all using the 
        same set of tools.
      </>
    ),
  },
  {
    title: 'Your Full Tech Stack',
    Svg: require('../../static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        With tech stacks growing in size, HotStaq is built with the entire 
        application's tech stack in mind. From unit testing, integrating 
        with CI/CD pipelines, documentation, and deployment, we got you 
        covered.
      </>
    ),
  },
  {
    title: 'Focused on Stability and Security',
    Svg: require('../../static/img/undraw_secure_login_pdn4.svg').default,
    description: (
      <>
        Easily create tests while you code that enriches your QA pipeline.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
