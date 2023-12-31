// 「Hello World」とコンソールに出力してください
console.log("Hello World");

// 「にんじゃわんこ」とコンソールに出力してください
console.log("にんじゃわんこ");

// 以下の行をコメントアウトしてください
//console.log("この行をコメントアウトしてください");

// 5と3を足した値を出力してください
console.log(5+3);

// 20から8を引いた値を出力してください
console.log(20-8);

// "4 + 5" を文字列として出力してください
console.log( "4 + 5" );

// 8と4をかけた結果を出力してください
console.log(8*4);

// 24を4で割った結果を出力してください
console.log(24/4);

// 7を2で割った余りを出力してください
console.log(7%2);

// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log("ひつじ"+"仙人");

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log("20"+"15");

// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log(name);


        /*
            変数命名ルール
                ・英単語を用いる
                ・２語以上用いる場合は大文字で区切る
                ・小文字開始
                ・数字開始は良くない
                ・ローマ字で日本語を書くのはダメ
                ・日本語（かな、カナ、漢字）を用いない
        */

// 変数lengthを定義してください
let length = 5;

// 変数lengthの値を出力してください
console.log(length);

// 変数lengthを用いて、円の面積を出力してください
console.log(length*length*3);

let name = "にんじゃわんこ";
console.log(name);

// 変数nameの値を"とりずきん"に更新してください
name = "とりずきん";

// 変数nameの値を出力してください
console.log(name);

let number = 7;
console.log(number);

// 変数numberの値に3を加えてください
number+=3;
//number = number +3 の省略形

console.log(number);

// 変数numberの値を2で割ってください
number/=2;

console.log(number);


// const: 変数は1度代入した値を更新することができましたが、定数は値を更新することはできません。
// 定数languageを定義してください
const language = "フランス語";

// 定数languageの値を出力してください
console.log(language);

// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language+"を話せます");


        /*
            左の図のように、文字列の中で「${定数}」とすることで、文字列の中に定数や変数を含めることができます。
            この時、文字列全体をバッククォーテーション（`）で囲む必要があります。
            また、右の図のように複数の変数や定数を埋め込むことも可能です。
        */

const name = "にんじゃわんこ";
const age = 14;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name}です`);

// 「今は〇〇歳です」と出力してください
console.log(`今は${age}歳です`);
            
        //シングルクオーテーションとバッククオーテーションは違う


const level = 12;

// 条件式を「level > 10」とするif文を作ってください
if(level>10){
    console.log("レベルが10より大きいです");
}
        
const age = 24;

// 「age >= 20」を出力してください
console.log(age>=20);

// 「age < 20」を出力してください
console.log(age<20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if(age>=20){
  console.log("私は20歳以上です");
}

        /*
            比較演算子には、左と右の値が等しいかを調べるものもあります。
            「a === b」はaとbが等しければtrue、等しくなければfalseになります。
            「a !== b」はその逆です。
        */

const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if(password === "ninjawanko"){
    console.log("ログインに成功しました");
}



// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if(password !== "ninjawanko"){
    console.log("パスワードが間違っています");
}

const age = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else{
  console.log("私は20歳未満です");
}

const age = 17;

// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else if(age>=10){
  console.log("私は20歳未満ですが、10歳以上です");
}

 else {
  console.log("私は10歳未満です");
}

const age = 24;

// 指定された条件のif文を作成してください
if(age>=20&&age<30){
  console.log("私は20代です");
}

        /*
            信号機の色を表す定数colorの値によって処理を分岐したい、という例です。
            このように、ある値によって処理を分岐する場合にswitch文を用いることができます。
        */

        /*
            switch文の中にcaseを追加することで処理を分けることができます。
            右の図では、定数colorの値が「赤」であるときに「ストップ！」という文字列が出力されるようになっています。
        */

const rank = 2;

switch (rank) {
    case 1:         //caseの後はダブルコロンであることに注意
    console.log("金メダルです！");
    break;

    // rankの値が2のcaseを追加してください
    case 2:
    console.log("銀メダルです！");
    break;
    // rankの値が3のcaseを追加してください
    case 3:
    console.log("銅メダルです！");
    break;
    // defaultの処理を追加してください
    default:
    console.log("メダルはありません");
    break;
  
}


