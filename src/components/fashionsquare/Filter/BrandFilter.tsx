import React, { useState } from "react";
import { AlphabetFilterList, SubTab } from "../../../styles/FilterStyle";
import classNames from "classnames";

const korCode = [
  "ㄱ",
  "ㄴ",
  "ㄷ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅅ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const engCode = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

interface AlphabetCode {
  data: string[];
}
interface subTabsProps {
  controler: Function;
  selectedLang: string;
}
const SubTabs = ({ controler, selectedLang }: subTabsProps) => {
  return (
    <SubTab>
      <button
        type="button"
        className={classNames(
          "button__tab",
          selectedLang === "ko" && "button__tab--selected"
        )}
        onClick={() => controler()}
      >
        가나다
      </button>
      <button
        type="button"
        className={classNames(
          "button__tab",
          selectedLang === "en" && "button__tab--selected"
        )}
        onClick={() => controler()}
      >
        ABC
      </button>
    </SubTab>
  );
};

const AlphabetFilter = ({ data }: AlphabetCode) => {
  const [selected, setSeleted] = useState(0);

  return (
    <AlphabetFilterList>
      {data.map((el, idx) => {
        return (
          <li className="list-item" key={`alphabet-${idx}`}>
            <button
              type="button"
              className={classNames(
                "button__tab",
                idx === selected && "button__tab--selected"
              )}
              onClick={() => setSeleted(idx)}
            >
              {el}
            </button>
          </li>
        );
      })}
    </AlphabetFilterList>
  );
};

const BrandList = () => {
  return (
    <div className="box__brand-info">
      <ul className="list__brand">
        <li className="list-item">갤러리아 클락</li>
      </ul>
    </div>
  );
};

const BrandFilter = () => {
  const [lang, setLang] = useState("ko");
  const [codeList, setCodeList] = useState(lang === "ko" ? korCode : engCode);

  const subTabControl = () => {
    setLang(lang === "ko" ? "en" : "ko");
    setCodeList(lang === "ko" ? engCode : korCode);
  };

  return (
    <>
      <SubTabs controler={subTabControl} selectedLang={lang} />
      <AlphabetFilter data={codeList} />
      {/* <BrandList /> */}
    </>
  );
};

export default BrandFilter;
