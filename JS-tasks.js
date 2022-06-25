function fn1() {
    console.log('до fn2');
    fn2();
    console.log('после fn2');
 }
  
 function fn2() {
    console.log('до fn3');
    fn3();
    console.log('после fn3');
 }
  
 function fn3() {
    console.log('внутри fn3');
    throw new Error('Ошибка!!!');
 }
  
 try {
    console.log('до fn1');
    fn1();
    console.log('после fn1');
 } catch (e) {
    console.log(e.message);
 }