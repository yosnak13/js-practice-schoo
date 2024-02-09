// asyncとawait
// .thenが増えて入れ子になると可読性が悪化するので、awaitで繋ぐこの方法を使いたい。
async function newFunc() {
  const response = await fetch(
    'https://qiita.com/api/v2/items?query=tag:JavaScript'
  );
  const data = await response.json(); // response.jsonがdataに格納されるまで、次の処理は待つ
  console.log(data);
}

newFunc();
