module.exports = function solveEquation(equation) {
  // your implementation
  var sol = [];
  var i1, i2, i3, j1, j2, j3, a, s1, b, s2, c, mathformula, x1, x2;
  a = parseInt(equation);
  j1 = a+' * x^2 ';
  i1 = equation.replace(j1, '');
  s1 = i1.substring(0, 1);
  i2 = i1.substring(1);
  b = parseInt(i2);
  j2 = j1+s1+' '+b+' * x ';
  i3 = equation.replace(j2, '');
  s2 = i3.substring(0, 1);
  j3 = i3.substring(1);
  c = parseInt(j3);
  i=0;
  if (s1 === '-') {
    b = -b;
  }
  if (s2 === '-') {
    c = -c;
  }
  mathformula = b*b-4*a*c;        
    if (mathformula => 0) {
      x1 = Math.round((-b-Math.sqrt(mathformula))/(2*a));
      x2 = Math.round((-b+Math.sqrt(mathformula))/(2*a));      
    }
    if (x1 > x2) {
      sol[0] = x2;
      sol[1] = x1;
    }
    else {
      sol[0] = x1;
      sol[1] = x2;
    }
  return sol;
}