import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 7];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);

console.log(chalk.cyanBright("Hello there sir...."));