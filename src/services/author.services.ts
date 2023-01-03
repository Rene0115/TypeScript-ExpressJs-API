import authorModel from "../models/author.model";

class AuthorServices {
    async create(data: object) {
        const author = await authorModel.create(data);
        return author;
    }
    async update(id: string) {
        const author = await authorModel.findByIdAndUpdate(id);
        return author;
    }
    async findByEmail(data: any) {
        const user = await authorModel.findOne({ email: data.email });
        return user;
    }
}

export default new AuthorServices();
