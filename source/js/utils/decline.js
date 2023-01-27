const PLURAL_THRESHOLD = 5;

// Выбор словоформы по значению числа
export default (num, [form1, form2 = form1, form3 = form2]) => {
  const lastDigit = num % 10;

  if ((num % 100) - lastDigit === 10 || lastDigit >= PLURAL_THRESHOLD) {
    return form3;
  }

  if (lastDigit === 1) {
    return form1;
  }

  return form2;
};
