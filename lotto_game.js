const readline = require("readline");

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isStart() {}

// readline을 사용하여 입력받기
rl.question("로또를 얼마치 구매하셨습니까? ", (price) => {
  console.log(`${price / 1000}개를 구매하셨습니다`);
  let conprice = price /1000;
  
//랜덤 숫자 6개 출력 이중 for문 사용
for(i = 0; i < conprice; i++){
  let Readom = [];
  for(j=0; j<6; j++){
    
    Readom.push(Math.floor(Math.random()*45)+1);    //45개의 랜덤 숫자 생성   Math: 랜덤함수
    
  }
  console.log(Readom);
}

  rl.question("당첨번호를 입력하세요(,형태로 적어주세요) ", (number) => {
    console.log(`당첨번호는 ${number}입니다`);
    rl.question("보너스 번호를 입력하세요", (bonus) => {
      console.log(`보너스번호는 ${bonus} 입니다`);
    });
    rl.close(); // 입력 종료
  });
});
