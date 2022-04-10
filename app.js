/*今日の運勢*/
const omikuji_items = ["大吉","中吉","小吉","凶"];
const btn = document.getElementById("btn");
const result = document.getElementById("result")
let omikujiIndex = 0;

/*クリックしたらおみくじ結果生成*/
btn.addEventListener("click", function(){
    let omikujiIndex = Math.floor(Math.random() * omikuji_items.length);
    result.innerHTML = omikuji_items[omikujiIndex];
    let commentIndex =  Math.floor(Math.random() * omikuji_comments.length);
    comment.innerHTML = omikuji_comments[commentIndex];
});


