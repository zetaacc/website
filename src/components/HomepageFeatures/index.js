import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '项目：OSKM 开源知识地图',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        OSKM ~ Knowledge Map of Open Source 开源知识地图，
        旨在通过开放协作来开发和维护一个开源领域的公共知识地图，
        用于指导个人及组织学习、研究、使用、参与贡献开源，
        以及创建自己的开源项目与社区，制定自己的开源战略，
        从而推动实现开源生态的可持续发展。
        <br/><br/>
        <a href="https://github.com/OpenSourceKM" target="_blank">点击去看看</a>
      </>
    ),
  },
  {
    title: '社区：平台工程社区·中国',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        平台工程社区，为开发者而生！
        聚集平台工程的倡导者、实践者、参与者、关注者，
        共建开放包容、创新自治、多元中立的沟通交流与协作平台。
        <br/><br/>
        <a href="https://github.com/pecommunity/" target="_blank">点击去看看</a>
        <br/><img src="img/platform-qrcode_430.jpg" width="150"/>
      </>
    ),
  },
  {
    title: '关注：@数理话',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        关于数理、代码、科学、技术、工程以及科幻 ！
        Smart is sexy forever.
        <br/><br/>
        微信搜索"数理话"关注，亦可关注<a href="https://www.zhihu.com/column/c_1347108242091438080" target="_blank">知乎</a>、<a href="https://space.bilibili.com/478478184" target="_blank">B站</a>。
        <br/><img src="img/scibuzz-qr.png" width="150"/>
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
