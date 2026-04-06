interface Work {
    title: string;
    thumbnail: string; //サムネ・画像のパス
    siteUrl: string;
    githubUrl: string;
    description: string;
}

const works: Work[] = [  //Work[] <= []がないとたった一つのという定義になる。
  {
    title: "Udon-ya Project",
    thumbnail: "/udon.png", // 先ほど確認したパス
    siteUrl: "https://udon-restaurant-lp.vercel.app/",
    githubUrl: "https://github.com/ren12123/udon-restaurant-lp", // 自分のリポジトリURL
    description: "HTML/CSSの基礎を固めるために制作した、うどん屋の紹介サイトです。"
  },
  {
    title: "Gallery Project",
    thumbnail: "/hero-gall.png",
    siteUrl: "https://modern-gallery-site.vercel.app/",
    githubUrl: "https://github.com/ren12123/modern-gallery-site",
    description: "グリッドレイアウトを駆使した、モダンなギャラリーサイトです。"
  },
  {
    title: "Corporate LP Project",
    thumbnail: "/TRA.png",
    siteUrl: "https://lp-for-company.vercel.app/",
    githubUrl: "https://github.com/ren12123/LP-for-company",
    description: "信頼感を重視したコーポレートサイトのランディングページです。"
  }
];

const container = document.getElementById('works-container');

if (container) {
  container.innerHTML = works.map(work => `
    <article class="work-card">
      <div class="work-card__image-wrapper">
        <a href="${work.siteUrl}" target="_blank" rel="noopener noreferrer">
          <img class="work-card__img" src="${work.thumbnail}" alt="${work.title}">
        </a>
      </div>
      <div class="work-card__body">
        <h3 class="work-card__title">${work.title}</h3>
        <p class="work-card__text">${work.description}</p>
        <div class="work-card__links">
          <a href="${work.siteUrl}" target="_blank" class="btn btn--primary">View Site</a>
          <a href="${work.githubUrl}" target="_blank" class="btn btn--outline">GitHub</a>
        </div>
      </div>
    </article>
  `).join('');
}