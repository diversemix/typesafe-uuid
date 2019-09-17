# typesafe-uuid
> Library to enable the definition of different types of objects indexed by a uuid

## Install

You can add this library to your project using:
```
npm install diversemix/typesafe-uuid
```
or
```
yarn install diversemix/typesafe-uuid
```


## Example Usage

```
class AnimalId extends uuidType<'AnimalId'>() {}
class VegtableId extends uuidType<'VegtableId'>() {}

let dog: AnimalId = AnimalId.fromUuid('200a6b06-1120-4970-a0dc-3c48102d46ad');
let carrot : VegtableId = VegtableId.fromUuid('5ec48ef0-181d-454b-9834-a4d2c070b43a');

dog = carrot // type error 

```

see [corresponding test](https://github.com/diversemix/typesafe-uuid/blob/b36e645ffa60fc9036ccafc09173daeb50adaa78/src/uuidType.spec.ts#L52)
