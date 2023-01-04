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
        const author = await authorModel.findOne({ email: data.email });
        return author;
    }
    async findById(id: string) {
        const author = await authorModel.findOne({ _id: id });
        return author;
    }
}

export default new AuthorServices();
