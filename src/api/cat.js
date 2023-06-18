import { Router } from "express";

const catRouter = Router();

const catFacts = [
  'Petro is cute.\n',
  'Cats are cute.\n',
  'Petro es mi esposo.\n',
  'Petro usa traje.\n',
  'Petro esta curvoso.\n',
  'Michel es hermoso.\n',
  'Todos deben amar a Michel.\n'
];

const getRandomNumber = () => Math.floor(Math.random() * 7);

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
