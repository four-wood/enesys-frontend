const PAGE = {
  about: {
    pageName: "会社情報",
    pageNameEn: "About Us",
    link: "about",
    src: "about.jpg",
    contents: {
      topMessage: {
        contentName: "代表挨拶",
        contentLink: "about",
      },
      companyProfile: {
        contentName: "企業概要",
        contentLink: "profile",
      },
      access:{
        contentName: "アクセス",
        contentLink: "access",
      }
    },
  },
  business: {
    pageName: "事業内容",
    pageNameEn: "Business",
    link: "business",
    src: "business.jpg",
    contents: {
      solar: {
        contentName: "太陽光ソリューション事業",
        contentLink: "solar",
      },
      setsubi: {
        contentName: "設備ソリューション事業",
        contentLink: "setubi",
      },
      visible:{
        contentName: "電力見える化事業",
        contentLink: "visible",
      },
      electricity:{
        contentName: "電力販売事業",
        contentLink: "electricity",
      }
    },
  },
  contact: {
    pageName: "お問い合わせ",
    pageNameEn: "Contact",
    link: "contact",
    src: "contact.jpg",
  },
};

export default new (class pagesConfig {
  getPage(id){
    return PAGE[id];
  }
  getAllPage(){
    return PAGE;
  }
})();
