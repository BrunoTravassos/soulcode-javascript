/* class MyMath{
    static sorteiaNumero() {
        var num = 0;
        while (true) {
            num = Math.round(Math.random() * 100);
            if (num > 0 && num <= 60) {
                return num;
            }
        }
    }
}
document.write(MyMath.sorteiaNumero());
 */

class MyMath {
    a = 0;
    b = 0;
  sorteiaNumero() {
    var num = 0;
    while (true) {
      num = Math.round(Math.random() * 100);
      if (num > 0 && num <= 60) {
        return num;
      }
    }
  }
}
var obj = new MyMath();
document.write(obj.sorteiaNumero());