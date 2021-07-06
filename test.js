import { parser } from './index.js';

(async() => {
    const env = {};
    await parser(
        env,
        'test.env',
        true
    );

    console.log(env);
    console.log(env.TEST1);
    console.log(env.TEST2);
    console.log(env.TEST3);
    console.log(env.TEST4);
    console.log(env.TEST5);
    console.log(env.TEST6);
})();