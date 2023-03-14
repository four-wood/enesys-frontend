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
        contentName: "太陽光発電ソリューション事業",
        contentLink: "solar",
        contentImg: "solar.jpg",
      },
      setsubi: {
        contentName: "設備ソリューション事業",
        contentLink: "setubi",
        contentImg: "solar.jpg",
      },
      visible:{
        contentName: "電力見える化事業",
        contentLink: "visible",
        contentImg: "solar.jpg",
      },
      electricity:{
        contentName: "電力販売事業",
        contentLink: "electricity",
        contentImg: "solar.jpg",
      }
    },
  },
  contact: {
    pageName: "お問い合わせ",
    pageNameEn: "Contact",
    link: "contact",
    src: "contact.jpg",
    phoneNumber: "0120-142-462",
  },
};

export default new (class pagesConfig {
  getPage(id){
    return PAGE[id];
  }
  getAllPage(){
    return PAGE;
  }
  getContents(contentName){
    return PAGE['business'].contents[contentName];
  }
})();
