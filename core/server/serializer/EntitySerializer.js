class EntitySerializer{
    constructor(world){
        this.world = world;
        this.bodySerializer = new BodySerializer();
    }

    serialize(){
        var out = {
            create: [],
            update: [],
            remove: []
        }

        this.word.composites.forEach(function(composite){
            var entity = composite.entity;
            var entityDTO = {};
            entityDTO.bodies = this.bodySerializer.serialize(entity.bodies)

            out.update.push(entityDTO);
        });

        return out;
    }

}

module.exports = EntitySerializer;
