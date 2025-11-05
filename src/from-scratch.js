const makeIdFunc = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

const makePasswordChecker = (correctPassword) => {
  let attempts = 0;
  let locked = false;

  return (guess) => {
    if (locked) return "Account locked";

    if (guess === correctPassword) return true;

    attempts++;
    if (attempts >= 3) {
      locked = true;
      return "Account locked";
    }

    return false;
  };
};

const makeMultiplier = (multiplier) => {
  return (nums) => nums.map(num => num * multiplier);
};

const makeFilterByLength = (maxLength) => {
  return (strings) => strings.filter(str => str.length <= maxLength);
};

const makeGradeTracker = () => {
  const grades = [];

  return {
    addGrade(grade) {
      if (grade < 0 || grade > 100) return false;
      grades.push(grade);
      return true;
    },
    getAverage() {
      if (grades.length === 0) return 0;
      const total = grades.reduce((sum, g) => sum + g, 0);
      return total / grades.length;
    }
  };
};

const makeShoppingList = () => {
  const items = [];

  return {
    getItems() {
      return [...items];
    },
    addItem(item) {
      items.push(item);
      console.log(`${item} successfully added! Now you have ${items.length} item(s).`);
      return items.length;
    },
    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} successfully removed. You now have ${items.length} item(s).`);
        return true;
      } else {
        console.log(`${item} not found.`);
        return false;
      }
    }
  };
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
