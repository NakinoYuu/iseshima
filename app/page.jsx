"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/styles/home/style.css";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/bgImg/firstViewImg.jpg",
    "/bgImg/firstViewImg2.jpg",
    "/bgImg/firstViewImg3.jpg",
  ];
  // 次の画像へ
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 前の画像へ
  const handleBack = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="pageContent">
      <header>{/* メニュー画像入れる */}</header>
      {/* ファーストビュー */}
      <div className="firstView">
        <div className="firstViewBg">
          {/* 背景画像 */}
          <div
            className="firstViewImg"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
          >
            {/* 海の画像とか */}
            <div className="firstViewButton">
              <button className="firstViewBack" onClick={handleBack}>
                {/* 三角は画像 */}
              </button>
              <button className="firstViewNext" onClick={handleNext}>
                {/* 三角は画像 */}
              </button>
            </div>
          </div>
        </div>
        <div className="firstViewCharacter">
          <div className="firstViewNinja">
            {/* キャラクラーの画像が入るクラスネームも忍者じゃないなら変更 */}
          </div>
          <div className="firstViewSpeechBubble">
            <p>景色が良く、海風が心地いいでござる！</p>
          </div>
        </div>
        <button className="firstViewMore">
          <div className="Details">
            <p>このコースを見る</p>
            <div className="firstViewMoreCircle"></div>
          </div>
        </button>
      </div>
      {/* 伊勢志摩について */}
      <div className="about">
        <div className="aboutBg">
          {/* 背景画像 */}
          <div className="aboutContent">
            <h1 className="title">伊勢志摩紹介</h1>
            <div className="map">
              {/* マップの背景入れる */}
              <div className="mapIllustration">{/* マップの画像入れる */}</div>
            </div>
            <div className="aboutSerif">
              <div className="aboutSpeechBubble">
                {/* 吹き出し画像入れる */}
                <p>
                  <span>
                    伊勢市/鳥羽市/志摩市/南伊勢町/大紀町/度会町/玉城町
                  </span>
                  の7つから南伊勢は構成されています。
                  <br /> <span>大伊勢海老</span> や <span>内瀬みかん</span>{" "}
                  が特に有名です。豆知識ニンニン!
                </p>
              </div>
              <div className="aboutNinja">
                {/* キャラクラーの画像が入るクラスネームも忍者じゃないなら変更 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* モデルコース */}
      <div className="modelCourse">
        <div className="modelCourseBg">
          {/* 背景画像 */}
          <div className="modelCourseContent">
            <h1 className="title">モデルコース</h1>
            <div className="modelCourseTitleBg">
              {/* タイトルの背景入れる */}
              <p>昔ながらの伊勢の街並みを体験でござる！</p>
            </div>
            <div className="modelCourseDetailsContent">
              {/* 大きな二つの枠を横並びにする */}
              <div className="modelCourseDetails">
                <div className="modelCourseSerif">
                  <div className="modelCourseNinja">
                    {/* キャラクラーの画像が入るクラスネームも忍者じゃないなら変更 */}
                  </div>
                  {/* ↓div入れないと横並び無理かも */}
                  <p>
                    伊勢神宮までの道のりを歩いていきます。そこには昔から変わらない街並みが並んでいます。このモデルコースでは、まるでタイムスリップしたかのような体験ができます。ニンニン！
                  </p>
                </div>
                <button className="modelCourseMore">
                  <div className="Details">
                    <p>このコースを見る</p>
                    <div className="modelCourseMoreCircle"></div>
                  </div>
                </button>
              </div>
              <div className="modelCourseImgContent">
                <div className="modelCourseBgImg">
                  {/* ここにコースの背景画像入れる */}
                  <div className="modelCourseImg">
                    {/* ここにコースの画像入れる */}
                  </div>
                </div>
                <div className="modelCourseButton">
                  <button className="modelCourseBack"></button>
                  <button className="modelCourseNext"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 季節別スポット */}
      <div className="seasonSpot">
        <div className="seasonSpotBg">
          {/* 背景画像 */}
          <div className="seasonSpotContent">
            <h1 className="title">季節のスポット</h1>
            <div className="seasonDetailsBg">
              {/* 季節ごとの背景画像入れる */}
              {/* 左側 */}
              <div className="seasonSpotLeft">
                <div className="seasonSpotDetails">
                  <h2 className="seasonTitle">春のスポット</h2>
                  <p className="seasonStyle">
                    日本ならではの桜の名所が三重県にはたくさんあります。映えスポットや、桜を使った期間限定料理のスポットもあるでござる！
                  </p>
                </div>
                <button className="seasonSpotMore">
                  <div className="Details">
                    <p>このコースを見る</p>
                    <div className="seasonSpotMoreCircle"></div>
                  </div>
                </button>
              </div>

              {/* 右側 */}
              <div className="seasonSpotImg">{/* 画像入れる */}</div>
            </div>
          </div>
          {/* ボタン */}
          <div className="seasonSpotButton">
            <button className="seasonSpotBack"></button>
            <button className="seasonSpotNext"></button>
          </div>
        </div>
      </div>
      {/* お問い合わせ */}
      <div className="contact">
        <div className="contactBg">
          {/* 背景画像 */}
          <div className="contactContact">
            {/* 位置調節用 */}
            <h1 className="title">お問い合わせ</h1>
            <div className="contentDetailBox">
              <div className="navBox">
                <div className="nav">
                  <p>トップ</p>
                  <div className="navArrow">{/* 画像入れる */}</div>
                </div>
                <div className="nav">
                  <p>伊勢志摩紹介</p>
                  <div className="navArrow">{/* 画像入れる */}</div>
                </div>
                <div className="nav">
                  <p>モデルコース</p>
                  <div className="navArrow">{/* 画像入れる */}</div>
                </div>
                <div className="nav">
                  <p>季節のスポット</p>
                  <div className="navArrow">{/* 画像入れる */}</div>
                </div>
              </div>
              <div className="contentNinja">
                {/* キャラクラーの画像が入るクラスネームも忍者じゃないなら変更 */}
              </div>
              <div className="contentDetails">
                <div className="contentSpeechBubble">
                  {/* 吹き出し画像入れる */}
                  <p>
                    最後まで見てくれてありがとう！
                    <br />
                    伊勢の魅力を楽しんでくれたかな？
                    <br />
                    また会いたいでござる！！
                  </p>
                </div>
                <div className="ContactInformationBox">
                  <div className="ContactInformation">
                    <p>
                      拙者の連絡先でござる！ <br />
                      お気軽にお申し付けください。
                      <br />
                      ニンニン！！
                    </p>
                    <p>☎︎ 000-XXX-XXX</p>
                    <p>✉️ creative@ecc.ac.jp</p>
                  </div>
                </div>
              </div>
              <div className="toTop">
                <a href="#">{/* 矢印画像入れる */}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
