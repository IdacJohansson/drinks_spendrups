import Transform from '@ember-data/serializer/transform';

export default class ObjectTransform extends Transform {
  deserialize(serialized) {
    return serialized;
  }

  serialize(deserialized) {
    return deserialized;
  }
}

//returnerar det serialiserade värdet som det är (model: object)