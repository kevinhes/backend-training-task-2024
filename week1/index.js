// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：

// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。

// 1.1 範例
const alexAge = 25;
// 1.2
const alexMembershipID = "GYM2024-12345"
// 1.3
const isRunningOnTreadmill = true
// 1.4
console.log('alexAge', alexAge, 'alexMembershipID', alexMembershipID, 'isRunningOnTreadmill', isRunningOnTreadmill);


// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意

const yogaGroupClass = 300;
const trainingGroupClass = 500;
const trainingClassOneByOne = 1500;
const alexMonthlySportBudget = 3000;

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程
const AlexBudget = alexMonthlySportBudget - yogaGroupClass * 3 - trainingGroupClass * 3

console.log(`Alex 買完課程了，他一共剩下 ${AlexBudget} 元`);

// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）
let classSesstionsNum = 14
let totalPrice = 2520
let avergePrice = totalPrice/14
let classTime = 50
let discount = 0.9


// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
// 4-2. 目前一起等待的機車有 8 台
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽
let trafficLight = 'red';
let isCrossRoad = false;
let trafficLightRemainTime = 28;
let motorcycleCont = 8;
let cloudCount = 5;
const sunCount = 1;

// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; // 中午喝了 500cc
myWater += 1000; // 下午補了 1000cc
myWater -= 700; // 健身喝了 700cc

console.log(`Alex 的水壺還有 ${myWater}cc 的水`);

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

let totalBill = 0;
const machineUsePrice = 50;
const groupClass = 150
let machineUsePriceTotal = machineUsePrice * 3
let groupClassesTotal = groupClass * 2
totalBill = machineUsePriceTotal + groupClassesTotal

console.log(
  `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${totalBill}元`
);

// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let a = 8; // 範例：宣告了一個 a 的變數，並賦予了一個 8 的數字型別
let b = 0; // 宣告了一個 b 的變數，並賦予了一個 0 的數字型別
a = 13; // 重新賦予變數 a 13 的數字型別 a 的值為 13
a = b + 4; // 重新賦予變數 a 變數 b 加上 4 的數字型別 a 的值為 4
a - b; // 進行變數 a 減去變數 b 的運算，並未賦予新的值，計算結果為 4
b += 1; // 重新賦予變數 b 的值，值為原本 b 的值加上 1, b 的值為 1

// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world'; // 字串
let d = 456; // 數字
let e = c + d; // 字串
let f = false; // 布林
let g = d + d; // 數字
let h = f + g; // 數字

// 請從以下新增註解，告知上面每行各別是哪些型別
// a 是 string
// b 是 ???
// c 是字串
// d 是數字
// e 是字串
// f 是布林
// g 是數字
// h 是數字

// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let numberArr1 = [5, 10, 15]; // 宣告變數 numberArr1 為陣列型別
let numberArr2 = numberArr1; // 宣告變數 numberArr2 為 numberArr1
numberArr2.push(20); // 在變數 numberArr2 的尾端送入新的值 20
numberArr2 = [25, 30, 35]; // 重新賦予變數 numberArr2 新的陣列內容
console.log(numberArr1, numberArr2);
// numberArr1 [5, 10, 15, 20]
// numberArr2 [25, 30, 35]
