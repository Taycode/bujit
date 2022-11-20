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

    async find(filter: FilterQuery<T>,
               projection?: ProjectionType<T> | null,
               options?: QueryOptions<T> | null): Promise<T[]> {
        return this.Model.find(filter,projection, options);
    }

    createMany(data : any) {
        return this.Model.insertMany(data);
    }
}

