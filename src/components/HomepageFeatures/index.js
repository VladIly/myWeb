import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fact 1 ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The taste of dishes prepared from flour has been known for a long time, because our ancestors began to grow millet, wheat and barley about 5000 years ago. Rye appeared a little later - about 1000 years ago.
      </>
    ),
  },
  {
    title: 'Fact 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Buckwheat porridge, one of the most common dishes on our table, appeared thanks to the trade routes that passed through our lands at that time.
      </>
    ),
  },
  {
    title: 'Fact 3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Although sunflowers appeared on the territory of Ukraine only in the 18th century, vegetable oils have been known (together with animal oil, in particular pork oil) for a long time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
