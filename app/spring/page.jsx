import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";

const SpringPage = () => {
  return (
    <div>
      {/* Wrap only the button with Link */}
      <Link href="/spring/detail">
        <button>detail へ</button>
      </Link>

      {/* Button Component */}
      <Button color="red" />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SpringPage;
