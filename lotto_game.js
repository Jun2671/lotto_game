//Math : 자바스크립트에서 랜덤함수 생성
//Array.form() : 객체를 배열로 바꾸어 주는 함수
const readline = require("readline");

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lottoRandom(price) {
  let count = price/1000; //로또 갯수 생성
  let newArray = [];
  for(let i = 0 ; i< count ; i++) {
    let set = new Set();
    // while(set.size<6) {
    //   set.add(Math.floor(Math.random()*45)+1);
    // }
    for(let j =0; j<6; j++){
      set.add(Math.floor(Math.random()*45)+1);
    }
    newArray.push(Array.from(set));
  }
  console.log(newArray);
  return newArray;
}

// readline을 사용하여 입력받기
rl.question("로또를 얼마치 구매하셨습니까? ", (price) => {
  lottoRandom(price);
  rl.question("당첨번호를 입력하세요(,형태로 적어주세요) ", (number) => {
    console.log(`당첨번호는 ${number}입니다`);
    rl.question("보너스 번호를 입력하세요", (bonus) => {
      console.log(`보너스번호는 ${bonus} 입니다`);
    });
  });
  rl.close(); // 입력 종료
});
