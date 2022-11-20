import {Callback, FilterQuery, Model, ProjectionType, QueryOptions, UpdateQuery} from "mongoose";

export class BaseRepository<T> {
    private Model: Model<T>;

    constructor(model: Model<T>){
        this.Model = model;
    }

    create(payload = {}): Promise<T> {
        return this.Model.create(payload);
    }

    async findOne<T>(filter?: FilterQuery<T>,
                  projection?: ProjectionType<T> | null,
                  options?: QueryOptions<T> | null,) {
        return this.Model.findOne(filter, projection, options);
    }

    async findOneAndUpdate<T>(filter?: FilterQuery<T>,
                           update?: UpdateQuery<T>,
                           options?: QueryOptions<T> | null,) {
        return this.Model.findOneAndUpdate(filter, update, options);
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

    createMany(data : any): Promise<T[]> {
        return this.Model.insertMany(data);
    }
}

