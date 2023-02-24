<template>
  <section id="business">
    <div class="section-header motion" data-delighter="">
      <div class="header-line"></div>
      <h3>Our Business</h3>
      <h3>事業内容</h3>
    </div>
    <div class="biz-container">
      <div class="biz-img motion" data-delighter="">
        <img class="para" alt="電力販売" src="[img]service-1.jpg" />
      </div>
      <div class="biz-text-wrapper motion-slow" data-delighter="">
        <div
          class="biz-text-container"
          onclick="location.href='business/#solar'"
          type="button"
        >
          <div class="biz-text">
            <div class="biz-text-inner motion-slow" data-delighter="">
              <p>01.</p>
              <h3>太陽光発電ソリューション</h3>
              <p>
                法人のお客様向けに、自家消費型の太陽光発電システムやPPA契約などお客様に合った設備・料金プランをご提案いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="biz-container">
      <div class="biz-img biz-odd motion" data-delighter="">
        <img class="para" alt="設備ソリューション" src="[img]service-2.jpg" />
      </div>
      <div class="biz-text-wrapper motion-slow" data-delighter="">
        <div
          class="biz-text-container-odd"
          onclick="location.href='business/#solution'"
          type="button"
        >
          <div class="biz-text">
            <div class="biz-text-inner motion-slow" data-delighter="">
              <p>02.</p>
              <h3>設備ソリューション</h3>
              <p>
                BCP対策・テナントビル等の運営の効率化、高効率の最新設備、省エネ関連等、幅広く対応します。
              </p>
            </div>
          </div>
          <div class="biz-arrow">
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="biz-container">
      <div class="biz-img motion" data-delighter="">
        <img class="para" alt="システム" src="[img]service-4.jpg" />
      </div>
      <div class="biz-text-wrapper motion-slow" data-delighter="">
        <div
          class="biz-text-container"
          onclick="location.href='business/#system'"
          type="button"
        >
          <div class="biz-text">
            <div class="biz-text-inner motion-slow" data-delighter="">
              <p>03.</p>
              <h3>電力見える化システム</h3>
              <p>
                クラウド電力見える化と自動制御を可能にする「えねSYSTEM」を販売しております。
              </p>
            </div>
          </div>
          <div class="biz-arrow motion" data-delighter="">
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="biz-container">
      <div class="biz-img biz-odd motion" data-delighter="">
        <img class="para" alt="電力販売" src="[img]service-3.jpg" />
      </div>
      <div class="biz-text-wrapper motion-slow" data-delighter="">
        <div
          class="biz-text-container-odd"
          onclick="location.href='business/#retail'"
          type="button"
        >
          <div class="biz-text">
            <div class="biz-text-inner motion-slow" data-delighter="">
              <p>04.</p>
              <h3>電力販売事業</h3>
              <img alt="powerd by tepco" src="[img]pot.png" />
              <p>電気の品質はそのままで、低価格の電力販売</p>
            </div>
          </div>
          <div class="biz-arrow">
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#business {
  padding: 40px 0;
  background-color: #f2f2f2;
}

.biz-container {
  width: 100%;
  height: 430px;
  display: flex;
  margin-bottom: 40px;
}

.biz-img {
  width: 60%;
}

.biz-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.biz-text-wrapper {
  width: 40%;
  position: relative;
  display: flex;
  align-items: center;
}

.biz-text-container {
  width: 36vw;
  height: 24vw;
  max-height: 280px;
  position: absolute;
  left: -10vw;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 5px #000;
  cursor: pointer;
  transition: 0.2s ease;
}

.biz-odd {
  order: 2;
}

.biz-text-container-odd {
  width: 36vw;
  height: 24vw;
  max-height: 280px;
  position: absolute;
  left: 14vw;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 5px #000;
  cursor: pointer;
  z-index: 10;
  transition: 0.2s ease;
}

.biz-text-container:hover,
.biz-text-container-odd:hover {
  background-color: #e5f1e8;
}

.biz-text img {
  width: 160px;
  margin-top: 10px;
}

.biz-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86%;
}

.biz-text-inner {
  width: 86%;
}

.biz-text p {
  font-size: 16px;
  line-height: 18px;
}

.biz-text p:first-of-type {
  font-size: 14px;
  color: #b3b3b3;
  margin-bottom: 10px;
}

.biz-text h3 {
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 2px;
  display: inline-block;
  margin-right: 12px;
}

.biz-text p:last-of-type {
  margin-top: 20px;
}

.biz-arrow {
  width: 12%;
  position: relative;
}

.biz-arrow i {
  color: #b3b3b3;
  position: absolute;
  top: 48%;
  left: 50%;
  font-size: 20px;
  transition: 0.3s ease;
}

.biz-text-container:hover .biz-arrow i,
.biz-text-container-odd:hover .biz-arrow i {
  left: 55%;
}
</style>
