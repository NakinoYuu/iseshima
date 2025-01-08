import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/home/page.module.css";

import menuImage from "@/public/bgImg/メニュー.svg";
import cloudImage from "@/public/bgImg/ファーストビュー背景2.svg";
import seaImage from "@/public/bgImg/南伊勢について背景.svg";
// import mountainImage from "@/public/bgImg/モデルコース背景.png";
// import seasonImage from "@/public/bgImg/季節のコース背景.png";
// import contactImage from "@/public/bgImg/お問い合わせ背景.png";

export default function Home() {
  return (
    <div className="pageContent">
      {/* メニュー */}
      <header className="menu">
        <Image alt="メニューアイコン" src={menuImage} />
      </header>
      {/* ファーストビュー */}
      <div className="first">
        <Image alt="空の背景" src={cloudImage} />
      </div>
      {/* アバウト */}
      <div className="about">
        {/* <Image alt="海の背景" fill src={seaImage} className="seaBg " /> */}
      </div>
      {/* モデルコース */}
      <div className="modelCourse"></div>
      {/* 季節のコース */}
      <div className="season"></div>
      {/* お問い合わせ */}
      <div className="contact"></div>
      {/* ボタンサンプル */}
      {/* <Link href="/spring">
        <button>spring へ移動</button>
      </Link> */}
    </div>
  );
}
