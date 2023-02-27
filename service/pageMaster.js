const PAGE = {
  about: {
    pageName: "会社情報",
    pageNameEn: "About Us",
    link: "about",
    src: "about.jpg",
    content: {
      topMessage: {
        contentName: "代表挨拶",
      },
      companyProfile: {
        contentName: "企業概要",
      },
      access:{
        contentName: "アクセス",
      }
    },
  },
  business: {
    pageName: "事業内容",
    pageNameEn: "Business",
    link: "business",
    src: "business.jpg",
    content: {
      solar: {
        contentName: "太陽光ソリューション事業",
      },
      setsubi: {
        contentName: "設備ソリューション事業",
      },
      visible:{
        contentName: "電力見える化事業",
      }
    },
  },
};

export default new (class pagesConfig {
  getPage(id){
    return PAGE[id];
  }
})();
