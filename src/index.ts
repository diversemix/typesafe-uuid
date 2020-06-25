import { uuidType } from 'typesafe-uuid';

class AnimalId extends uuidType<'AnimalId'>() {}
class VegtableId extends uuidType<'VegtableId'>() {}

let dog: AnimalId = AnimalId.fromUuid('200a6b06-1120-4970-a0dc-3c48102d46ad');
let carrot : VegtableId = VegtableId.fromUuid('5ec48ef0-181d-454b-9834-a4d2c070b43a');

dog = carrot // type error


