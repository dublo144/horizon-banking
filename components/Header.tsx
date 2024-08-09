import React from "react";

type Props = {
  type: string;
  title: string;
  userFirstName: string;
  subTitle: string;
};

export default function Header({
  type = "title",
  title,
  userFirstName,
  subTitle,
}: Props) {
  return (
    <div className="header">
      <h1 className="header-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{userFirstName}</span>
        )}
      </h1>
      <p className="header-subtitle">{subTitle}</p>
    </div>
  );
}
