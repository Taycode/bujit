import {Model} from "mongoose";

export class BaseRepository<T> {
    private Model: Model<T>;

    constructor(model: Model<T>){
        this.Model = model;
    }

    create(payload = {}) {
        return this.Model.create(payload);
    }

    findOne(condition = {}) {
        return this.Model.findOne({ ...condition });
    }

    findById(id: string) {
        return this.Model.findById(id)
            .catch(() => null);
    }

    all(condition = {}) {
        return this.Model.find(condition);
    }

    createMany(data = []) {
        return this.Model.insertMany(data);
    }
}

