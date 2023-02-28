<template>
  <section id="simulation">
    <div id="map">
      <PartsCommonJapan />
    </div>
    <div class="simulation-flex">
      <div class="img-container">
        <img src="~/assets/img/simulation_header.jpg" alt="" />
      </div>
      <div class="result-container">
        <div class="board">
          <p class="catch-color">シミュレーション</p>
          <h4>水産加工工場の場合</h4>
          <p>水産加工工場を所有している事業者様が購入型で導入した場合</p>
          <div class="melit">
            <img class="melit-img" src="~assets/img/icon_good.png" />
            <div class="melit-text">
              <p>
                年間<span class="bold">214,155</span><span>kWh</span>の発電量
              </p>
              <p>
                電気料金を年間<span class="bold">470</span><span>万円</span>削減
              </p>
              <p>CO2を年間約<span class="bold">98</span><span>t</span>削減</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
#simulation {
  #map {
    width: 500px;
    height: 500px;
  }
  .simulation-flex {
    display: flex;
    height: 600px;
    .img-container {
      width: 50%;
      img {
        height: 100%;
        width: 120%;
        object-fit: cover;
      }
    }
    .result-container {
      width: 50%;
      position: relative;
      display: flex;
      align-items: center;
      .board {
        width: 90%;
        position: absolute;
        z-index: 2;
        padding: 40px 60px;
        text-align: left;
        margin-right: 0;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        box-shadow: 4px 4px 8px rgb(0 0 0 / 40%);
        .catch-color {
          padding: 5px 20px;
          display: inline-block;
          font-family: "Noto Sans JP";
          font-weight: 700;
          color: white;
          font-size: 16px;
          margin-bottom: 30px;
          background-color: #00be3a;
        }
        h4 {
          font-family: "Noto Sans JP";
          font-weight: 700;
          font-size: 32px;
          color: #00be3a;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        p {
          font-family: "Noto Sans JP";
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .melit {
          display: flex;
          justify-content: start;
          align-items: center;
          .melit-img {
            margin-right: 20px;
          }
          .melit-text {
            p {
              font-family: "Noto Sans JP";
              font-size: 20px;
              font-weight: 700;
              line-height: 30px;
              margin: 0;
            }
            span {
              font-size: 20px;
              color: #00be3a;
            }
            .bold {
              font-size: 36px;
              line-height: 52px;
            }
          }
        }
      }
    }
  }
}
</style>
