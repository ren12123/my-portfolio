interface Work {
    title: string;
    thumbnail: string;
    siteUrl: string;
    githubUrl: string;
    description: string;
    credit: string;    // 出典元
    tags: string[];    // 使用技術タグ
}

const works: Work[] = [
  {
    title: "Udon-ya Project",
    thumbnail: "/udon.png",
    siteUrl: "https://udon-restaurant-lp.vercel.app/",
    githubUrl: "https://github.com/ren12123/udon-restaurant-lp",
    description: "伝統的な和食の雰囲気を活かした、レスポンシブ対応のランディングページです。問い合わせフォームに未入力時のエラー表示など実務レベルのユーザー体験（UX）を考慮しています。",
    credit: "Design by <a href='https://www.figma.com/@traveler20' target='_blank' rel='noopener noreferrer'>おおつぼ @traveler20 様</a>",
    tags: ["HTML", "SCSS", "Responsive"]
  },
  {
    title: "Gallery Project",
    thumbnail: "/hero-gall.png",
    siteUrl: "https://modern-gallery-site.vercel.app/",
    githubUrl: "https://github.com/ren12123/modern-gallery-site",
    description: "CSS Gridを駆使した、視認性の高いモダンなギャラリーサイトです。要素の整列とTypeScriptによる動的な展開を実装しています。",
    credit: "Design by <a href='https://code-jump.com/gallery-menu/' target='_blank' rel='noopener noreferrer'>コードジャンプ Codejump 様</a>",
    tags: ["TypeScript", "CSS Grid", "Vite"]
  },
  {
    title: "Corporate LP Project",
    thumbnail: "/TRA.png",
    siteUrl: "https://lp-for-company.vercel.app/",
    githubUrl: "https://github.com/ren12123/LP-for-company",
    description: "信頼感を重視した企業向けLP。BEMを用いたクラス設計により、保守性と拡張性を意識したコーディングを行いました。",
    credit: "Design by <a href='https://www.figma.com/@traveler20' target='_blank' rel='noopener noreferrer'>おおつぼ @traveler20 様</a>",
    tags: ["BEM", "SCSS", "Professional UI"]
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
        <div class="work-card__tag-list">
          ${work.tags.map(tag => `<span class="work-card__tag-item">${tag}</span>`).join('')}
        </div>
        <h3 class="work-card__title">${work.title}</h3>
        <p class="work-card__text">${work.description}</p>
        <p class="work-card__credit">Source: ${work.credit}</p>
        <div class="work-card__links">
          <a href="${work.siteUrl}" target="_blank" class="btn btn--primary">View Site</a>
          <a href="${work.githubUrl}" target="_blank" class="btn btn--outline">GitHub</a>
        </div>
      </div>
    </article>
  `).join('');
}

// スムーズスクロールの修正版 (thisエラーを回避)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
    e.preventDefault();
    // thisを明示的にHTMLAnchorElementとして扱う、またはcurrentTargetを使う
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});