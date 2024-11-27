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

const SubTabs = () => {
  return (
    <SubTab>
      <button type="button" className="button__tab button__tab--selected">
        가나다
      </button>
      <button type="button" className="button__tab">
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

const BrandFilter = () => {
  const [lang, setLang] = useState("ko");
  const [codeList, setCodeList] = useState(korCode);

  return (
    <>
      <SubTabs />
      <AlphabetFilter data={codeList} />
    </>
  );
};

export default BrandFilter;
