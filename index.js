const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value; //value 値
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(p);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd()); //querySelector
