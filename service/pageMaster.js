const PAGE = {
  about: {
    header: true,
    pageName: "会社情報",
    pageNameEn: "About Us",
    link: "about",
    src: "about.jpg",
    contents: {
      topMessage: {
        contentName: "代表挨拶",
        contentLink: "message",
      },
      companyProfile: {
        contentName: "企業概要",
        contentLink: "profile",
      },
      access: {
        contentName: "アクセス",
        contentLink: "access",
      },
    },
  },
  business: {
    header: true,
    pageName: "事業内容",
    pageNameEn: "Business",
    link: "business",
    src: "business.jpg",
    contents: {
      solar: {
        num: ".01",
        contentName: "太陽光発電ソリューション事業",
        contentLink: "solar",
        contentImg: "solar.jpg",
      },
      setsubi: {
        num: ".02",
        contentName: "設備ソリューション事業",
        contentLink: "setsubi",
        contentImg: "setsubi.jpg",
        goods: {
          aircon: {
            name: "空調・換気・電気設備",
            img: "aircon.jpg",
            desc: {
              renkei: {
                sup:
                  "ヤブシタグループ企業との連携により、各種設備の販売・工事をワンストップでご提案できます。",
              },
            },
          },
          led: {
            name: "LED電気設備",
            img: "led.jpg",
            desc: {
              support: {
                title: "安心の5年保証",
                sup: "機器の保障のみではなく施工に関する保障まで致します。",
              },
              suggest: {
                title: "最適な機種をご提案",
                sup:
                  "各メーカー得意分野の機種をお客様に合わせご提案致します。",
              },
              lease: {
                title: "リースのご活用",
                sup: "リースでの導入や初期費用0円でのご提案を致します。",
              },
            },
          },
          hybrid: {
            name: "業務用ハイブリッド給湯機",
            img: "kitchen.jpg",
            desc: {
              teian: {
                sup:
                  "給湯機をご利用のお客様向けに高効率の電気/ガス業務用ハイブリッド給湯機を導入費0円でご提案可能です。",
              },
            },
          },
        },
      },
      system: {
        num: ".03",
        contentName: "電力見える化事業",
        contentLink: "system",
        contentImg: "system.jpg",
      },
      energy: {
        num: ".04",
        contentName: "電力販売事業",
        contentLink: "energy",
        contentImg: "solar.jpg",
      },
    },
  },
  contact: {
    header: true,
    pageName: "お問い合わせ",
    pageNameEn: "Contact",
    link: "contact",
    src: "contact.jpg",
    phoneNumber: "0120-142-462",
  },
  privacy:{
    header: false,
    pageName: "プライバシーポリシー",
    pageNameEn:"Privacy",
    link:"privacy",
    src: "privacy.jpg",
  }
};

export default new (class pagesConfig {
  getPage(id) {
    return PAGE[id];
  }
  getAllPage() {
    return PAGE;
  }
  getContents(contentName) {
    return PAGE["business"].contents[contentName];
  }
})();
