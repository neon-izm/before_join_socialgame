import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>ほんわか言葉</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        ソーシャルゲームクライアントは大変です。まずは実装の詳細ではなく、概念をインストールしましょう
      </>
    ),
  },
  {
    title: <>アップデートされる</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        暇なときにアップデートされます。それ以外にもプルリクを受け付けているので、有識者による更新でアップデートされます。
      </>
    ),
  },
   {
    title: <>オープンソース</>,
	imageUrl: 'img/GitHub-Mark-120px-plus.png',
    description: (
      <>
        <a href="https://github.com/neon-izm/before_join_socialgame">https://github.com/neon-izm/before_join_socialgame </a>でプルリクを受け付けます
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="ソーシャルゲームのクライアントエンジニア入門以前">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              読み始める
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
