<template>
  <section id="system">
    <PartsCommonBusinessHeading :contentName="'system'" />
    <div class="enesystem-flex">
      <div class="text-container">
        <div class="title">
          自動制御も可能な<span class="green">見える化システム</span>
        </div>
        <div class="text">
          デマンドに合わせた制御や温湿度センサーと連動した制御などが可能なクラウド電力見える化システム「えねシステム」を販売・サービス提供しております。
        </div>
        <div class="enesystem-logo-container">
          <PartsCommonEnesystem />
        </div>
      </div>
      <div class="img-container">
        <img src="~/assets/img/enesystem.png" alt="" />
      </div>
    </div>
    <div class="control">
      <PartsCommonSectionHeader class="center">
        <template v-slot:jp>自動制御例</template>
        <template v-slot:en>Automatic Control</template>
      </PartsCommonSectionHeader>
      <div class="control-container">
        <div class="control-flex">
          <div class="ex">
            <img src="~/assets/img/cut.png" alt="" />
            <h4>ピークカット制御<span class="small">（デマンド制御）</span></h4>
            <p>
              ピーク電力（最大デマンド）を目標に合わせて制御します。ピーク電力をカットすることにより契約電力の変更を行い、基本料金を削減することができます。
            </p>
          </div>
          <div class="ex">
            <img src="~/assets/img/temp.png" alt="" />
            <h4>温湿度制御</h4>
            <p>
              温湿度センサーとの連携により無駄のない空調設備の運転を行います。エアコン等に付属のサーモではムラや誤差が多く、過剰な運転に繋がる場合があります。
            </p>
          </div>
        </div>
        <div class="control-flex">
          <div class="ex">
            <img src="~/assets/img/moon.png" alt="" />
            <h4>ピークカット制御<span class="small">（デマンド制御）</span></h4>
            <p>
              消し忘れなどで営業時間外に運転している設備を強制的に制御を行います。
            </p>
          </div>
          <div class="ex">
            <img src="~/assets/img/rotation.png" alt="" />
            <h4>ピークカット制御<span class="small">（デマンド制御）</span></h4>
            <p>
              一定時間制御を繰り返し、気付かないところで削減を行います。定期周期で制御が行われ、エアコン等の空調設備に有効です。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "@/assets/css/resources.scss" as *;
#system {
  .enesystem-flex {
    display: flex;
    .text-container {
      width: 50%;
      padding: 10%;
      .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .text {
        font-size: 16px;
        line-height: 1.5;
      }
      .enesystem-logo-container {
        margin-top: 20px;
        width: 100px;
      }
    }
    .img-container {
      width: 50%;
      padding-left: 20px;
      img {
        width: 80%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .control {
    .control-container {
      margin-top: 80px;
      .control-flex {
        display: flex;
        justify-content: center;
        gap: 80px;
        height: 350px;
        .ex {
          width: 350px;
          img {
            width: 100%;
          }
          h4 {
            text-align: center;
            font-size: 20px;
            margin: 20px 0;
            .small {
              font-size: 14px;
            }
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
