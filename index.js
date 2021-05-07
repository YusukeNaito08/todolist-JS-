const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value; //value 値
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromCompleteList = (taraget) => {
  document.getElementById("incomplete-list").removeChild(taraget);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromCompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //li以下を初期化
    addTarget.textContent = null;
    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;
    //button(戻す)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストの取得
      const backText = deleteTarget.firstElementChild.innerText;
      createIncompleteList(backText);
    });
    //liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromCompleteList(deleteButton.parentNode);
  });

  //li. divタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
