import { Router } from "express";

const catRouter = Router();

const catFacts = [
  'Petro is cute.\n',
  'Cats are cute.\n',
  'Cats are agile.\n'
];

const getRandomNumber = () => Math.floor(Math.random() * 3);

catRouter.get('/', (req, res) => {
  return res.status(200).send(`Meow.

-----------／＞　 フ
----------| 　_　_| 
--------／\` ミ＿xノ 
------/　　　　 |
-----/　 ヽ　　 ﾉ
-----│　　|　|　|
／￣|　　 |　|　|
--(￣ヽ＿_ヽ_)__)
＼二)
`);
});

catRouter.get('/fact', (req, res) => {
  return res.status(200).send(catFacts[getRandomNumber()]);
})

export { catRouter };
