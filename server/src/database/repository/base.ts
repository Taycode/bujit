import {Callback, FilterQuery, Model, ProjectionType, QueryOptions} from "mongoose";

export class BaseRepository<T> {
    private Model: Model<T>;

    constructor(model: Model<T>){
        this.Model = model;
    }

    create(payload = {}) {
        return this.Model.create(payload);
    }

    async findOne(filter?: FilterQuery<T>,
                  projection?: ProjectionType<T> | null,
                  options?: QueryOptions<T> | null,) {
        return this.Model.findOne(filter, projection, options) as T;
    }

    async findById(id: string) {
        return this.Model.findById(id)
            .catch(() => null);
    }

    async all(filter: FilterQuery<T>,
              projection?: ProjectionType<T> | null,
              options?: QueryOptions<T> | null,) {
        return this.Model.find(filter,projection, options) as T;
    }

    createMany(data : any) {
        return this.Model.insertMany(data);
    }
}

